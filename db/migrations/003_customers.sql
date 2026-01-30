-- =========================================================
-- Migration: customers
-- File: 003_customers.sql
-- Purpose: Customer profile linked to auth.users
-- Depends on: auth.users, customer_type_enum, customer_status_enum
-- =========================================================

-- 1️⃣ Table creation
create table if not exists customers (
  id uuid primary key default gen_random_uuid(),

  user_id uuid not null
    references auth.users(id)
    on delete cascade,

  first_name text not null,
  last_name text not null,
  phone text not null,

  customer_type customer_type_enum not null,
  company_name text,

  status customer_status_enum not null default 'ACTIVE',
  created_at timestamptz default now(),

  unique (user_id)
);

-- 2️⃣ Indexes
create index if not exists idx_customers_user_id on customers(user_id);
create index if not exists idx_customers_status on customers(status);

-- 3️⃣ Enable Row Level Security
alter table customers enable row level security;

-- 4️⃣ Policies

-- 🔐 Customer can read their own profile
create policy "Customer read own profile"
on customers for select
using (auth.uid() = user_id);

-- 🔐 Customer can update their own profile
create policy "Customer update own profile"
on customers for update
using (auth.uid() = user_id);

-- 🔐 Admin full access (active admins only)
create policy "Admin full access customers"
on customers for all
using (
  exists (
    select 1
    from admins
    where user_id = auth.uid()
      and status = 'ACTIVE'
  )
);

-- 🔐 System insert (customer inserts their own record)
create policy "System insert customer"
on customers for insert
with check (auth.uid() = user_id);
