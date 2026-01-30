-- =========================================================
-- Migration: dumpster_types
-- File: 009_dumpster_types.sql
-- Purpose: Dumpster catalog types
-- =========================================================

-- 1️⃣ Table creation
create table if not exists dumpster_types (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  is_active boolean default true
);

-- 2️⃣ Indexes
create index if not exists idx_dumpster_types_name on dumpster_types(name);

-- 3️⃣ Enable Row Level Security
alter table dumpster_types enable row level security;

-- 4️⃣ Policies

-- 🔐 Public read
create policy "Public read dumpster types"
on dumpster_types for select
using (true);

-- 🔐 Admins full access
create policy "Admin full access dumpster types"
on dumpster_types for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
