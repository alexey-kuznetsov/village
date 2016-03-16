<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>
<article class="node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>> 
    <div class="left">
	 <?php print render($content['field_slide']);?>
	 <div class="village-menu"><?php print $tree; ?></div>
	</div>
	<div class="right">
	<header>
	<?php
		print theme('breadcrumb', array('breadcrumb'=>drupal_get_breadcrumb()));
	?>
	  <?php if($content['field_icon']) print render($content['field_icon']); ?>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h2<?php print $title_attributes; ?>><?php print $title; ?></h2>      
      <?php print render($title_suffix); ?>
	 <?php print render($tabs); ?>
      <?php if ($display_submitted): ?>
        <p class="submitted">
          <?php print $user_picture; ?>
          <?php print $submitted; ?>
        </p>
      <?php endif; ?>

      <?php if ($unpublished): ?>
        <mark class="unpublished"><?php print t('Unpublished'); ?></mark>
      <?php endif; ?>
    </header>
  <?php endif; ?>

  <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
    print render($content);
  ?>

  <?php //print render($content['links']); ?>

  <?php print render($content['comments']); ?>
</div>
</article>
