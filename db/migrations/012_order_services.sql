-- =========================================================
-- Migration: order_services
-- File: 012_order_services.sql
-- Purpose: Dumpsters and service details linked to orders
-- Depends on: orders, dumpsters
-- =========================================================

-- 1️⃣ Table creation
create table if not exists order_services (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  dumpster_id uuid references dumpsters(id),
  dumpster_type text,
  dumpster_size text,
  delivery_date date,
  pickup_date date,
  service_address_id uuid,
  price numeric(10,2)
);

-- 2️⃣ Indexes
create index if not exists idx_order_services_order_id on order_services(order_id);
create index if not exists idx_order_services_dumpster_id on order_services(dumpster_id);

-- 3️⃣ Enable Row Level Security
alter table order_services enable row level security;

-- 4️⃣ Policies

-- 🔐 Customer can read own services
create policy "Customer read own order services"
on order_services for select
using (
  order_id in (select id from orders where customer_id = (
    select id from customers where user_id = auth.uid()
  ))
);

-- 🔐 Admins full access
create policy "Admin full access order services"
on order_services for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
