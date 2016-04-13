<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?><?php if($page):?><div class="village-slider"><?php endif; ?>
<article class="v-grid-template node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>> 
    <div class="left v-grid-template__list-img">
	 <?php print render($content['field_slide']);?>
	 <div class="village-pagin-nav"><?php if(isset($tree)) print $tree; ?></div>
	</div>
	<div class="right v-grid-template__content">
	<div class="v-grid-template__wrap">
	
	<?php 
		print theme('breadcrumb', array('breadcrumb'=>ws_villages_bread()));
	?>
	<div class="v-grid-template__text">
	  <?php if(isset($content['field_icon'])) print render($content['field_icon']); ?>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1 class="text-center"><?php print $title; ?>
			<?php if(isset($content['field_related_village'])): ?> <div class="chapter"><?php  print render($content['field_related_village']); ?></div><?php endif;?>
		</h1>      
      <?php print render($title_suffix); ?>
	 <?php print render($tabs); ?>      
  <?php endif; ?>

  <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
	hide($content['book-navigation']);
    print render($content);
  ?>
</div>  
  </div>
  
	<button class="arrows arrow__prev "><span class="icon-arrow-left"></span></button>
	<button class="arrows arrow__next"><span class="icon-arrow-right"></span></button>

</div>
</article>
<?php if($page):
	$block = module_invoke('views', 'block_view', 'villages-block_1');
	print render($block['content']);
?></div><?php endif; ?>