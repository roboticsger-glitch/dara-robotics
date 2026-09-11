# Nexa Robotics Saudi — full-stack website starter

A deployable B2B robotics website built with Next.js 16.3, React 19.2 and Supabase, including SSR auth cookie refresh through Next.js Proxy.

## Included
- High-end responsive marketing site
- Robot catalogue + individual product pages
- Industry solution pages
- Integration/service pages
- Quote / robotics assessment form
- Contact form
- Server-side API routes
- Supabase database schema
- Demo fallback when Supabase is not configured
- Protected admin login, catalogue management and lead dashboard
- SEO metadata and mobile navigation
- Purchase / Rental / RaaS positioning

## 1. Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000

## 2. Connect Supabase
1. Create a Supabase project.
2. Open SQL Editor and run `supabase/schema.sql`.
3. In `.env.local`, set:
```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVER_ONLY_SERVICE_ROLE_KEY
```
4. Restart `npm run dev`.

**Security:** Never expose `SUPABASE_SERVICE_ROLE_KEY` as a `NEXT_PUBLIC_...` variable. The public forms post to Next.js API routes, and those server routes write to Supabase.

## 3. Customize before launch
- Edit company details in `lib/site.ts`.
- Replace Nexa Robotics with your final brand name.
- Replace all demo robot products and stock imagery with approved supplier models/assets.
- Add your CR/VAT/legal/privacy/returns information as appropriate for your Saudi entity and sales model.
- Create an admin user in Supabase Auth and make its email equal to `ADMIN_EMAIL`.
- Add email / WhatsApp / CRM notifications for new quote requests.

## 4. Deploy to Vercel
1. Push this folder to GitHub/GitLab/Bitbucket.
2. Import the repository into Vercel.
3. Add the three Supabase environment variables in Vercel project settings.
4. Deploy.
5. Add your custom domain.

Next.js is natively supported by Vercel. You can also run the application as a Node server with `npm run build && npm start`.

## Suggested production upgrades
- Product image uploads via Supabase Storage
- Arabic locale + RTL pages
- Arabic/English CMS fields
- Email notifications (Resend/Postmark/etc.)
- WhatsApp Business integration
- HubSpot/Zoho/Odoo CRM integration
- Calendly/meeting booking
- SEO product/organization schema markup
- Cookie/privacy controls and final legal pages
- Analytics and conversion tracking
- Supplier/dealer portal
- Quote builder and PDF proposal generation

## Project structure
- `app/` — routes/pages/API endpoints
- `components/` — reusable UI and forms
- `lib/` — product data, types, site settings, Supabase helpers
- `supabase/schema.sql` — database schema

## Demo mode
Without Supabase variables, the website still renders the full demo catalogue and forms return a demo confirmation. Once Supabase is configured, submissions are persisted to the database.
