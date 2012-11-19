<?php
/**
 * @file views-view-unformatted.tpl.php
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>






<ul class="top-task-boxes">

	<?php 
		$first = TRUE;
		foreach ($rows as $id => $row):
			if ($first) {
				print '<li class="first">' . $row . '</li>'; 
			} else {
				print '<li>' . $row . '</li>'; 
			}
			$first = FALSE;
		endforeach; 
	?>

</ul>
<?php /*
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
  <div class="<?php print $classes_array[$id]; ?>">
    <?php print $row; ?>
  </div>
<?php endforeach; ?>
*/ 