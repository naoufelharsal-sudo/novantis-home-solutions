<?php
/**
 * Theme setup en assets.
 *
 * @package Novantis
 */

if ( ! defined( 'ABSPATH' ) ) exit;

function novantis_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo', array( 'height' => 120, 'width' => 400, 'flex-height' => true, 'flex-width' => true ) );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	register_nav_menus( array( 'primary' => __( 'Hoofdmenu', 'novantis' ) ) );
}
add_action( 'after_setup_theme', 'novantis_setup' );

require get_template_directory() . '/inc/icons.php';

function novantis_assets() {
	wp_enqueue_style(
		'novantis-fonts',
		'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600&display=swap',
		array(),
		null
	);
	$css_path = get_template_directory() . '/assets/css/main.css';
	$js_path  = get_template_directory() . '/assets/js/main.js';
	$css_ver  = file_exists( $css_path ) ? (string) filemtime( $css_path ) : '1.1.0';
	$js_ver   = file_exists( $js_path ) ? (string) filemtime( $js_path ) : '1.1.0';

	wp_enqueue_style( 'novantis-main', get_template_directory_uri() . '/assets/css/main.css', array( 'novantis-fonts' ), $css_ver );
	wp_enqueue_script( 'novantis-main', get_template_directory_uri() . '/assets/js/main.js', array(), $js_ver, true );

}
add_action( 'wp_enqueue_scripts', 'novantis_assets' );

require get_template_directory() . '/inc/customizer.php';

/**
 * Offerteformulier verwerken (fallback als er geen CF7-shortcode is ingesteld).
 */
function novantis_handle_quote() {
	if ( ! isset( $_POST['novantis_quote_nonce'] ) || ! wp_verify_nonce( $_POST['novantis_quote_nonce'], 'novantis_quote' ) ) {
		wp_safe_redirect( home_url( '/?status=fout#offerte' ) );
		exit;
	}
	$naam     = isset( $_POST['naam'] ) ? sanitize_text_field( $_POST['naam'] ) : '';
	$email    = isset( $_POST['email'] ) ? sanitize_email( $_POST['email'] ) : '';
	$telefoon = isset( $_POST['telefoon'] ) ? sanitize_text_field( $_POST['telefoon'] ) : '';
	$gemeente = isset( $_POST['gemeente'] ) ? sanitize_text_field( $_POST['gemeente'] ) : '';
	$dienst   = isset( $_POST['dienst'] ) ? sanitize_text_field( $_POST['dienst'] ) : '';
	$bericht  = isset( $_POST['bericht'] ) ? sanitize_textarea_field( $_POST['bericht'] ) : '';

	if ( ! $naam || ! is_email( $email ) ) {
		wp_safe_redirect( home_url( '/?status=fout#offerte' ) );
		exit;
	}

	$to      = get_theme_mod( 'novantis_email', get_option( 'admin_email' ) );
	$subject = sprintf( 'Offerte-aanvraag: %s — %s', $dienst, $naam );
	$body    = "Naam: $naam\nE-mail: $email\nTelefoon: $telefoon\nGemeente: $gemeente\nDienst: $dienst\n\nBericht:\n$bericht";
	$headers = array( 'Reply-To: ' . $naam . ' <' . $email . '>' );

	$status = wp_mail( $to, $subject, $body, $headers ) ? 'ok' : 'fout';
	wp_safe_redirect( home_url( '/?status=' . $status . '#offerte' ) );
	exit;
}
add_action( 'admin_post_novantis_quote', 'novantis_handle_quote' );
add_action( 'admin_post_nopriv_novantis_quote', 'novantis_handle_quote' );

/**
 * Diensten als array (herbruikbaar in templates).
 */
function novantis_services() {
	return array(
		array( 'slug' => 'zonnepanelen',    'titel' => 'Zonnepanelen',          'icon' => 'sun',     'img' => 'svc-solar.jpg',    'beschrijving' => 'Hoogrendementspanelen met optimale opbrengst, netjes geïnstalleerd en volledig gekeurd.' ),
		array( 'slug' => 'thuisbatterij',   'titel' => 'Thuisbatterijen',       'icon' => 'battery', 'img' => 'svc-battery.jpg',  'beschrijving' => 'Uw eigen stroom opslaan en ’s avonds gebruiken. Maximale zelfconsumptie, lagere factuur.' ),
		array( 'slug' => 'warmtepompen',    'titel' => 'Warmtepompen',          'icon' => 'flame',   'img' => 'svc-heatpump.jpg', 'beschrijving' => 'Lucht-water en lucht-lucht warmtepompen voor verwarming, koeling en sanitair warm water.' ),
		array( 'slug' => 'gevelrenovatie',  'titel' => 'Gevelrenovaties',       'icon' => 'layers',  'img' => 'svc-facade.jpg',   'beschrijving' => 'Gevelisolatie, crepi, sierpleister en steenstrips. Beter isoleren met een nieuwe look.' ),
		array( 'slug' => 'dakrenovatie',    'titel' => 'Dakrenovaties',         'icon' => 'home',    'img' => 'svc-roof.jpg',     'beschrijving' => 'Volledige dakvernieuwing, dakisolatie en waterdichting. Duurzaam en winddicht.' ),
		array( 'slug' => 'sanitair',        'titel' => 'Sanitair & badkamers',  'icon' => 'bath',    'img' => 'svc-bathroom.jpg', 'beschrijving' => 'Volledige badkamerrenovatie: leidingwerk, tegelwerk en plaatsing, sleutel-op-de-deur.' ),
		array( 'slug' => 'elektriciteit',   'titel' => 'Elektriciteit',         'icon' => 'zap',     'img' => 'svc-electric.jpg', 'beschrijving' => 'Nieuwe installaties, zekeringkasten, laadpalen en keuring conform AREI.' ),
		array( 'slug' => 'binnenafwerking', 'titel' => 'Binnenafwerking',       'icon' => 'hammer',  'img' => 'svc-interior.jpg', 'beschrijving' => 'Pleisterwerk, vloeren, gyproc, schilderwerk en maatwerk. Afgewerkt tot in detail.' ),
	);
}

/**
 * URL naar een meegeleverde themafoto.
 */
function novantis_img( $file ) {
	return get_template_directory_uri() . '/assets/img/' . $file;
}

/**
 * URL naar een meegeleverde themavideo.
 */
function novantis_video( $file ) {
	return get_template_directory_uri() . '/assets/video/' . $file;
}

/**
 * Realisaties: eigen projectfoto's als er geen berichten met uitgelichte afbeelding zijn.
 */
function novantis_projects() {
	return array(
		array( 'img' => 'proj-solar-install.jpg', 'titel' => 'Zonnepanelen op pannendak', 'plaats' => 'Antwerpen' ),
		array( 'img' => 'proj-facade.jpg', 'titel' => 'Gevelrenovatie & isolatie', 'plaats' => 'Mechelen' ),
		array( 'img' => 'proj-techniek.jpg', 'titel' => 'Warmtepomp & thuisbatterij', 'plaats' => 'Lier' ),
		array( 'img' => 'proj-badkamer.jpg', 'titel' => 'Badkamer volledig afgewerkt', 'plaats' => 'Brasschaat' ),
	);
}

function novantis_reasons() {
	return array(
		array( 'Totaaloplossing van A tot Z', 'Energie, renovatie en afwerking bij één bouwgroep. Geen coördinatie tussen vijf aannemers.' ),
		array( 'Eigen vakmensen', 'Vaste ploegen met jarenlange ervaring in energie- en renovatiewerken.' ),
		array( 'Transparante prijzen', 'Heldere offerte zonder verrassingen achteraf. U weet exact wat u krijgt.' ),
		array( 'Premies & subsidies', 'Wij rekenen uit waar u recht op hebt en helpen met de aanvraag.' ),
	);
}

function novantis_steps() {
	return array(
		array( '01', 'Gratis intake', 'We bellen u binnen 24 uur en beluisteren uw plannen, budget en timing.' ),
		array( '02', 'Advies & offerte', 'Bezoek ter plaatse, duidelijk voorstel met prijzen, premies en subsidies.' ),
		array( '03', 'Uitvoering', 'Eén planning, eigen vakmensen en één werfleider als aanspreekpunt.' ),
		array( '04', 'Oplevering & nazorg', 'Keuring, garantie en service. Ook na de werken blijven we bereikbaar.' ),
	);
}

function novantis_faqs() {
	return array(
		array( 'Doen jullie ook een volledig project van ruwbouw tot afwerking?', 'Ja. Novantis Bouwgroep begeleidt uw project van A tot Z: renovatie, energietechnieken, sanitair, elektriciteit en binnenafwerking.' ),
		array( 'Hoe snel krijg ik een offerte?', 'Na uw aanvraag nemen we binnen 24 uur contact op en plannen we een bezoek. De offerte volgt doorgaans binnen 48 uur na dat bezoek.' ),
		array( 'Kan ik zonnepanelen en thuisbatterij combineren?', 'Absoluut. Met een batterij verhoogt u uw zelfconsumptie sterk en verlaagt u uw energiefactuur verder.' ),
		array( 'Werken jullie met garantie en keuring?', 'Alle installaties worden gekeurd volgens de geldende normen en u krijgt garantie op materiaal én plaatsing.' ),
	);
}
