<?php
/**
 * Fallback template.
 *
 * @package Novantis
 */

get_header();
?>
<main id="main" class="site-main section">
	<div class="container">
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<article <?php post_class(); ?>>
				<h1><?php the_title(); ?></h1>
				<div class="entry-content"><?php the_content(); ?></div>
			</article>
		<?php endwhile; else : ?>
			<p><?php esc_html_e( 'Geen inhoud gevonden.', 'novantis' ); ?></p>
		<?php endif; ?>
	</div>
</main>
<?php
get_footer();
