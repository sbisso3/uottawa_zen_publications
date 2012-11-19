/**
 * @file globalSearch.js
 * module globalSearch
 * Global Search Box (top banner)
 */
$(document).ready(function() {
	globalSearch.init();
});

var globalSearch = {

  // push ID to ut
//  ut.push(TID, "mainBanner", "main-banner");
//  ut.push(TID, "mainBranding", "main-branding");
//  ut.push(TID, "globalSearch", "global-site-search");
//  ut.push(TID, "globalSearchLabel", "global-site-search-label");
//  ut.push(TID, "globalSearchInput", "global-site-search-words");
//  ut.push(TID, "globalSearchSubmit", "global-site-search-submit");
	init : function (){
		// push i18n to ut
		ut.push(ut.TI18N, "urlGlobalSearch", {fr:'http://search.uottawa.ca/fr/', en:'http://search.uottawa.ca/en/'});
		ut.push(ut.TI18N, "labelGlobalSearch", {fr:'Chercher le contenu du site Web de l\'Université d\'Ottawa', en:'Search the University of Ottawa Web site'});
		ut.push(ut.TI18N, "labelGlobalSearchHint", {fr:'Chercher sur uOttawa.ca', en:'Search uOttawa.ca'});

		// add form to the page
		globalSearch.addForm();
	},

  // Test if the parent container
  // is encapsulated in a ASPX form element or not
  // CMS using .NET technologies sometimes embed the entire page
  // in a <form> tag. If we hardcode the search form, this create
  // a 505 server error.
  // To prevent this, we add it by javascriptæ
	isInForm : function (){
		window.isInForm = false;
		$("form div").each(function(index) {
			console.log($(this).attr("ID"));
			if($(this).attr("ID") == "main-banner"){
				console.log(">> found" + $(this).attr("ID"));
				window.isInForm = true;
				return false;
			}
		});
		return window.isInForm;
	},

	addForm : function () {
		// Create search element to a div or form depending the previous answer
		// a form could not be nested in another form
		var isInForm = globalSearch.isInForm();
		console.log(isInForm);
		var searchElement = isInForm ? '<DIV>' :'<FORM>';
		var searchSubmit = isInForm ? 'button' :'submit';

		var form = $(searchElement, {
			id : "global-site-search"
		});

		// add the label to the form
		var searchLabel = $("<label>", {
			'for' : "global-site-search-words",
			id : "global-site-search-label",
			html : ut.i18n.labelGlobalSearch.t()
		});
		form.append(searchLabel);

    	// add text input field
		var inputText = $("<input>", {
			id : "global-site-search-words",
			name : 'q',
			type : 'text',
			'placeholder' : ut.i18n.labelGlobalSearchHint.t()
		});
		form.append(inputText);

		if (!Modernizr.input.placeholder){	
      		// add the hint label to the form
			var searchLabelHint = $("<label>", {
				'for' : "global-site-search-words",
				id : "global-site-search-hint",
				html : ut.i18n.labelGlobalSearchHint.t()
			});
			form.append(searchLabelHint);
    	}

		// add hidden field
		var inputHidden = $("<input>", {
			value : ut.charset(),
			name : 'ie',
			type : 'hidden'
		});
		form.append(inputHidden);

		// add submit
		var inputSubmit = $("<input>", {
			title: ut.i18n.labelGlobalSearchHint.t(),
			'class'  : "submit",
			id : "global-site-search-submit",
			type : searchSubmit
		});
		form.append(inputSubmit);

		// only add this if the browser doesn't support 'placeholder'
		if (!Modernizr.input.placeholder){
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
		
		// add form to the content
		$("#main-branding").after(form);

		// finalize form
		if(!isInForm){
			form.attr('method', 'get');
			form.attr('action', ut.i18n.urlGlobalSearch.t());
		}else{

			inputText.keypress(function(e) {
				/* if enter is pressed */
				if (e.keyCode=='13') {
					globalSearch.submitSearchWithNoForm();
					e.preventDefault();
				}
			});

			inputSubmit.click(function(e) {
				globalSearch.submitSearchWithNoForm();
				e.preventDefault();
			});
		}
	},

	submitSearchWithNoForm : function() {
		// instead of submitting the page's main form, use a redirection to go to search results
		// encodeURI is always in UTF-8-encoded escape characters
		var field = $("#global-site-search-words");
		url = ut.i18n.urlGlobalSearch.t() + "?" + field.attr('name') + "=" + encodeURI(field.val()) + "&ie=utf-8";
		document.location = url;
	}
}
