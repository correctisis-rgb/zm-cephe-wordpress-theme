<?php
// Keep the branded home page available as a safe fallback if a host routes the
// root request through index.php instead of WordPress' front-page template.
if ( ( is_front_page() || is_home() ) && is_readable( get_template_directory() . '/front-page.php' ) ) {
	require get_template_directory() . '/front-page.php';
	return;
}
get_header();
?>
<main class="section generic-content">
	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
		<article <?php post_class(); ?>><h1><?php the_title(); ?></h1><?php the_content(); ?></article>
	<?php endwhile; else : ?><p><?php esc_html_e( 'Gösterilecek içerik bulunamadı.', 'zm-cephe' ); ?></p><?php endif; ?>
</main>
<?php get_footer(); ?>
