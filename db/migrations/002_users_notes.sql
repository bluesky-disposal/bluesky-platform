-- =========================================================
-- Migration: users
-- File: 002_users_notes.sql
-- Purpose: Application users mapped to Supabase auth.users
-- Depends on: auth.users, user_role_enum, user_status_enum
-- =========================================================

-- 1️⃣ Table creation
create table if not exists public.users (
  id uuid primary key
    references auth.users(id)
    on delete cascade,

  email text not null unique,

  role user_role_enum not null default 'CUSTOMER',
  status user_status_enum not null default 'ACTIVE',

  created_at timestamptz not null default now(),
  last_login_at timestamptz
);

-- 2️⃣ Indexes
create index if not exists idx_users_email
  on public.users(email);

create index if not exists idx_users_role
  on public.users(role);

-- 3️⃣ Enable Row Level Security
alter table public.users enable row level security;

-- 4️⃣ Policies

-- 🔐 Policy: Users can read their own profile
create policy "Users can read their own profile"
on public.users
for select
using (auth.uid() = id);

-- 🔐 Policy: Users can update their own profile
create policy "Users can update their own profile"
on public.users
for update
using (auth.uid() = id);

-- 🔐 Policy: Admins can read/write all users (SUPER role only)
create policy "Admins full access"
on public.users
for all
using (
  exists (
    select 1
    from admins a
    where a.user_id = auth.uid()
      and a.admin_role = 'SUPER'
      and a.status = 'ACTIVE'
  )
);
