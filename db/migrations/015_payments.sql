-- =========================================================
-- Migration: payments
-- File: 015_payments.sql
-- Purpose: Payments linked to orders and invoices
-- Depends on: orders, invoices, payment_gateway_enum, payment_status_enum
-- =========================================================

-- 1️⃣ Table creation
create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  invoice_id uuid references invoices(id) on delete cascade,
  gateway payment_gateway_enum,
  transaction_id text,
  amount numeric(10,2),
  status payment_status_enum,
  paid_at timestamptz
);

-- 2️⃣ Indexes
create index if not exists idx_payments_order_id on payments(order_id);
create index if not exists idx_payments_invoice_id on payments(invoice_id);
create index if not exists idx_payments_status on payments(status);

-- 3️⃣ Enable Row Level Security
alter table payments enable row level security;

-- 4️⃣ Policies

-- 🔐 Customer can read their own payments
create policy "Customer read own payments"
on payments for select
using (
  order_id in (select id from orders where customer_id = (
    select id from customers where user_id = auth.uid()
  ))
);

-- 🔐 Admins full access
create policy "Admin full access payments"
on payments for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
