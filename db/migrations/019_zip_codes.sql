-- =========================================================
-- Migration: zip_codes
-- File: 019_zip_codes.sql
-- Purpose: Zip codes with geolocation and county mapping
-- Depends on: counties
-- =========================================================

-- 1️⃣ Table creation
create table if not exists zip_codes (
  id uuid primary key default gen_random_uuid(),
  zip text not null,
  county_id uuid references counties(id),
  city text not null,
  lat numeric,
  lng numeric
);

-- 2️⃣ Indexes
create index if not exists idx_zip_codes_zip on zip_codes(zip);
create index if not exists idx_zip_codes_county_id on zip_codes(county_id);

-- 3️⃣ Enable Row Level Security
alter table zip_codes enable row level security;

-- 4️⃣ Policies

-- 🔐 Public read
create policy "Public read zip codes"
on zip_codes for select
using (true);

-- 🔐 Admin full access
create policy "Admin full access zip codes"
on zip_codes for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
