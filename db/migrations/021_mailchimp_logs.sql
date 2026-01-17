-- =========================================================
-- Migration: mailchimp_logs
-- File: 021_mailchimp_logs.sql
-- Purpose: Sync logs with Mailchimp
-- Depends on: customers
-- =========================================================

-- 1️⃣ Table creation
create table if not exists mailchimp_logs (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers(id),
  email text not null,
  tags text[],
  mailchimp_id text,
  synced_at timestamptz default now()
);

-- 2️⃣ Indexes
create index if not exists idx_mailchimp_logs_customer_id on mailchimp_logs(customer_id);
create index if not exists idx_mailchimp_logs_email on mailchimp_logs(email);

-- 3️⃣ Enable Row Level Security
alter table mailchimp_logs enable row level security;

-- 4️⃣ Policies

-- 🔐 Customer can read own logs
create policy "Customer read own mailchimp logs"
on mailchimp_logs for select
using (customer_id = (
  select id from customers where user_id = auth.uid()
));

-- 🔐 Admins full access
create policy "Admin full access mailchimp logs"
on mailchimp_logs for all
using (
  exists (
    select 1 from admins a
    where a.user_id = auth.uid()
      and a.status = 'ACTIVE'
  )
);
