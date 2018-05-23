<?php get_header();

get_template_part( 'template-parts/navigation/navigation' );?>

<div class="page-container">
  <?php if(current_user_can('administrator')) : ?>
    <div class="admin">
      <h3>Quick add post</h3>
      <input type="text" name="title" placeholder="Title">
      <textarea name="content" placeholder="Content"></textarea>
      <button type="button" id="add-btn">Create post</button>
    </div>
  <?php endif; ?>

  <div class="page-wrapper-archive">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <?php if ( has_post_thumbnail() ) : ?>
        <?php get_template_part( 'template-parts/post/thumbnail-image' );
      endif; ?>
    <?php endwhile; endif; ?>
  </div>

  <h1>Only Flowers</h1><?php
  $args = array(
      'post_type' =>  'flower_product',
      'orderby'   =>  'date',
      'post_status' => 'publish',
      'posts_per_page' => -1
  );
  $loop = new WP_Query( $args ); ?>
  <div class="flower-container"><?php
    if( $loop->have_posts() ) :
      while ( $loop->have_posts() ): $loop->the_post();
        get_template_part( 'template-parts/post/thumbnail-image' );
      endwhile;
    endif; ?>
  </div>

  <div class="page-wrapper-archive space">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <?php if ( has_post_thumbnail() ) : ?>
        <?php get_template_part( 'template-parts/post/content' );
      endif; ?>
    <?php endwhile; endif; ?>
  </div>
</div>

<?php get_footer(); ?>
