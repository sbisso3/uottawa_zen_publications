<a class="top-task-box" href="<?php print url('node/' . $nid); ?>">
	<img src="<?php print file_create_url($field_uottawa_primary_image['und'][0]['uri']); ?>" alt="<?php print check_plain($field_uottawa_primary_image['und'][0]['alt']); ?>">
	<h2><?php print $title; ?></h2>       
	<p><?php print check_plain($body['und'][0]['summary']) ?></p>
</a>



