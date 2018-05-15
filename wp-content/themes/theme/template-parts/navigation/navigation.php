<?php
/**
 * Template part for nav
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage HK
 * @since 1.0
 * @version 1.2
 */?>

 <nav>
  <?php
    $args = array(
      'theme_location' => 'primary'
    );
    wp_nav_menu( $args );
  ?>
</nav>
