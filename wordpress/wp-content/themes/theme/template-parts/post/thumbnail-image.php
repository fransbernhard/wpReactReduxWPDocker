<?php
/**
 * Template part for displaying posts
 *
 *
 * @package WordPress
 * @subpackage HK
 * @since 1.0
 * @version 1.2
 */
  $thumbnailBgImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );

 ?>

<a class="post" href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" >
  <div id="post-thumbnail" style="background-image: url('<?php echo $thumbnailBgImg[0]; ?>');"></div>
</a>
