-- Run this in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null,
  short_description text not null,
  description text not null,
  industries text[] not null default '{}',
  service_modes text[] not null default '{}',
  image_url text not null,
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('active','draft')),
  payload text,
  runtime text,
  navigation text,
  lead_time text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  email text not null,
  phone text not null,
  interest text,
  commercial_model text,
  message text not null,
  status text not null default 'new',
  source text default 'website',
  created_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.products enable row level security;
alter table public.inquiries enable row level security;
alter table public.contact_messages enable row level security;

-- Public catalogue can read only active products.
drop policy if exists "public can read active products" on public.products;
create policy "public can read active products" on public.products for select using (status='active');

-- Enquiries/contact writes are performed by server-side API using service-role key.
-- Do NOT expose the service-role key in NEXT_PUBLIC variables.

-- Starter product rows. Edit or delete these after importing your real supplier catalogue.
insert into public.products (slug,name,category,short_description,description,industries,service_modes,image_url,featured,status,payload,runtime,navigation,lead_time) values
('clean-pro-x1','CleanPro X1','Cleaning Robots','Autonomous commercial floor scrubbing for malls, hospitals and large facilities.','A high-coverage autonomous cleaning platform designed for large indoor facilities. Supports scheduled cleaning, autonomous charging, obstacle avoidance and fleet supervision.',array['Malls','Hospitals','Airports','Warehouses'],array['Purchase','Rental','RaaS'],'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85',true,'active',null,'Up to 6 hours','LiDAR + vision','4–8 weeks'),
('serve-bot-s2','ServeBot S2','Hospitality Robots','Autonomous food and item delivery for restaurants, cafés and hotels.','A compact indoor delivery robot that can move meals, amenities and small items between staff and customers while avoiding people and obstacles.',array['Restaurants','Hotels','Cafés','Events'],array['Purchase','Rental','RaaS'],'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1400&q=85',true,'active','40 kg','10–12 hours','SLAM','3–6 weeks')
on conflict (slug) do nothing;
