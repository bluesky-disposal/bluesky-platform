-- =========================================================
-- Migration: owners
-- File: 005_owners.sql
-- Purpose: Business owners linked to users
-- Depends on: users
-- =========================================================

-- 1️⃣ Table creation
create table if not exists owners (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  business_name text not null,
  contact_phone text
);

-- 2️⃣ Enable Row Level Security
alter table owners enable row level security;

-- 3️⃣ Policies

-- 🔐 Owner can read their own record
create policy "Owner read own record"
on owners for select
using (auth.uid() = user_id);

-- 🔐 Owner can update their own record
create policy "Owner update own record"
on owners for update
using (auth.uid() = user_id);

-- 🔐 Admins (SUPER role) have full access
create policy "Super admins full access"
on owners for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.admin_role = 'SUPER'
      and a.status = 'ACTIVE'
  )
);
