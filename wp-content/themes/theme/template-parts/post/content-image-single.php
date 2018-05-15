<?php
/**
 * Template part for displaying thumbnail
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage HK
 * @since 1.0
 * @version 1.2
 */

$thumbnailBgImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );?>

<div id="thumbnail-single" style="background-image: url('<?php echo $thumbnailBgImg[0]; ?>');"></div>
