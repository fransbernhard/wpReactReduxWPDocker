<?php
/*
Template Name: Contact Template
*/

  get_header();

  get_template_part( 'template-parts/navigation/navigation' );?>

	<section id="big-video">
		<div class="video" data-src="http://localhost/wordpress/wp-content/uploads/2018/02/IMG_0815.jpg" data-video="http://localhost/wordpress/wp-content/uploads/2018/02/Desert-Watching.mp4" data-placeholder="http://localhost/wordpress/wp-content/uploads/2018/02/IMG_0815.jpg">
			<div class="hihi">
				<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				<?php the_content(); ?>
			</div>
		</div>
	</section>

<?php get_footer(); ?>
