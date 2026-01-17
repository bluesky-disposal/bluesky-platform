-- =========================================================
-- Migration: pricing_rules
-- File: 020_pricing_rules.sql
-- Purpose: Core pricing engine
-- Depends on: counties, dumpster_types, dumpster_sizes
-- =========================================================

-- 1️⃣ Table creation
create table if not exists pricing_rules (
  id uuid primary key default gen_random_uuid(),
  county_id uuid references counties(id),
  dumpster_type_id uuid references dumpster_types(id),
  dumpster_size_id uuid references dumpster_sizes(id),
  base_price numeric(10,2),
  included_days integer,
  extra_day_price numeric(10,2),
  included_tons numeric,
  extra_ton_price numeric(10,2),
  shipping_price numeric(10,2)
);

-- 2️⃣ Indexes
create index if not exists idx_pricing_rules_county on pricing_rules(county_id);
create index if not exists idx_pricing_rules_dumpster_type on pricing_rules(dumpster_type_id);
create index if not exists idx_pricing_rules_dumpster_size on pricing_rules(dumpster_size_id);

-- 3️⃣ Enable Row Level Security
alter table pricing_rules enable row level security;

-- 4️⃣ Policies

-- 🔐 Admin full access only
create policy "Admin full access pricing rules"
on pricing_rules for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
