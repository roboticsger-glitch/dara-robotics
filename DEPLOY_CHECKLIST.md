# Deployment checklist

1. Install Node.js 20.9+ (Node 22 LTS is also fine).
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Create a Supabase project and run `supabase/schema.sql`.
5. Add the Supabase URL, publishable key and server-only service role key.
6. In Supabase Auth, create your admin user. Set `ADMIN_EMAIL` to exactly that email.
7. Run `npm run dev` and test `/`, `/robots`, `/request-quote`, and `/admin/login`.
8. Replace demo product names/images with supplier-approved content.
9. Replace placeholder contact/company details in `lib/site.ts`.
10. Push to GitHub and import into Vercel. Add the same environment variables in Vercel.
11. Connect your domain and verify quote/contact submissions.
12. Before commercial launch, add final Saudi legal/privacy/returns/VAT/CR content appropriate to your entity and product categories.
