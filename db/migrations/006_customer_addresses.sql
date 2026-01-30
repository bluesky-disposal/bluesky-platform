-- =========================================================
-- Migration: customer_addresses
-- File: 006_customer_addresses.sql
-- Purpose: Customer service addresses
-- Depends on: customers
-- =========================================================

-- 1️⃣ Table creation
create table if not exists customer_addresses (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references customers(id) on delete cascade,
  address_line1 text not null,
  city text not null,
  state text not null,
  zip text not null,
  is_default boolean default false
);

-- 2️⃣ Indexes
create index if not exists idx_customer_addresses_customer_id on customer_addresses(customer_id);
create index if not exists idx_customer_addresses_zip on customer_addresses(zip);

-- 3️⃣ Enable Row Level Security
alter table customer_addresses enable row level security;

-- 4️⃣ Policies

-- 🔐 Customer can read their own addresses
create policy "Customer read own addresses"
on customer_addresses for select
using (customer_id = (
  select id from customers where user_id = auth.uid()
));

-- 🔐 Customer can insert/update their own addresses
create policy "Customer manage own addresses"
on customer_addresses for all
using (customer_id = (
  select id from customers where user_id = auth.uid()
))
with check (customer_id = (
  select id from customers where user_id = auth.uid()
));

-- 🔐 Admins (active) have full access
create policy "Admin full access"
on customer_addresses for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
