-- StudyHub private cross-device sync table
-- Run this whole script once in Supabase Dashboard → SQL Editor.
-- Every account can access only its own row.

create table if not exists public.studyhub_user_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.studyhub_user_data enable row level security;

revoke all on table public.studyhub_user_data from anon, authenticated;
grant select, insert, update on table public.studyhub_user_data to authenticated;

drop policy if exists "Users can read their own StudyHub data" on public.studyhub_user_data;
drop policy if exists "Users can create their own StudyHub data" on public.studyhub_user_data;
drop policy if exists "Users can update their own StudyHub data" on public.studyhub_user_data;

create policy "Users can read their own StudyHub data"
on public.studyhub_user_data for select to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can create their own StudyHub data"
on public.studyhub_user_data for insert to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own StudyHub data"
on public.studyhub_user_data for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);
