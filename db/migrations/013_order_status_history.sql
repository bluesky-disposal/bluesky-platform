-- =========================================================
-- Migration: order_status_history
-- File: 013_order_status_history.sql
-- Purpose: Track order status changes (audit)
-- Depends on: orders
-- =========================================================

-- 1️⃣ Table creation
create table if not exists order_status_history (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  old_status text,
  new_status text,
  changed_at timestamptz default now()
);

-- 2️⃣ Indexes
create index if not exists idx_order_status_history_order_id on order_status_history(order_id);

-- 3️⃣ Enable Row Level Security
alter table order_status_history enable row level security;

-- 4️⃣ Policies

-- 🔐 Customer can read own order history
create policy "Customer read own order status history"
on order_status_history for select
using (
  order_id in (select id from orders where customer_id = (
    select id from customers where user_id = auth.uid()
  ))
);

-- 🔐 Admins full access
create policy "Admin full access order status history"
on order_status_history for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
