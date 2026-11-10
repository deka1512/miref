# MIREF — Église Miref RDC

The digital home of MIREF: a welcoming, editorial-first church website built with **Nuxt 4**, **Vue 3**, **TypeScript**, **PrimeVue**, **Tailwind CSS v4** and an optional **Directus** headless CMS.

> Important: sample articles, testimonials and ministry descriptions are editorial starter content. Confirm all church-specific facts and obtain consent before publishing. No unverified donation details, service times, leadership identities or contact coordinates are presented as confirmed facts.

## Included
- Responsive homepage with hero, welcome, vision, activities, testimonials, news and invitation sections.
- Standalone church, activities, departments, news, donations and contact pages.
- Article detail routes, search and category filters.
- Reusable header, mobile navigation, dark footer, section headings and article cards.
- Purple / mauve / gold design system.
- Optional Directus REST integration with local content fallback.
- Editorial, CMS, development and deployment documentation.
- GitHub Actions CI and Docker production image.

## Quick start
```bash
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:3000.

## Documentation
- [Project brief](docs/PROJECT.md)
- [Local development](docs/DEVELOPMENT.md)
- [Directus content schema](docs/DIRECTUS_SCHEMA.md)
- [Deployment](docs/DEPLOYMENT.md)

## Before launch
Verify official contact details, address, service schedules, leaders, testimonies, images, social links and donation methods with MIREF's authorized team. The contact form currently prepares an email using the device's mail app; a server-side mail provider should be integrated for a production form.
