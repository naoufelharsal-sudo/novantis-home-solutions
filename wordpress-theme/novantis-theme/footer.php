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
			<span class="brand-name">NOVANTIS</span>
			<p class="footer-tagline"><?php echo esc_html( get_theme_mod( 'novantis_tagline', 'Bouwen. Renoveren. Verduurzamen.' ) ); ?></p>
			<p><?php esc_html_e( 'Uw partner van A tot Z: één aanspreekpunt voor uw volledige woning.', 'novantis' ); ?></p>
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
					<li><a href="tel:<?php echo esc_attr( preg_replace( '/[^0-9+]/', '', $tel ) ); ?>"><?php echo esc_html( $tel ); ?></a></li>
				<?php endif; ?>
				<li><a href="mailto:<?php echo esc_attr( $email ); ?>"><?php echo esc_html( $email ); ?></a></li>
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
