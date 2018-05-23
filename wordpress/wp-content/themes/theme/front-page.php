<?php
/**
 * The front page template file
 *
 * If the user has selected a static page for their homepage, this is what will
 * appear.
 *
 * @package WordPress
 * @subpackage HK2
 * @since 1.0
 * @version 1.0
 */

get_header();

get_template_part( 'template-parts/navigation/navigation' );
?>

<div class="page-container">
  <div class="page-wrapper">
    <h1>I AM FRONT PAGE</h1>
    <img src="./wp-content/themes/theme/app/img/alex.jpg" alt="">
  </div>
</div>

<?php get_footer();
