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
				<img class="brand-logo" src="<?php echo esc_url( novantis_img( 'logo-dark.jpg' ) ); ?>" alt="<?php bloginfo( 'name' ); ?>">
				</a>
			<?php endif; ?>
		</div>
		<nav class="main-nav" aria-label="<?php esc_attr_e( 'Hoofdmenu', 'novantis' ); ?>">
			<a href="#diensten"><?php esc_html_e( 'Diensten', 'novantis' ); ?></a>
			<a href="#realisaties"><?php esc_html_e( 'Realisaties', 'novantis' ); ?></a>
			<a href="#werkwijze"><?php esc_html_e( 'Werkwijze', 'novantis' ); ?></a>
			<a href="#over-ons"><?php esc_html_e( 'Over ons', 'novantis' ); ?></a>
			<a href="#offerte" class="btn btn-primary"><?php esc_html_e( 'Gratis offerte', 'novantis' ); ?></a>
		</nav>
		<button class="nav-toggle" aria-label="<?php esc_attr_e( 'Menu openen', 'novantis' ); ?>" aria-expanded="false">
			<span></span><span></span><span></span>
		</button>
	</div>
</header>
