# Local development

## Requirements
- Node.js 22 LTS recommended
- npm 10+
- Docker and Docker Compose (for the CMS)

## Frontend setup
```bash
npm install
cp .env.example .env
npm run dev
```
Open http://localhost:3000.

## Start the headless CMS
1. Copy .env.example to .env.
2. Replace every sample database password, Directus key, secret and administrator password with unique random values.
3. Start the CMS stack:
```bash
docker compose up -d
```
4. Open http://localhost:8055 and sign in with DIRECTUS_ADMIN_EMAIL and DIRECTUS_ADMIN_PASSWORD.
5. Create the collections described in DIRECTUS_SCHEMA.md and grant the Public role read-only access only to published records.
6. Add a read-only static token for the frontend only if required by your chosen Directus permissions model; set NUXT_DIRECTUS_TOKEN privately on the Nuxt server.
7. Keep NUXT_PUBLIC_DIRECTUS_URL=http://localhost:8055 in the frontend environment.

Do not commit .env. Do not reuse the sample secrets in production.

## Production
```bash
npm run typecheck
npm run build
node .output/server/index.mjs
```

## Content integration
The composable app/composables/useMirefContent.ts requests news, activities, departments, leaders and testimonials, with local seed fallback. Align CMS field names with the schema before switching production content. The current public pages still use local starter content; CMS-backed page rendering is the next integration step.

## Before launch
- Confirm logo and brand usage.
- Confirm physical address, service times, public email and phone.
- Confirm leaders, titles, portraits and biographies.
- Replace sample testimonials with real approved testimonies.
- Review articles and publication dates.
- Confirm donation channels with authorized finance leaders.
- Provide approved welcome video and ministry photographs.
- Verify official social links.
