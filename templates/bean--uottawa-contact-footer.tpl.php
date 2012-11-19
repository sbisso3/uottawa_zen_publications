<?php if (module_exists('uottawa_assets_library')): ?>

<div id="contact_footer">
  <div class="contact_footer_info">
    <h2><?php print check_plain($elements['#entity']->title); ?></h2>
    <?php foreach ($field_contact_footer_body as $content): ?>
    <div class="contact_footer_box">
      <?php print $content['value']; ?>&nbsp;
    </div>
    <?php endforeach; ?>
  </div>
  <?php
    if (!empty($field_contact_footer_highlight)):
    $highlight = trim($field_contact_footer_highlight[0]['value']);
    if (!empty($highlight)):
  ?>
    <div class="contact_footer_highlight"><?php print $highlight; ?></div>
  <?php endif;
        endif; ?>
  <br style="clear: both;" />
</div>

<?php else: ?>
<p><?php print t('You must enable the uOttawa Assets Library module to use this feature'); ?></p>
<?php endif; ?>