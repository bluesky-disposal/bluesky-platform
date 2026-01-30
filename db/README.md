# Database Schema – BlueSky

This folder is the **single source of truth** for the database schema.

## Structure
- `migrations/` – Versioned schema files (tables, enums, RLS, policies)
- `seed/` – Development-only seed data
- Supabase SQL Editor is used ONLY to execute these files

## Rules
- Never modify tables manually in Supabase without a migration
- Never delete migrations
- Schema changes require a new migration file

## Execution Order
Run migrations in numeric order:
001 → 021

## Environments
- Dev: Supabase project (local or cloud)
- Prod: Supabase production project

## Ownership
This schema is shared between frontend and backend teams.
