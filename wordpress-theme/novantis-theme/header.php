<?php
/**
 * Header.
 *
 * @package Novantis
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="site-header" id="site-header">
	<div class="container header-inner">
		<div class="brand">
			<?php if ( has_custom_logo() ) : ?>
				<?php the_custom_logo(); ?>
			<?php else : ?>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<img class="brand-logo" src="<?php echo esc_url( novantis_img( 'logo-dark-cropped.png' ) ); ?>" alt="<?php bloginfo( 'name' ); ?>" width="1080" height="265">
				</a>
			<?php endif; ?>
		</div>
		<nav class="main-nav" aria-label="<?php esc_attr_e( 'Hoofdmenu', 'novantis' ); ?>">
			<a href="#diensten"><?php esc_html_e( 'Diensten', 'novantis' ); ?></a>
			<a href="#waarom"><?php esc_html_e( 'Waarom Novantis', 'novantis' ); ?></a>
			<a href="#werkwijze"><?php esc_html_e( 'Werkwijze', 'novantis' ); ?></a>
			<a href="#faq"><?php esc_html_e( 'FAQ', 'novantis' ); ?></a>
			<a href="#offerte"><?php esc_html_e( 'Contact', 'novantis' ); ?></a>
			<a href="tel:<?php echo esc_attr( preg_replace( '/[^0-9+]/', '', get_theme_mod( 'novantis_phone', '+32 470 00 00 00' ) ) ); ?>" class="header-phone"><?php echo novantis_icon( 'phone' ); ?><?php esc_html_e( 'Bel ons', 'novantis' ); ?></a>
			<a href="#offerte" class="btn btn-primary"><?php esc_html_e( 'Gratis offerte', 'novantis' ); ?></a>
		</nav>
		<button class="nav-toggle" aria-label="<?php esc_attr_e( 'Menu openen', 'novantis' ); ?>" aria-expanded="false">
			<span></span><span></span><span></span>
		</button>
	</div>
</header>
