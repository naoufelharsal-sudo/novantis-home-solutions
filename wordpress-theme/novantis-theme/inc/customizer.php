<?php
/**
 * Customizer instellingen.
 *
 * @package Novantis
 */

function novantis_customize_register( $wp_customize ) {
	$wp_customize->add_section( 'novantis_contact', array(
		'title'    => __( 'Novantis — Contact & Hero', 'novantis' ),
		'priority' => 30,
	) );

	$fields = array(
		'novantis_phone'         => array( 'label' => __( 'Telefoonnummer', 'novantis' ), 'type' => 'text' ),
		'novantis_email'         => array( 'label' => __( 'E-mailadres (ontvangt aanvragen)', 'novantis' ), 'type' => 'email' ),
		'novantis_tagline'       => array( 'label' => __( 'Tagline', 'novantis' ), 'type' => 'text', 'default' => 'Bouwen. Renoveren. Verduurzamen.' ),
		'novantis_hero_title'    => array( 'label' => __( 'Hero titel', 'novantis' ), 'type' => 'text' ),
		'novantis_hero_sub'      => array( 'label' => __( 'Hero ondertitel', 'novantis' ), 'type' => 'textarea' ),
		'novantis_cf7_shortcode' => array( 'label' => __( 'Contact Form 7 shortcode (optioneel)', 'novantis' ), 'type' => 'text' ),
	);

	foreach ( $fields as $id => $args ) {
		$wp_customize->add_setting( $id, array(
			'default'           => isset( $args['default'] ) ? $args['default'] : '',
			'sanitize_callback' => 'email' === $args['type'] ? 'sanitize_email' : 'sanitize_text_field',
		) );
		$wp_customize->add_control( $id, array(
			'section' => 'novantis_contact',
			'label'   => $args['label'],
			'type'    => 'textarea' === $args['type'] ? 'textarea' : 'text',
		) );
	}

	$wp_customize->add_setting( 'novantis_hero_image', array( 'sanitize_callback' => 'esc_url_raw' ) );
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'novantis_hero_image', array(
		'section' => 'novantis_contact',
		'label'   => __( 'Hero afbeelding (fallback/poster)', 'novantis' ),
	) ) );

	$wp_customize->add_setting( 'novantis_team_image', array( 'sanitize_callback' => 'esc_url_raw' ) );
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'novantis_team_image', array(
		'section' => 'novantis_contact',
		'label'   => __( 'Teamfoto (Over ons)', 'novantis' ),
	) ) );

	$wp_customize->add_setting( 'novantis_hero_video', array( 'sanitize_callback' => 'absint' ) );
	$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'novantis_hero_video', array(
		'section'   => 'novantis_contact',
		'label'     => __( 'Hero video (MP4)', 'novantis' ),
		'mime_type' => 'video',
	) ) );
}
add_action( 'customize_register', 'novantis_customize_register' );
