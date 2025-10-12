# instainstru-public

Two public pages for Twilio toll-free messaging verification:

- https://instainstru.com/sms-terms.html
- https://instainstru.com/sms-opt-in.html

## Deploy (Vercel)
1. `npm i -g vercel` (if needed) and `vercel login`
2. `vercel` → create a new project, **root = public-site/**
3. `vercel --prod` to deploy production
4. In Vercel > Project > Settings > Domains: add **instainstru.com** (and/or **www.instainstru.com**)

## DNS (Cloudflare)
- Set **A @ → 76.76.21.21** (DNS only / gray cloud)
- Set **CNAME www → cname.vercel-dns.com** (DNS only) OR 301 www → apex

## Verify
- `curl -I https://instainstru.com/sms-terms.html` → 200
- `curl -I https://instainstru.com/sms-opt-in.html` → 200
- `curl -I https://instainstru.com/` → 404

## Twilio Toll-Free Verification
- Use case: Customer Care / Conversational
- Opt-in type: Web form (and optionally via text keyword)
- Proof of consent URLs:
  - https://instainstru.com/sms-terms.html
  - https://instainstru.com/sms-opt-in.html
- STOP/HELP per pages; frequency: varies by activity; contact: support@instainstru.com
