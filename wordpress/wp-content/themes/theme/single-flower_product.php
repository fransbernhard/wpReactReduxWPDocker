<?php

get_header();

get_template_part( 'template-parts/navigation/navigation' ); ?>

<div class="page-container">
  <div class="page-wrapper">
    <?php if (have_posts()) : while (have_posts()) : the_post();?>
			<h1><?php the_title(); ?></h1>
			<?php the_content();
      if ( has_post_format('image') ) {
        ?><h2>Jag har post-format: image</h2><?php
      }
      if ( has_post_thumbnail() ) :
				the_post_thumbnail();
			endif;

		endwhile; endif;?>
  </div>
</div>

<?php get_footer();
