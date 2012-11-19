<?php
	$view = views_get_view('index_page_view');
	$view->set_display('page');
	$view->set_items_per_page(0);
	
	$filter = $view->get_item($view->current_display, 'filter', 'field_uottawa_content_category_tid');
	$tid = $field_display_category['und'][0]['tid'];
	$filter['value'] = array(
		$tid => $tid,
	);
	$view->set_item($view->current_display, 'filter', 'field_uottawa_content_category_tid', $filter);
	$view->execute();
	print '<select id="jump_list'.$nid.'">';
	print '<option selected="selected" value="">' . t('Jump List') . '</option>';
	foreach ($view->result as $result):
?>
	<option value="<?php print $result->nid; ?>"><?php print check_plain($result->node_title); ?></option>
<?php
	endforeach;
	print '</select>';
?>
<input type="button" class="jump_list_go" id="jump_list_go<?php print $nid; ?>" value="Go" />