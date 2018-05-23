<?php

get_header();

get_template_part( 'template-parts/navigation/navigation' ); ?>

<div class="page-container">
  <div class="page-wrapper">
    <h1>ARCHIVE.PHP</h1>
    <?php
    $args = array( 'post_type' => 'flower', 'posts_per_page' => 10 );
    $loop = new WP_Query( $args );
    while ( $loop->have_posts() ) : $loop->the_post();
      the_title();
      echo '<div class="entry-content">';
      the_content();
      echo '</div>';
    endwhile;
    ?>
  </div>
</div>

<?php if ( has_post_thumbnail() ) {

		$backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );?>

		<header id="hero" style="background-image: url('<?php echo $backgroundImg[0]; ?>');"></header>

<?php } ?>

<!-- The archive template is used when visitors request posts by category, author, or date. Note: this template will be overridden if more specific templates are present like category.php, author.php, and date.php. -->

<!-- <?php get_footer();
