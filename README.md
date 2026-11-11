# German Naval Logistics — Corporate Website

Bilingual (German / English) corporate website for **German Naval Logistics**, maritime technical spare parts and logistics provider for commercial shipping companies and fleet operators.

Built with a light, calm, restrained aesthetic featuring generous negative space, crisp typography, and subtle interactions.

---

## Tech Stack & Architecture

- **Framework:** Next.js (App Router, Server-Side Rendering / RSC by default)
- **Language:** JavaScript (`.jsx` / `.js`)
- **Styling:** Tailwind CSS v4 with custom maritime theme variables
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (`Button`, `Card`, `Sheet`, `DropdownMenu`, `Accordion`, `Input`, `Textarea`, `Label`, `Separator`, `Badge`, `Alert`)
- **Icons:** `react-icons/lu` (Lucide family with thin strokes)
- **Internationalization:** `next-intl` with locale-prefixed routes (`/de/...` and `/en/...`) and automatic language detection
- **Fonts:** `Manrope` (Body) and `Raleway` (Display/Headings) via `next/font/google`
- **Validation:** Zod + React Hook Form + Next.js Server Actions

---

## Getting Started

### 1. Install dependencies:
```bash
pnpm install
```

### 2. Run the development server:
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. Requests will automatically redirect to `/de` (or `/en` based on browser preference).

### 3. Build for production:
```bash
pnpm build
pnpm start
```

---

## Project Structure

```
├── app/
│   ├── [locale]/
│   │   ├── about/page.jsx       # About page (/de/about, /en/about)
│   │   ├── services/page.jsx    # Services & FAQ (/de/services, /en/services)
│   │   ├── impressum/page.jsx   # Legal notice (/de/impressum, /en/impressum)
│   │   ├── layout.jsx           # Root layout with fonts, header, and footer
│   │   ├── page.jsx             # Homepage
│   │   └── not-found.jsx        # Localized 404 page
│   ├── actions/
│   │   └── contact.js           # Server action handling inquiry form submissions
│   ├── globals.css              # Theme CSS variables & typography rules
│   ├── icon.svg                 # Maritime brand favicon
│   ├── robots.js                # Search engine crawlers policy
│   └── sitemap.js               # Dynamic multilingual sitemap
├── components/
│   ├── layout/                  # Header, Footer, MobileNav, LanguageSwitcher
│   ├── sections/                # Hero, TrustStrip, ServicesPreview, Process, WhyUs, ContactSection, FAQ
│   ├── shared/                  # Container, Section, Eyebrow, Reveal, PlaceholderImage
│   └── ui/                      # shadcn/ui primitives
├── i18n/
│   ├── routing.js               # Locale definitions & configuration
│   ├── navigation.js            # Localized Link, redirect, useRouter, usePathname
│   └── request.js               # Message loading per request
├── messages/
│   ├── de.json                  # Native German copy (formal "Sie")
│   └── en.json                  # Understated, professional English copy
├── lib/
│   ├── site.js                  # Global brand constants, contact info & placeholders
│   ├── utils.js                 # Utility helpers (cn)
│   └── validations.js           # Zod contact form validation schema
└── public/
    └── images/                  # Photo asset drops (see README in directory)
```

---

## How to Edit Translations

All visible copy is organized in `messages/de.json` and `messages/en.json`.
Both catalogs maintain identical keys for:
- `common`: Site name, buttons, tags, 404 text
- `nav`: Navigation link titles
- `hero`: Headlines, descriptions, and CTA labels
- `trust`: 4 trust metrics and descriptions
- `whatWeDo`: Narrative statements
- `servicesPreview`: Homepage preview cards
- `whyUs`: Numbered value pillars (01, 02, 03)
- `process`: 4-step workflow
- `contact`: Labels, placeholders, error alerts, and success messages
- `about`: Story, values, approach, and Hamburg logistics hub
- `services`: Detailed descriptions, bullet specifications, and 5-item FAQ
- `impressum`: Legal clauses and statutory disclosures
- `footer`: Brand descriptions and copyright

---

## How to Swap Placeholder Images

Placeholder visuals are rendered via `<PlaceholderImage />` in `@/components/shared/placeholder-image.jsx`.

To replace a placeholder with production photography:
1. Place optimized WebP images in `/public/images/` (refer to the dimensions in `public/images/README.md`).
2. Replace the `<PlaceholderImage />` tag in the relevant section component with Next.js `<Image />`:
```jsx
import Image from 'next/image';

<Image
  src="/images/your-photo.webp"
  alt="Descriptive maritime alt text"
  width={1200}
  height={800}
  className="rounded-lg object-cover w-full h-auto border border-border"
  priority // add for hero
/>
```

---

## Pre-Launch Checklist (Action Required)

Before putting this website live for public access:

- [ ] **Replace Legal Placeholders in `lib/site.js` & `messages/*.json`:**
  - `[VORNAME NACHNAME]` with actual Managing Director (Geschäftsführer).
  - `[000000]` with valid Commercial Register Number (Handelsregister HRA/HRB).
  - `[DE 000 000 000]` with official VAT ID (USt-IdNr.).
  - `[STRASSE NR., 20457 HAMBURG]` with exact registered office address.
- [ ] **Legal Review:**
  - Have the Impressum and Privacy Policy reviewed by a qualified German attorney (Fachanwalt für IT-Recht).
- [ ] **Connect Email Delivery in `app/actions/contact.js`:**
  - Integrate an email delivery service (such as [Resend](https://resend.com), Postmark, or AWS SES) to forward submitted inquiry payloads directly to your technical sales inbox (`operations@german-naval-logistics.com`).
- [ ] **Deploy Authentic Photography:**
  - Drop high-resolution photography of parts, vessels, and port facilities into `/public/images/`.
- [ ] **Domain & DNS:**
  - Set production domain in `lib/site.js` (`SITE_CONFIG.url`).
  - Configure DNS records (A/CNAME and SPF/DKIM/DMARC for email).
