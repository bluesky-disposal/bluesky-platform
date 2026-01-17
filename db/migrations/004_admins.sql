-- =========================================================
-- Migration: admins
-- File: 004_admins.sql
-- Purpose: Admin accounts and role control
-- Depends on: users, admin_role_enum, user_status_enum
-- =========================================================

-- 1️⃣ Table creation
create table if not exists admins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  name text not null,
  admin_role admin_role_enum not null,
  status user_status_enum not null default 'ACTIVE'
);

-- 2️⃣ Indexes
create index if not exists idx_admins_user_id on admins(user_id);

-- 3️⃣ Enable Row Level Security
alter table admins enable row level security;

-- 4️⃣ Policies

-- 🔐 Admin can read their own record
create policy "Admins read own record"
on admins for select
using (auth.uid() = user_id);

-- 🔐 Super admins have full access
create policy "Super admins full access"
on admins for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.admin_role = 'SUPER'
      and a.status = 'ACTIVE'
  )
);
