-- =========================================================
-- Migration: payment_webhooks
-- File: 016_payment_webhooks.sql
-- Purpose: Store payment gateway webhooks
-- Depends on: orders
-- =========================================================

-- 1️⃣ Table creation
create table if not exists payment_webhooks (
  id uuid primary key default gen_random_uuid(),
  gateway text not null,
  payload jsonb,
  order_id uuid references orders(id),
  processed boolean default false,
  created_at timestamptz default now()
);

-- 2️⃣ Indexes
create index if not exists idx_payment_webhooks_order_id on payment_webhooks(order_id);
create index if not exists idx_payment_webhooks_gateway on payment_webhooks(gateway);

-- 3️⃣ Enable Row Level Security
alter table payment_webhooks enable row level security;

-- 4️⃣ Policies

-- 🔐 Admins only
create policy "Admin full access payment webhooks"
on payment_webhooks for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
