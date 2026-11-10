# Deployment notes

## Node server
Use Node.js 22. Install dependencies with npm ci when a package-lock.json is present (otherwise npm install), then run npm run build and start node .output/server/index.mjs. Configure NUXT_PUBLIC_DIRECTUS_URL, NUXT_DIRECTUS_TOKEN and NUXT_PUBLIC_SITE_URL in the deployment environment.

## Docker
Build with docker build -t miref-web . and run with docker run -p 3000:3000 --env-file .env miref-web.

## Production hardening
- Use HTTPS and a reverse proxy with compression.
- Configure backups for PostgreSQL and Directus assets.
- Use a read-only public Directus role and a separate private editor role.
- Restrict Directus CORS to the deployed frontend origin.
- Configure image transformations/CDN and review third-party image licensing.
- Add a transactional mail provider before replacing the current mailto contact flow.
- Configure monitoring, uptime checks and error reporting.
- Run accessibility and performance audits on real mobile devices.
