# Waypoint Assets

Real estate website to buy & sell houses and lots in Texas.
Built with Next.js 14 (App Router). Cyber-security theme design & animations.

## Pages
- `/` Home
- `/services` Services
- `/about` About
- `/contact` Contact Us

## Edit company info in ONE place
All text, contact details, services, stats, etc. live in:
```
src/config/company.js
```
Change values there and they update everywhere on the site.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Contact form (optional)
The contact page uses EmailJS. Add your IDs in
`src/components/ContactMain.js` (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)
to enable live sending.

## Structure
```
src/
  config/company.js     <- all site data (edit here)
  app/                  <- pages + layout
  components/           <- UI sections
  helper/               <- Bootstrap + AOS animation init
public/assets/          <- images + scss styles
```
