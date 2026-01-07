# InstaInstru Landing Page

Marketing and informational landing page for [instainstru.com](https://instainstru.com).

## Tech Stack

- **Framework:** Next.js 16.x (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/          # Next.js App Router pages
├── components/   # React components
│   ├── ui/       # Reusable UI primitives
│   ├── layout/   # Layout components
│   └── sections/ # Landing page sections
├── lib/          # Utilities and constants
└── public/       # Static assets
```

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Purple | `#7E22CE` | Primary brand color |
| Lavender | `#C084FC` | Secondary/accents |
| Yellow | `#FFD93D` | CTAs and highlights |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main landing page |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/sms-terms` | SMS Terms & Consent |
| `/sms-opt-in` | SMS Opt-in Form |

## Related

- [Main Platform](https://beta.instainstru.com) - Beta platform
- [Documentation](https://github.com/instainstru/instainstru) - Main repo
