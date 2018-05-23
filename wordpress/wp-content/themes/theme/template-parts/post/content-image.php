<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage HK
 * @since 1.0
 * @version 1.2
 */?>


<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
   <?php the_post_thumbnail(); ?>
</a>
