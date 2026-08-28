<?php
/**
 * Novantis one-page homepage.
 *
 * @package Novantis
 */

get_header();

$hero_title = get_theme_mod( 'novantis_hero_title', 'Uw volledige woning bij één partner' );
$hero_sub   = get_theme_mod( 'novantis_hero_sub', 'Zonnepanelen, thuisbatterijen en warmtepompen. Dak- en gevelrenovatie, binnenafwerking, sanitair en elektriciteit. Novantis Bouwgroep regelt uw project van A tot Z.' );
$hero_img   = get_theme_mod( 'novantis_hero_image', novantis_img( 'hero-home.jpg' ) );
$team_img   = get_theme_mod( 'novantis_team_image', novantis_img( 'team-novantis.jpg' ) );
$tel        = get_theme_mod( 'novantis_phone', '+32 470 00 00 00' );
$email      = get_theme_mod( 'novantis_email', 'info@novantis.be' );
$cf7        = get_theme_mod( 'novantis_cf7_shortcode', '' );
$status     = isset( $_GET['status'] ) ? sanitize_text_field( wp_unslash( $_GET['status'] ) ) : '';
$custom_video_id = absint( get_theme_mod( 'novantis_hero_video', 0 ) );
$custom_video    = $custom_video_id ? wp_get_attachment_url( $custom_video_id ) : '';
$hero_video      = $custom_video ? $custom_video : novantis_video( 'hero-video.mp4' );
?>
<main id="main">
	<section id="top" class="hero">
		<video class="hero-media" autoplay muted loop playsinline preload="auto" poster="<?php echo esc_url( $hero_img ); ?>" aria-label="Novantis Bouwgroep in beeld">
			<source src="<?php echo esc_url( $hero_video ); ?>" type="video/mp4">
		</video>
		<div class="hero-overlay" aria-hidden="true"></div>
		<div class="container hero-content">
			<p class="eyebrow">BOUWEN. RENOVEREN. VERDUURZAMEN.</p>
			<h1><?php echo esc_html( $hero_title ); ?></h1>
			<p class="hero-sub"><?php echo esc_html( $hero_sub ); ?></p>
			<ul class="hero-checks">
				<li>Eén aanspreekpunt voor al uw werken</li>
				<li>Eigen vakmensen, vaste planning</li>
				<li>Advies over premies en subsidies</li>
			</ul>
			<div class="hero-cta">
				<a href="#offerte" class="btn btn-primary">Gratis offerte aanvragen <span aria-hidden="true">→</span></a>
				<a href="#diensten" class="btn btn-outline">Onze diensten</a>
			</div>
			<div class="hero-stats">
				<div><strong>10+</strong><span>Jaar ervaring</span></div>
				<div><strong>500+</strong><span>Tevreden klanten</span></div>
				<div><strong>100%</strong><span>Eigen opvolging</span></div>
				<div><strong>70%</strong><span>Besparing energiefactuur</span></div>
			</div>
		</div>
	</section>

	<nav class="service-strip" aria-label="Onze diensten">
		<div class="container service-strip-grid">
			<?php foreach ( novantis_services() as $dienst ) : ?>
				<a href="#diensten"><span class="service-icon"><?php echo novantis_icon( $dienst['icon'] ); ?></span><span><?php echo esc_html( $dienst['titel'] ); ?></span></a>
			<?php endforeach; ?>
		</div>
	</nav>

	<section id="configurator" class="section configurator-section">
		<div class="container">
			<div class="section-heading section-heading-light">
				<p class="eyebrow muted-eyebrow">Energieconfigurator</p>
				<h2>Bereken uw besparing in 1 minuut</h2>
				<p>Stel uw pakket samen en zie meteen wat u kan besparen, welke premies u kan krijgen en wat uw maandlast wordt.</p>
			</div>
			<div class="config-grid" data-configurator>
				<div class="config-panel">
					<h3>1. Uw huidige situatie</h3>
					<fieldset><legend>Hoe verwarmt u nu?</legend><div class="choice-grid choice-grid-3">
						<label><input type="radio" name="heating" value="gas" checked><span>Aardgas</span></label>
						<label><input type="radio" name="heating" value="stookolie"><span>Stookolie</span></label>
						<label><input type="radio" name="heating" value="elektrisch"><span>Elektrisch</span></label>
					</div></fieldset>
					<fieldset><legend>EPC-label van uw woning</legend><div class="choice-grid choice-grid-5">
						<?php foreach ( array( 'A', 'B', 'C', 'D', 'E/F' ) as $epc ) : ?><label><input type="radio" name="epc" value="<?php echo esc_attr( $epc ); ?>" <?php checked( 'D', $epc ); ?>><span><?php echo esc_html( $epc ); ?></span></label><?php endforeach; ?>
					</div></fieldset>
					<label class="range-label"><span>Verwarmingskosten per maand <output data-heat-output>€ 140</output></span><input data-heat type="range" min="40" max="400" step="10" value="140"></label>
					<label class="range-label"><span>Elektriciteit per maand <output data-electric-output>€ 90</output></span><input data-electric type="range" min="30" max="300" step="10" value="90"></label>
					<h3 class="config-subtitle">2. Kies uw pakket</h3>
					<div class="package-grid">
						<?php foreach ( array( array( 'solar', 'sun', 'Zonnepanelen (± 5 kWp)', 6500, true ), array( 'battery', 'battery', 'Thuisbatterij (10 kWh)', 6900, true ), array( 'heatpump', 'flame', 'Warmtepomp (lucht-water)', 12500, true ), array( 'charger', 'zap', 'Laadpaal', 1800, false ) ) as $item ) : ?>
							<label class="package"><input type="checkbox" value="<?php echo esc_attr( $item[0] ); ?>" data-price="<?php echo esc_attr( $item[3] ); ?>" <?php checked( true, $item[4] ); ?>><span class="package-card"><b class="package-icon"><?php echo novantis_icon( $item[1] ); ?></b><span><strong><?php echo esc_html( $item[2] ); ?></strong><small>vanaf € <?php echo esc_html( number_format_i18n( $item[3], 0 ) ); ?></small></span></span></label>
						<?php endforeach; ?>
					</div>
				</div>
				<div class="config-panel result-panel">
					<h3>Uw voorstel</h3>
					<div class="saving-box"><span>Geschatte besparing</span><strong><output data-saving>€ 155</output> <small>/ maand</small></strong><small>≈ <output data-year-saving>€ 1.860</output> per jaar</small></div>
					<dl class="result-list">
						<div><dt>Totaalpakket</dt><dd data-investment>€ 25.900</dd></div>
						<div><dt>Premies &amp; subsidies</dt><dd class="result-green">− <span data-premiums>€ 3.300</span></dd></div>
						<div><dt>Netto investering</dt><dd data-net>€ 22.600</dd></div>
						<div><dt>Financiering (10 jaar)</dt><dd><span data-monthly>€ 234</span> / maand</dd></div>
						<div><dt>Terugverdientijd</dt><dd>± <span data-payback>12,2</span> jaar</dd></div>
					</dl>
					<div class="result-actions"><a class="btn btn-primary" href="#offerte">Krijg dit voorstel →</a><a class="btn btn-outline" href="#offerte">Maak afspraak</a></div>
					<p class="disclaimer">Alle bedragen zijn indicatief. Uw definitieve prijs en besparing bepalen we na een gratis opmeting ter plaatse.</p>
				</div>
			</div>
		</div>
	</section>

	<section id="diensten" class="section light-section">
		<div class="container">
			<div class="section-heading"><span class="heading-line"></span><h2>Onze diensten</h2><p>Totaaloplossingen voor een energiezuinige, comfortabele en mooi afgewerkte woning.</p></div>
			<div class="cards">
				<?php foreach ( novantis_services() as $dienst ) : ?>
					<article class="card"><img src="<?php echo esc_url( novantis_img( $dienst['img'] ) ); ?>" alt="<?php echo esc_attr( $dienst['titel'] ); ?>" loading="lazy" width="800" height="600"><div class="card-body"><div class="card-title"><?php echo novantis_icon( $dienst['icon'] ); ?><h3><?php echo esc_html( $dienst['titel'] ); ?></h3></div><p><?php echo esc_html( $dienst['beschrijving'] ); ?></p><a href="#offerte">Prijs aanvragen <?php echo novantis_icon( 'arrow' ); ?></a></div></article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section id="realisaties" class="section soft-section">
		<div class="container">
			<div class="section-heading"><span class="heading-line"></span><h2>Onze realisaties</h2><p>Een greep uit recente projecten in Antwerpen en omstreken.</p></div>
			<div class="gallery">
				<?php foreach ( novantis_projects() as $project ) : ?><figure><img src="<?php echo esc_url( novantis_img( $project['img'] ) ); ?>" alt="<?php echo esc_attr( $project['titel'] ); ?>" loading="lazy"><figcaption><strong><?php echo esc_html( $project['titel'] ); ?></strong><span><?php echo esc_html( $project['plaats'] ); ?></span></figcaption></figure><?php endforeach; ?>
			</div>
			<img class="banner-wide" src="<?php echo esc_url( novantis_img( 'banner-diensten.jpg' ) ); ?>" alt="Overzicht van de diensten van Novantis Bouwgroep" loading="lazy">
		</div>
	</section>

	<section id="waarom" class="section dark-section">
		<div class="container why-grid">
			<div><span class="heading-line"></span><h2>Waarom kiezen voor <em>Novantis?</em></h2><p>Één bouwgroep die uw woning volledig onder handen neemt: van energietechnieken tot de laatste laag verf.</p><div class="reason-list"><?php foreach ( novantis_reasons() as $reason ) : ?><article><span><?php echo novantis_icon( 'shield' ); ?></span><div><h3><?php echo esc_html( $reason[0] ); ?></h3><p><?php echo esc_html( $reason[1] ); ?></p></div></article><?php endforeach; ?></div></div>
			<div class="number-grid"><div><strong>+500</strong><span>Tevreden klanten</span></div><div><strong>+1500</strong><span>Projecten uitgevoerd</span></div><div><strong>10+</strong><span>Jaar ervaring</span></div><div><strong>48u</strong><span>Offerte na bezoek</span></div></div>
		</div>
	</section>

	<section id="over-ons" class="section light-section"><div class="container team-grid"><img src="<?php echo esc_url( $team_img ); ?>" alt="Het team van Novantis Bouwgroep" loading="lazy"><div><span class="heading-line"></span><h2>Uw persoonlijke adviseurs</h2><p>U krijgt één vast aanspreekpunt dat uw project van intake tot oplevering opvolgt.</p><ul class="advisors"><li><strong>Tom Verheyen</strong><b>Energie-adviseur</b><span>Zonnepanelen, batterijen, warmtepompen &amp; laadpalen</span></li><li><strong>Lotte De Smet</strong><b>Renovatie-adviseur</b><span>Dak-, gevelrenovaties en badkamers</span></li><li><strong>Jeroen Maes</strong><b>Technisch adviseur</b><span>Ventilatie, verwarming en sanitair</span></li></ul><a href="#offerte" class="btn btn-primary">Vraag persoonlijk advies →</a></div></div></section>

	<section id="werkwijze" class="section light-section"><div class="container"><div class="section-heading"><span class="heading-line"></span><h2>Zo werken wij</h2></div><div class="steps"><?php foreach ( novantis_steps() as $step ) : ?><article><strong><?php echo esc_html( $step[0] ); ?></strong><h3><?php echo esc_html( $step[1] ); ?></h3><p><?php echo esc_html( $step[2] ); ?></p></article><?php endforeach; ?></div></div></section>

	<section class="section soft-section"><div class="container"><div class="section-heading"><span class="heading-line"></span><h2>Wat klanten zeggen</h2></div><div class="testimonials"><blockquote><?php echo novantis_icon( 'quote' ); ?>“Zonnepanelen, batterij en warmtepomp in één traject. Alles netjes op tijd en de communicatie was top.”<cite>Familie Vermeiren — Antwerpen</cite></blockquote><blockquote><?php echo novantis_icon( 'quote' ); ?>“Volledige dak- en gevelrenovatie. Correcte prijs, duidelijke planning en een prachtig resultaat.”<cite>Kris D. — Mechelen</cite></blockquote><blockquote><?php echo novantis_icon( 'quote' ); ?>“Onze badkamer en elektriciteit volledig vernieuwd. Eén aanspreekpunt maakte het echt zorgeloos.”<cite>Sofie &amp; Tom — Lier</cite></blockquote></div></div></section>

	<section id="faq" class="section light-section"><div class="container faq-wrap"><div class="section-heading"><span class="heading-line"></span><h2>Veelgestelde vragen</h2></div><?php foreach ( novantis_faqs() as $faq ) : ?><details><summary><?php echo esc_html( $faq[0] ); ?></summary><p><?php echo esc_html( $faq[1] ); ?></p></details><?php endforeach; ?></div></section>

	<section id="offerte" class="section dark-section"><div class="container quote-grid"><div><span class="heading-line"></span><h2>Vandaag investeren, <em>morgen besparen</em></h2><p>Vul het formulier in en we contacteren u binnen 24 uur voor een gratis adviesgesprek en prijsvoorstel.</p><ul class="contact-list"><li><?php echo novantis_icon( 'phone' ); ?><a href="tel:<?php echo esc_attr( preg_replace( '/[^0-9+]/', '', $tel ) ); ?>"><?php echo esc_html( $tel ); ?></a></li><li><?php echo novantis_icon( 'mail' ); ?><a href="mailto:<?php echo esc_attr( $email ); ?>"><?php echo esc_html( $email ); ?></a></li><li><?php echo novantis_icon( 'pin' ); ?>Actief in heel Vlaanderen</li></ul></div><div>
		<?php if ( 'ok' === $status ) : ?><p class="form-message success">Bedankt! Uw aanvraag is goed ontvangen.</p><?php elseif ( 'fout' === $status ) : ?><p class="form-message error">Controleer uw gegevens en probeer opnieuw.</p><?php endif; ?>
		<?php if ( $cf7 ) : echo do_shortcode( $cf7 ); else : ?>
		<form class="quote-form" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>"><input type="hidden" name="action" value="novantis_quote"><?php wp_nonce_field( 'novantis_quote', 'novantis_quote_nonce' ); ?><div class="form-row"><label>Naam<input type="text" name="naam" placeholder="Uw naam" required></label><label>Telefoon<input type="tel" name="telefoon" placeholder="04xx xx xx xx"></label></div><label>E-mail<input type="email" name="email" placeholder="u@voorbeeld.be" required></label><label>Gemeente<input type="text" name="gemeente" placeholder="Waar bevindt de woning zich?"></label><label>Welke werken?<select name="dienst"><?php foreach ( novantis_services() as $dienst ) : ?><option><?php echo esc_html( $dienst['titel'] ); ?></option><?php endforeach; ?><option>Totaalproject (meerdere werken)</option></select></label><label>Uw project<textarea name="bericht" rows="4" placeholder="Vertel kort wat u wenst te laten uitvoeren..."></textarea></label><button class="btn btn-primary" type="submit">Gratis offerte aanvragen →</button><small>Geen verplichtingen. Uw gegevens worden enkel gebruikt om u te contacteren.</small></form>
		<?php endif; ?></div></div></section>
</main>
<?php get_footer(); ?>