-- =========================================================
-- Migration: billing_addresses
-- File: 007_billing_addresses.sql
-- Purpose: Billing/shipping addresses snapshot at checkout
-- Depends on: customers
-- =========================================================

-- 1️⃣ Table creation
create table if not exists billing_addresses (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references customers(id) on delete cascade,
  full_name text not null,
  email text not null,
  phone text,
  address text not null,
  city text not null,
  state text not null,
  zip text not null
);

-- 2️⃣ Indexes
create index if not exists idx_billing_addresses_customer_id on billing_addresses(customer_id);
create index if not exists idx_billing_addresses_zip on billing_addresses(zip);

-- 3️⃣ Enable Row Level Security
alter table billing_addresses enable row level security;

-- 4️⃣ Policies

-- 🔐 Customer can read their own billing addresses
create policy "Customer read own billing addresses"
on billing_addresses for select
using (customer_id = (
  select id from customers where user_id = auth.uid()
));

-- 🔐 Customer can insert/update their own billing addresses
create policy "Customer manage own billing addresses"
on billing_addresses for all
using (customer_id = (
  select id from customers where user_id = auth.uid()
))
with check (customer_id = (
  select id from customers where user_id = auth.uid()
));

-- 🔐 Admins (active) have full access
create policy "Admin full access"
on billing_addresses for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
