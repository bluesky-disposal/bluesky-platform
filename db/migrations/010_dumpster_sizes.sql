-- =========================================================
-- Migration: dumpster_sizes
-- File: 010_dumpster_sizes.sql
-- Purpose: Dumpster catalog sizes
-- =========================================================

-- 1️⃣ Table creation
create table if not exists dumpster_sizes (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  width_ft numeric,
  height_ft numeric,
  length_ft numeric
);

-- 2️⃣ Indexes
create index if not exists idx_dumpster_sizes_label on dumpster_sizes(label);

-- 3️⃣ Enable Row Level Security
alter table dumpster_sizes enable row level security;

-- 4️⃣ Policies

-- 🔐 Public read
create policy "Public read dumpster sizes"
on dumpster_sizes for select
using (true);

-- 🔐 Admins full access
create policy "Admin full access dumpster sizes"
on dumpster_sizes for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
