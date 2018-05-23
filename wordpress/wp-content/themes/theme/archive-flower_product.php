<?php

get_header();

get_template_part( 'template-parts/navigation/navigation' ); ?>

<div class="page-container">
  <div class="page-wrapper">
    <h1>ARCHIVE BLOMMOR</h1>
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

<?php get_footer();
