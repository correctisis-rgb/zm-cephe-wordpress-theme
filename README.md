# ZM Cephe WordPress Theme

## Installation

1. In WordPress, open **Appearance →︎ Themes →︎ Add New →︎ Upload Theme** and upload `zm-cephe-wordpress-theme.zip`.
2. Create pages with these slugs: `hakkimizda`, `sistemler`, `projeler`, and `iletisim`.
3. Under **Settings →︎ Reading**, select a static homepage if your WordPress setup requires one. The theme's `front-page.php` supplies the homepage design.
4. Under **Appearance →︎ Menus**, create a menu and assign it to **Ana Menü**.
5. Add the real company contact details under **Appearance →︎ Customize →︎ ZM Cephe iletişim bilgileri**.
6. Add verified figures under **Appearance →︎ Customize →︎ ZM Cephe rakamları**. Empty values stay hidden; populated figures animate into view as visitors scroll.
7. Add completed work from the **Projeler** menu in the dashboard. Add a featured image, project description, location, year, and system. The projects page and home page then use those entries automatically.
9. The **Sistemler** page supports editor blocks below the built-in system sections. Use the **+** button to add an Image or Gallery block; uploaded images appear on the public page after saving.
8. Set WordPress's site administration email under **Settings →︎ General**. Contact requests are delivered there using `wp_mail`; configure SMTP on the hosting account if its mail service requires it.

## Connecting the production domain

After adding `zmcephemimarlik.com` to the hosting account, point its DNS to the host and wait until the domain resolves. Enable the host's SSL certificate, then use the HTTPS address. In WordPress, open **Settings →︎ General** and set both **WordPress Address** and **Site Address** to `https://zmcephemimarlik.com`. Then open **Settings →︎ Permalinks** and save the current structure once. The local Playground preview keeps its local address and is not affected by this production-domain setting.

Contact form submissions are stored privately in the WordPress dashboard under **Gelen Mesajlar** and also emailed to the site administration address when mail delivery is configured. Add approved testimonials under **Müşteri Yorumları**: use the title for the customer name, the editor for their review, choose a star rating, and publish it to show it in the homepage carousel. The theme uses PHP templates and WordPress functions. Styles and the small navigation script are in `assets/`. Replace the temporary architectural stock photography with company-owned project photography before publishing.
