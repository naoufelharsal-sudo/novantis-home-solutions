<?php
/**
 * Scherpe, schaalbare lijniconen voor het Novantis-thema.
 *
 * @package Novantis
 */

if ( ! defined( 'ABSPATH' ) ) exit;

function novantis_icon( $name, $class = 'icon' ) {
	$paths = array(
		'sun'        => '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
		'battery'    => '<rect x="3" y="6" width="16" height="12" rx="2"/><path d="M21 10v4M8 10v4M12 9v6M16 11v2"/>',
		'flame'      => '<path d="M12 22c4 0 7-3 7-7 0-3-1.5-5.5-4-8-1 3-2.5 4-4 5 .5-4-1.5-7-3-9 0 4-3 6-3 11 0 4.4 3.1 8 7 8Z"/><path d="M9 18c0-2 1.4-3 3-5 1.5 2 3 3.2 3 5 0 1.7-1.3 3-3 3s-3-1.3-3-3Z"/>',
		'layers'     => '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
		'home'       => '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/>',
		'bath'       => '<path d="M4 12h16v2a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-2ZM6 12V5a3 3 0 0 1 3-3c1.7 0 3 1.3 3 3M4 22v-2M20 22v-2"/>',
		'zap'        => '<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',
		'hammer'     => '<path d="m15 4 5 5-3 3-5-5 3-3ZM12 7 3 16v5h5l9-9M5 18l3 3"/>',
		'shield'     => '<path d="M12 22s8-3.8 8-10V5l-8-3-8 3v7c0 6.2 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
		'phone'      => '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c1 .4 2 .6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
		'mail'       => '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
		'pin'        => '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
		'quote'      => '<path d="M3 21c3 0 7-1 7-8V5H3v8h4c0 4-2 5-4 5v3ZM14 21c3 0 7-1 7-8V5h-7v8h4c0 4-2 5-4 5v3Z"/>',
		'arrow'      => '<path d="M5 12h14M13 6l6 6-6 6"/>',
		'check'      => '<path d="m5 12 4 4L19 6"/>',
	);

	if ( ! isset( $paths[ $name ] ) ) return '';

	return '<svg class="' . esc_attr( $class ) . '" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false">' . $paths[ $name ] . '</svg>';
}