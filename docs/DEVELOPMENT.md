# Local development

## Requirements
- Node.js 22 LTS recommended
- npm 10+

## Setup
```bash
npm install
cp .env.example .env
npm run dev
```
Open http://localhost:3000.

## Production
```bash
npm run typecheck
npm run build
node .output/server/index.mjs
```

## Directus
Set NUXT_PUBLIC_DIRECTUS_URL to the Directus base URL and optionally set NUXT_DIRECTUS_TOKEN to a read-only API token. Keep private tokens server-side; never expose them with a NUXT_PUBLIC_ variable.

The composable app/composables/useMirefContent.ts requests news, activities, departments, leaders and testimonials, with local seed fallback. Align CMS field names with the schema before switching production content.

## Before launch
- Confirm logo and brand usage.
- Confirm physical address, service times, public email and phone.
- Confirm leaders, titles, portraits and biographies.
- Replace sample testimonials with real approved testimonies.
- Review articles and publication dates.
- Confirm donation channels with authorized finance leaders.
- Provide approved welcome video and ministry photographs.
- Verify official social links.
