create table flaky_tests (
  id uuid primary key default gen_random_uuid(),
  test_name text,
  error text,
  repo text,
  timestamp timestamptz default now()
);
