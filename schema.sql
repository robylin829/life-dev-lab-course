-- Run ONCE in a NEW dedicated Supabase teaching project, using SQL Editor.
-- No existing tables are deleted or replaced. If events exists, stop and inspect it.
begin;
create table public.events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id),
  title text not null check (char_length(btrim(title)) between 1 and 80 and title ~ '[^[:space:]]'),
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  completed boolean not null default false,
  created_at timestamptz not null default now(),
  constraint time_in_order check (ends_at > starts_at)
);
create index events_owner_start_idx on public.events(user_id, starts_at);
alter table public.events enable row level security;
revoke all on public.events from anon;
revoke all on public.events from authenticated;
grant select, insert, update on public.events to authenticated;
create policy "read own events" on public.events for select to authenticated
  using ((select auth.uid()) = user_id);
create policy "insert own events" on public.events for insert to authenticated
  with check ((select auth.uid()) = user_id);
create policy "update own events" on public.events for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
commit;
