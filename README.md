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
- Opt-in type: Web/Online opt-in only
- Proof of consent URLs:
  - https://instainstru.com/sms-terms.html
  - https://instainstru.com/sms-opt-in.html
- STOP/HELP per pages; frequency: varies by activity; contact: support@instainstru.com

## TFV RESUBMISSION (copy into Twilio form)

- **Business Entity / Legal Name:** iNSTAiNSTRU LLC (DBA: iNSTAiNSTRU)
- **Website:** https://instainstru.com
- **Use Case:** Customer Care / Conversational (non-marketing). We text students about booking confirmations/updates and two-way support (e.g., rescheduling, instructor messages). Optional marketing messages are sent only if the separate marketing checkbox is selected.
- **Opt-in Type(s):** Web/Online Opt-in ONLY (no verbal, no QR, no text keyword).
- **Opt-in Workflow (exact):** Users provide their mobile number on our web form and **must check a standalone consent checkbox** branded “iNSTAiNSTRU” (not preselected). The consent language includes STOP/HELP, message frequency varies, and Msg & data rates may apply. See proof URLs below.
- **Proof of Consent URLs (public):**
  - https://instainstru.com/sms-opt-in.html
  - https://instainstru.com/sms-terms.html
- **Opt-out Keywords:** STOP, CANCEL, END, QUIT, UNSUBSCRIBE — immediate cessation; confirmation reply sent.  
- **Help:** HELP — we reply with contact info (support@instainstru.com) and a brief help message.
- **Message Frequency:** Varies by activity.
- **Sample Messages:**
  - “iNSTAiNSTRU: Your lesson with {{instructor}} on {{date}} at {{time}} is confirmed. Reply HELP for help, STOP to opt out.”
  - “iNSTAiNSTRU: Your booking request was updated. Check your email for details. Reply HELP for help, STOP to opt out.”
  - “iNSTAiNSTRU Support: Thanks for reaching out—how can we help? Reply STOP to opt out.”
- **Data Retention (Consent Records):** We store phone, timestamp, IP, user agent, page URL, and the exact consent text version agreed to for audit and compliance.
