-- =========================================================
-- Migration: support_tickets
-- File: 017_support_tickets.sql
-- Purpose: Customer support tickets
-- Depends on: customers, support_status_enum
-- =========================================================

-- 1️⃣ Table creation
create table if not exists support_tickets (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references customers(id) on delete cascade,
  subject text not null,
  message text not null,
  status support_status_enum not null default 'OPEN'
);

-- 2️⃣ Indexes
create index if not exists idx_support_tickets_customer_id on support_tickets(customer_id);
create index if not exists idx_support_tickets_status on support_tickets(status);

-- 3️⃣ Enable Row Level Security
alter table support_tickets enable row level security;

-- 4️⃣ Policies

-- 🔐 Customer can read/write their own tickets
create policy "Customer manage own support tickets"
on support_tickets for all
using (customer_id = (
  select id from customers where user_id = auth.uid()
))
with check (customer_id = (
  select id from customers where user_id = auth.uid()
));

-- 🔐 Admins full access
create policy "Admin full access support tickets"
on support_tickets for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
