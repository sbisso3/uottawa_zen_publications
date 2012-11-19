<?php $page=TRUE; ?>
<h1><?php print $title; ?></h1>
<p><?php print $date; ?><p>


<section>

<?php print uottawa_zen_publications_image_parser($content['body']['#object']->body['und'][0]['value']) . '<img src="' . drupal_get_path('theme', 'uottawa_zen_publications') . '/images/endsign-tabaret.png" width="15" height="15" id="endsign" alt="" class="instapaper_ignore">'; ?>
</section>





