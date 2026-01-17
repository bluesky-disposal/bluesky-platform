-- =========================================================
-- Migration: dumpsters
-- File: 011_dumpsters.sql
-- Purpose: Full dumpster catalog
-- Depends on: dumpster_types, dumpster_sizes
-- =========================================================

-- 1️⃣ Table creation
create table if not exists dumpsters (
  id uuid primary key default gen_random_uuid(),
  dumpster_type_id uuid references dumpster_types(id),
  dumpster_size_id uuid references dumpster_sizes(id),
  title text not null,
  images text[],
  allowed_items text[],
  not_allowed_items text[]
);

-- 2️⃣ Indexes
create index if not exists idx_dumpsters_type on dumpsters(dumpster_type_id);
create index if not exists idx_dumpsters_size on dumpsters(dumpster_size_id);

-- 3️⃣ Enable Row Level Security
alter table dumpsters enable row level security;

-- 4️⃣ Policies

-- 🔐 Public read
create policy "Public read dumpsters"
on dumpsters for select
using (true);

-- 🔐 Admins full access
create policy "Admin full access dumpsters"
on dumpsters for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
