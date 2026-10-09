<?php
/** Theme setup and site features. */
if ( ! defined( 'ABSPATH' ) ) { exit; }

function zm_cephe_setup() {
	load_theme_textdomain( 'zm-cephe', get_template_directory() . '/languages' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo', array( 'height' => 90, 'width' => 260, 'flex-height' => true, 'flex-width' => true ) );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	register_nav_menus( array( 'primary' => __( 'Ana Menü', 'zm-cephe' ) ) );
}
add_action( 'after_setup_theme', 'zm_cephe_setup' );

function zm_cephe_assets() {
	$version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'zm-cephe-fonts', 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap', array(), null );
	wp_enqueue_style( 'zm-cephe-main', get_template_directory_uri() . '/assets/css/main.css', array( 'zm-cephe-fonts' ), $version );
	wp_enqueue_script( 'zm-cephe-main', get_template_directory_uri() . '/assets/js/main.js', array(), $version, true );
}
add_action( 'wp_enqueue_scripts', 'zm_cephe_assets' );

function zm_cephe_page_url( $slug ) {
	$page = get_page_by_path( $slug );
	return $page ? get_permalink( $page ) : home_url( '/' . trim( $slug, '/' ) . '/' );
}

function zm_cephe_register_project_type() {
	register_post_type( 'zm_proje', array(
		'labels' => array( 'name' => __( 'Projeler', 'zm-cephe' ), 'singular_name' => __( 'Proje', 'zm-cephe' ), 'add_new_item' => __( 'Yeni proje ekle', 'zm-cephe' ), 'edit_item' => __( 'Projeyi düzenle', 'zm-cephe' ) ),
		'public' => true,
		'has_archive' => false,
		'rewrite' => array( 'slug' => 'referans' ),
		'menu_icon' => 'dashicons-building',
		'supports' => array( 'title', 'editor', 'excerpt', 'thumbnail' ),
		'show_in_rest' => true,
	) );
}
add_action( 'init', 'zm_cephe_register_project_type' );

function zm_cephe_register_message_type() {
	register_post_type( 'zm_mesaj', array(
		'labels' => array(
			'name' => __( 'Gelen Mesajlar', 'zm-cephe' ),
			'singular_name' => __( 'İletişim mesajı', 'zm-cephe' ),
			'menu_name' => __( 'Gelen Mesajlar', 'zm-cephe' ),
			'edit_item' => __( 'Mesajı görüntüle', 'zm-cephe' ),
			'view_item' => __( 'Mesajı görüntüle', 'zm-cephe' ),
		),
		'public' => false,
		'publicly_queryable' => false,
		'exclude_from_search' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'show_in_rest' => false,
		'has_archive' => false,
		'rewrite' => false,
		'menu_icon' => 'dashicons-email-alt',
		'map_meta_cap' => true,
		'supports' => array( 'title', 'editor' ),
	) );
}
add_action( 'init', 'zm_cephe_register_message_type' );

function zm_cephe_message_columns( $columns ) {
	return array(
		'cb' => isset( $columns['cb'] ) ? $columns['cb'] : '<input type="checkbox" />',
		'title' => __( 'Mesaj', 'zm-cephe' ),
		'zm_sender' => __( 'Ad Soyad', 'zm-cephe' ),
		'zm_subject' => __( 'Konu', 'zm-cephe' ),
		'zm_phone' => __( 'Telefon', 'zm-cephe' ),
		'zm_email' => __( 'E-posta', 'zm-cephe' ),
		'date' => __( 'Tarih', 'zm-cephe' ),
	);
}
add_filter( 'manage_zm_mesaj_posts_columns', 'zm_cephe_message_columns' );

function zm_cephe_message_column_content( $column, $post_id ) {
	$meta_keys = array(
		'zm_sender' => '_zm_message_name',
		'zm_subject' => '_zm_message_subject',
		'zm_phone' => '_zm_message_phone',
		'zm_email' => '_zm_message_email',
	);
	if ( isset( $meta_keys[ $column ] ) ) {
		$value = get_post_meta( $post_id, $meta_keys[ $column ], true );
		if ( 'zm_email' === $column && $value ) {
			echo '<a href="mailto:' . esc_attr( $value ) . '">' . esc_html( $value ) . '</a>';
		} else {
			echo esc_html( $value );
		}
	}
}
add_action( 'manage_zm_mesaj_posts_custom_column', 'zm_cephe_message_column_content', 10, 2 );

function zm_cephe_message_details_box() {
	add_meta_box( 'zm-message-details', __( 'Gönderen bilgileri', 'zm-cephe' ), 'zm_cephe_message_details_html', 'zm_mesaj', 'side', 'high' );
}
add_action( 'add_meta_boxes_zm_mesaj', 'zm_cephe_message_details_box' );

function zm_cephe_message_details_html( $post ) {
	$details = array(
		__( 'Ad Soyad', 'zm-cephe' ) => get_post_meta( $post->ID, '_zm_message_name', true ),
		__( 'Telefon', 'zm-cephe' ) => get_post_meta( $post->ID, '_zm_message_phone', true ),
		__( 'E-posta', 'zm-cephe' ) => get_post_meta( $post->ID, '_zm_message_email', true ),
		__( 'Konu', 'zm-cephe' ) => get_post_meta( $post->ID, '_zm_message_subject', true ),
	);
	foreach ( $details as $label => $value ) {
		echo '<p><strong>' . esc_html( $label ) . '</strong><br>' . esc_html( $value ) . '</p>';
	}
}

function zm_cephe_flush_rewrites() {
	 zm_cephe_register_project_type();
	 flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'zm_cephe_flush_rewrites' );

function zm_cephe_project_fields() {
	add_meta_box( 'zm-project-details', __( 'Proje bilgileri', 'zm-cephe' ), 'zm_cephe_project_fields_html', 'zm_proje', 'side', 'default' );
}
add_action( 'add_meta_boxes', 'zm_cephe_project_fields' );
function zm_cephe_project_fields_html( $post ) {
	wp_nonce_field( 'zm_save_project', 'zm_project_nonce' );
	$fields = array( 'city' => __( 'Şehir / konum', 'zm-cephe' ), 'year' => __( 'Yıl', 'zm-cephe' ), 'system' => __( 'Uygulanan sistem', 'zm-cephe' ) );
	foreach ( $fields as $key => $label ) {
		$value = get_post_meta( $post->ID, '_zm_project_' . $key, true );
		echo '<p><label for="zm-project-' . esc_attr( $key ) . '">' . esc_html( $label ) . '</label><br><input class="widefat" id="zm-project-' . esc_attr( $key ) . '" name="zm_project_' . esc_attr( $key ) . '" value="' . esc_attr( $value ) . '"></p>';
	}
}
function zm_cephe_save_project_fields( $post_id ) {
	if ( ! isset( $_POST['zm_project_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['zm_project_nonce'] ) ), 'zm_save_project' ) ) { return; }
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) { return; }
	if ( ! current_user_can( 'edit_post', $post_id ) ) { return; }
	foreach ( array( 'city', 'year', 'system' ) as $key ) {
		if ( isset( $_POST[ 'zm_project_' . $key ] ) ) {
			$value = sanitize_text_field( wp_unslash( $_POST[ 'zm_project_' . $key ] ) );
			update_post_meta( $post_id, '_zm_project_' . $key, $value );
		}
	}
}
add_action( 'save_post_zm_proje', 'zm_cephe_save_project_fields' );

function zm_cephe_customizer( $wp_customize ) {
	$wp_customize->add_section( 'zm_contact', array( 'title' => __( 'ZM Cephe iletişim bilgileri', 'zm-cephe' ), 'priority' => 35 ) );
	$fields = array( 'phone' => __( 'Telefon', 'zm-cephe' ), 'email' => __( 'E-posta', 'zm-cephe' ), 'address' => __( 'Adres', 'zm-cephe' ), 'whatsapp' => __( 'WhatsApp bağlantısı', 'zm-cephe' ), 'instagram' => __( 'Instagram bağlantısı', 'zm-cephe' ), 'linkedin' => __( 'LinkedIn bağlantısı', 'zm-cephe' ) );
	foreach ( $fields as $key => $label ) {
		$wp_customize->add_setting( 'zm_' . $key, array( 'sanitize_callback' => 'sanitize_text_field' ) );
		$wp_customize->add_control( 'zm_' . $key, array( 'label' => $label, 'section' => 'zm_contact', 'type' => 'text' ) );
	}
	$wp_customize->add_section( 'zm_company_stats', array( 'title' => __( 'ZM Cephe rakamları', 'zm-cephe' ), 'priority' => 36 ) );
	$stats = array(
		'team' => __( 'Çalışma arkadaşı sayısı', 'zm-cephe' ),
		'experience' => __( 'Yıllık tecrübe', 'zm-cephe' ),
		'projects' => __( 'Tamamlanan proje sayısı', 'zm-cephe' ),
	);
	foreach ( $stats as $key => $label ) {
		$wp_customize->add_setting( 'zm_stat_' . $key, array( 'default' => 0, 'sanitize_callback' => 'absint' ) );
		$wp_customize->add_control( 'zm_stat_' . $key, array( 'label' => $label, 'section' => 'zm_company_stats', 'type' => 'number', 'input_attrs' => array( 'min' => 0, 'step' => 1 ) ) );
	}
}
add_action( 'customize_register', 'zm_cephe_customizer' );

function zm_cephe_handle_contact() {
	if ( ! isset( $_POST['zm_contact_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['zm_contact_nonce'] ) ), 'zm_contact_submit' ) ) {
		wp_safe_redirect( add_query_arg( 'contact', 'invalid', zm_cephe_page_url( 'iletisim' ) ) ); exit;
	}
	$name = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
	$phone = isset( $_POST['phone'] ) ? sanitize_text_field( wp_unslash( $_POST['phone'] ) ) : '';
	$email = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
	$subject = isset( $_POST['subject'] ) ? sanitize_text_field( wp_unslash( $_POST['subject'] ) ) : '';
	$message = isset( $_POST['message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['message'] ) ) : '';
	$consent = isset( $_POST['consent'] );
	$redirect = zm_cephe_page_url( 'iletisim' );
	if ( ! $name || ! $phone || ! is_email( $email ) || ! $subject || ! $message || ! $consent ) { wp_safe_redirect( add_query_arg( 'contact', 'invalid', $redirect ) ); exit; }
	$message_id = wp_insert_post( array(
		'post_type' => 'zm_mesaj',
		'post_status' => 'private',
		'post_title' => sprintf( '%s — %s', $name, $subject ),
		'post_content' => $message,
	), true );
	if ( is_wp_error( $message_id ) ) {
		wp_safe_redirect( add_query_arg( 'contact', 'error', $redirect ) );
		exit;
	}
	foreach ( array( 'name' => $name, 'phone' => $phone, 'email' => $email, 'subject' => $subject ) as $key => $value ) {
		update_post_meta( $message_id, '_zm_message_' . $key, $value );
	}
	$to = get_option( 'admin_email' );
	$headers = array( 'Reply-To: ' . $name . ' <' . $email . '>' );
	$body = sprintf( "Ad Soyad: %s\nTelefon: %s\nE-posta: %s\nKonu: %s\n\nMesaj:\n%s", $name, $phone, $email, $subject, $message );
	$sent = wp_mail( $to, sprintf( '[ZM Cephe] %s', $subject ), $body, $headers );
	wp_safe_redirect( add_query_arg( 'contact', $sent ? 'sent' : 'stored', $redirect ) );
	exit;
}
add_action( 'admin_post_nopriv_zm_cephe_contact', 'zm_cephe_handle_contact' );
add_action( 'admin_post_zm_cephe_contact', 'zm_cephe_handle_contact' );

function zm_cephe_body_classes( $classes ) {
	if ( is_page_template( 'page-hakkimizda.php' ) ) { $classes[] = 'inner-page'; }
	return $classes;
}
add_filter( 'body_class', 'zm_cephe_body_classes' );
