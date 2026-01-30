-- =========================================================
-- Migration: orders
-- File: 008_orders.sql
-- Purpose: Orders linked to customers and billing addresses
-- Depends on: customers, billing_addresses, order_status_enum
-- =========================================================

-- 1️⃣ Table creation
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references customers(id) on delete cascade,
  billing_address_id uuid references billing_addresses(id),
  order_status order_status_enum not null default 'REQUESTED',
  total_amount numeric(10,2) not null,
  created_at timestamptz default now()
);

-- 2️⃣ Indexes
create index if not exists idx_orders_customer_id on orders(customer_id);
create index if not exists idx_orders_status on orders(order_status);

-- 3️⃣ Enable Row Level Security
alter table orders enable row level security;

-- 4️⃣ Policies

-- 🔐 Customer can read their own orders
create policy "Customer read own orders"
on orders for select
using (customer_id = (
  select id from customers where user_id = auth.uid()
));

-- 🔐 Customer can insert orders for themselves
create policy "Customer insert own orders"
on orders for insert
with check (customer_id = (
  select id from customers where user_id = auth.uid()
));

-- 🔐 Admins (active) have full access
create policy "Admin full access orders"
on orders for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
