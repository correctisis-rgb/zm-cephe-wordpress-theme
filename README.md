# ZM Cephe WordPress Theme

## Installation

1. In WordPress, open **Appearance →︎ Themes →︎ Add New →︎ Upload Theme** and upload `zm-cephe-wordpress-theme.zip`.
2. Create pages with these slugs: `hakkimizda`, `sistemler`, `projeler`, and `iletisim`.
3. Under **Settings →︎ Reading**, select a static homepage if your WordPress setup requires one. The theme's `front-page.php` supplies the homepage design.
4. Under **Appearance →︎ Menus**, create a menu and assign it to **Ana Menü**.
5. Add the real company contact details under **Appearance →︎ Customize →︎ ZM Cephe iletişim bilgileri**.
6. Add verified figures under **Appearance →︎ Customize →︎ ZM Cephe rakamları**. Empty values stay hidden; populated figures animate into view as visitors scroll.
7. Add completed work from the **Projeler** menu in the dashboard. Add a featured image, project description, location, year, and system. The projects page and home page then use those entries automatically.
8. Set WordPress's site administration email under **Settings →︎ General**. Contact requests are delivered there using `wp_mail`; configure SMTP on the hosting account if its mail service requires it.

The theme uses PHP templates and WordPress functions. Styles and the small navigation script are in `assets/`. Replace the temporary architectural stock photography with company-owned project photography before publishing.
