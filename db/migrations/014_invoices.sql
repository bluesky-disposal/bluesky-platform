-- =========================================================
-- Migration: invoices
-- File: 014_invoices.sql
-- Purpose: Invoices linked to orders
-- Depends on: orders, invoice_status_enum
-- =========================================================

-- 1️⃣ Table creation
create table if not exists invoices (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  invoice_number text not null unique,
  subtotal numeric(10,2),
  tax numeric(10,2),
  total numeric(10,2),
  status invoice_status_enum not null default 'DRAFT'
);

-- 2️⃣ Indexes
create index if not exists idx_invoices_order_id on invoices(order_id);
create index if not exists idx_invoices_status on invoices(status);

-- 3️⃣ Enable Row Level Security
alter table invoices enable row level security;

-- 4️⃣ Policies

-- 🔐 Customer can read own invoice
create policy "Customer read own invoices"
on invoices for select
using (
  order_id in (select id from orders where customer_id = (
    select id from customers where user_id = auth.uid()
  ))
);

-- 🔐 Admins full access
create policy "Admin full access invoices"
on invoices for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
