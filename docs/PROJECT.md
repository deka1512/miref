# MIREF — Project brief

## Vision
Build a welcoming, elegant and maintainable digital home for Église Miref RDC. Help visitors discover the church, understand its convictions, find activities, read news, contact the team and learn how to support the mission.

## Confirmed design decisions
- Deep purple / mauve visual identity with restrained gold accents.
- Dark footer, social links and a clear invitation to connect.
- Homepage hero direction A.
- Welcome section is video-ready; approved video URL is still required.
- No live-stream module in the first release.
- Rounded cards (about 25px radius).
- Dedicated donations and offerings page.
- News and contact are standalone pages.
- Compact toggle navigation on mobile.

## Routes
- / — Home
- /eglise — Identity, vision, mission, values and leadership
- /activites — Community activities
- /departements — Ministries and departments
- /actualites — News index and category filter
- /actualites/:slug — Article
- /dons — Donations and offerings
- /contact — Contact and visit preparation

## Editorial integrity
Sample articles, testimonials and ministry descriptions are starter content. Names, dates, schedules, leadership identities, address, telephone, email and payment details must be verified by the church before publication. Obtain written consent for testimonies and portraits. Never publish invented payment instructions.

## Design tokens
Ink #21142F · Purple #48265F · Mauve #76508C · Lilac #B59AC5 · Gold #D5B46A · Paper #FAF8FB. Display font Manrope; body font DM Sans.

## Architecture
Nuxt 4 + Vue 3 + TypeScript, PrimeVue Aura, Tailwind CSS v4, Pinia and optional Directus REST integration. Local editorial data is the fallback when CMS is not configured.
