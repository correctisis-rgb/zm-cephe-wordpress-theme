<article <?php post_class( 'project-card' ); ?>>
	<a class="project-card-link" href="<?php the_permalink(); ?>">
		<?php if ( has_post_thumbnail() ) : the_post_thumbnail( 'large', array( 'alt' => the_title_attribute( array( 'echo' => false ) ) ) ); else : ?><span class="project-no-image"><?php esc_html_e( 'ZM CEPHE / PROJE', 'zm-cephe' ); ?></span><?php endif; ?>
		<div><span><?php echo esc_html( get_post_meta( get_the_ID(), '_zm_project_system', true ) ?: __( 'ZM CEPHE / PROJE', 'zm-cephe' ) ); ?></span><h3><?php the_title(); ?></h3><p><?php echo esc_html( get_post_meta( get_the_ID(), '_zm_project_city', true ) ); ?></p></div>
	</a>
</article>
