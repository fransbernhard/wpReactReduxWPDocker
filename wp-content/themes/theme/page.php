<?php get_header();

	get_template_part( 'template-parts/navigation/navigation' );?>

	<div class="page-container">
		<div class="page-wrapper">
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
				<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				<?php the_content(); ?>
			<?php endwhile; endif; ?>
		</div>
	</div>

<?php get_footer(); ?>
