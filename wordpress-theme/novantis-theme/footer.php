<?php
/**
 * Footer.
 *
 * @package Novantis
 */
$tel   = get_theme_mod( 'novantis_phone', '' );
$email = get_theme_mod( 'novantis_email', get_option( 'admin_email' ) );
?>
<footer class="site-footer">
	<div class="container footer-grid">
		<div>
			<img class="footer-logo" src="<?php echo esc_url( novantis_img( 'logo-light-cropped.png' ) ); ?>" alt="Novantis Bouwgroep" width="1080" height="265" loading="lazy">
			<p><?php esc_html_e( 'Bouwen. Renoveren. Verduurzamen. Uw totaalpartner voor energie- en renovatiewerken.', 'novantis' ); ?></p>
		</div>
		<div>
			<h4><?php esc_html_e( 'Diensten', 'novantis' ); ?></h4>
			<ul>
				<?php foreach ( array_slice( novantis_services(), 0, 4 ) as $dienst ) : ?>
					<li><a href="#diensten"><?php echo esc_html( $dienst['titel'] ); ?></a></li>
				<?php endforeach; ?>
			</ul>
		</div>
		<div>
			<h4><?php esc_html_e( 'Contact', 'novantis' ); ?></h4>
			<ul>
				<?php if ( $tel ) : ?>
					<li><?php echo novantis_icon( 'phone' ); ?><a href="tel:<?php echo esc_attr( preg_replace( '/[^0-9+]/', '', $tel ) ); ?>"><?php echo esc_html( $tel ); ?></a></li>
				<?php endif; ?>
				<li><?php echo novantis_icon( 'mail' ); ?><a href="mailto:<?php echo esc_attr( $email ); ?>"><?php echo esc_html( $email ); ?></a></li>
				<li><?php echo novantis_icon( 'pin' ); ?><?php esc_html_e( 'Actief in heel Vlaanderen', 'novantis' ); ?></li>
				<li><a href="#offerte"><?php esc_html_e( 'Gratis offerte aanvragen', 'novantis' ); ?></a></li>
			</ul>
		</div>
	</div>
	<div class="container footer-bottom">
		<p>&copy; <?php echo esc_html( date_i18n( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?> — <?php esc_html_e( 'Alle rechten voorbehouden.', 'novantis' ); ?></p>
	</div>
	<?php wp_footer(); ?>
</footer>
</body>
</html>
