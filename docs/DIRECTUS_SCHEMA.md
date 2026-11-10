# Directus content model

Recommended collections. Use UUID primary keys, timestamps and a status field (draft / published).

| Collection | Important fields |
|---|---|
| site_settings | site_name, tagline, logo, address, email, phone, social_links |
| navigation | label, url, sort, parent, is_external |
| pages | title, slug, summary, body, hero_image, seo_title, seo_description, status |
| news | title, slug, excerpt, body, cover_image, category, author, published_at, status |
| activities | title, slug, description, schedule_label, location, icon, sort, status |
| departments | title, slug, description, focus, leader, cover_image, status |
| leaders | display_name, role, biography, portrait, sort, status |
| testimonials | quote, display_name, role_label, portrait, consent_confirmed, status |
| values | number, title, description, sort |
| donation_methods | title, method_type, instructions, account_label, is_active, sort |
| media_resources | title, media_type, file, external_url, caption, status |

## Relationships
- departments.leader → leaders (M2O)
- news.author → leaders (M2O, optional)
- pages.hero_image, news.cover_image, leaders.portrait and testimonials.portrait → directus_files

## Permissions and security
- Public: read only published records.
- Editors: create and edit drafts.
- Publisher: review and publish.
- Finance administrators: manage donation_methods only.
- Never store card data, PINs, passwords or one-time codes in Directus.
- Require explicit verification of donation details before publication.
- Keep Directus static tokens private in Nuxt server runtime config.
