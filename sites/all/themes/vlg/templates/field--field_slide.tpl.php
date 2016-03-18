<div class="village-img-slider">    
    <?php foreach ($items as $delta => $item): ?>
      <div class="item"><div class="v-grid-template__img" style="background-image: url(<?php print file_create_url($item['#item']['uri']) ?>);"></div><?php //var_dump($item); ?></div>
    <?php endforeach; ?>  
</div>
