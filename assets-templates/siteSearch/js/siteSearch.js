/**
 * @file siteSearch.js
 * module siteSearch
 * Site Search Box (top banner)
 */
$(document).ready(function() {
	siteSearch.init();
});

var siteSearch = {
	init : function () {
		var searchLabelHint = $("#site-search-label");
		var inputText = $("#site-search-words");
				
		// only if the browser supports 'placeholder'
		if (Modernizr.input.placeholder){
			inputText.css('line-height', 0);
			inputText.attr('placeholder', searchLabelHint.html());
			searchLabelHint.remove();
		}
		// only add this if the browser doesn't support 'placeholder'
		else if (!Modernizr.input.placeholder){
			// for is initially empty
			if (inputText.val() == "") {
				searchLabelHint.addClass('empty');
			}
			
			// onfocus: remove hint
			inputText.focus(function() {
				searchLabelHint.removeClass('empty');
			});
			
			// onblur: add hint again if empty
			inputText.blur(function() {
				if (inputText.val() == "") {
					searchLabelHint.addClass('empty');
				}
			});
		}
	}
}