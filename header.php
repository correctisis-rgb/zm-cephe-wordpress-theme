<?php
/** Shared document head and site header. */
if ( ! defined( 'ABSPATH' ) ) { exit; }
$home = home_url( '/' );
$lang = isset( $_COOKIE['zm_cephe_lang'] ) && 'en' === sanitize_key( wp_unslash( $_COOKIE['zm_cephe_lang'] ) ) ? 'en' : 'tr';
?>
<!doctype html>
<html <?php language_attributes(); ?> data-site-language="<?php echo esc_attr( $lang ); ?>">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="theme-color" content="#ffffff">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="header">
	<a class="logo" href="<?php echo esc_url( $home ); ?>" aria-label="ZM Cephe"><span class="logo-symbol">ZM</span><span class="logo-name">CEPHE <small>ALÜMİNYUM CEPHE SİSTEMLERİ &amp; MİMARLIK</small></span></a>
	<nav class="nav" aria-label="Ana menü">
		<a href="<?php echo esc_url( $home ); ?>">Anasayfa</a>
		<div class="nav-group"><a href="<?php echo esc_url( zm_cephe_page_url( 'hakkimizda' ) ); ?>">Kurumsal <span>⌄</span></a><div class="nav-submenu"><a href="<?php echo esc_url( zm_cephe_page_url( 'hakkimizda' ) ); ?>">Hakkımızda</a><a href="<?php echo esc_url( zm_cephe_page_url( 'hakkimizda' ) ); ?>#calisma-anlayisimiz">Çalışma Anlayışımız</a></div></div>
		<div class="nav-group"><a href="<?php echo esc_url( zm_cephe_page_url( 'sistemler' ) ); ?>">Sistemler <span>⌄</span></a><div class="nav-submenu"><a href="<?php echo esc_url( zm_cephe_page_url( 'sistemler' ) ); ?>#giydirme">Giydirme Cephe</a><a href="<?php echo esc_url( zm_cephe_page_url( 'sistemler' ) ); ?>#dograma">Alüminyum Doğrama</a><a href="<?php echo esc_url( zm_cephe_page_url( 'sistemler' ) ); ?>#kapi-pencere">Kapı &amp; Pencere</a><a href="<?php echo esc_url( zm_cephe_page_url( 'sistemler' ) ); ?>#ozel">Özel Uygulamalar</a></div></div>
		<a href="<?php echo esc_url( $home ); ?>#home-services">Uygulama</a>
		<a href="<?php echo esc_url( zm_cephe_page_url( 'projeler' ) ); ?>">Projeler</a>
		<a href="<?php echo esc_url( zm_cephe_page_url( 'iletisim' ) ); ?>">İletişim</a>
		<div class="nav-group language-group"><button class="language-current" aria-expanded="false"><?php echo 'en' === $lang ? 'EN' : 'TR'; ?> <span>⌄</span></button><div class="nav-submenu language-submenu"><button type="button" data-set-language="tr">Türkçe</button><button type="button" data-set-language="en">English</button></div></div>
	</nav>
	<a class="header-contact" href="<?php echo esc_url( zm_cephe_page_url( 'iletisim' ) ); ?>">Proje talebi <b>↗︎</b></a>
	<button class="menu" aria-label="Menüyü aç" aria-expanded="false"><i></i><i></i></button>
</header>
<div class="language-gate" id="language-gate" role="dialog" aria-modal="true" aria-labelledby="language-title" aria-hidden="true"><div class="language-panel"><span class="language-mark">ZM <i>CEPHE</i></span><span class="language-eyebrow">WELCOME / HOŞ GELDİNİZ</span><h2 id="language-title">Dil seçimi<br><em>Language selection</em></h2><p>Devam etmek için dilinizi seçin.<br>Select your preferred language to continue.</p><div class="language-options"><button type="button" data-set-language="tr"><span>TR</span> Türkçe <b aria-hidden="true"></b></button><button type="button" data-set-language="en"><span>EN</span> English <b aria-hidden="true"></b></button></div><small>Seçiminiz bu cihazda hatırlanır. / Your choice will be remembered on this device.</small></div></div>
