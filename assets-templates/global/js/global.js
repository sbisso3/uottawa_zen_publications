/**
 * @file global.js
 * module: global
 * require: jQuery 1.4
 */
(function($) {
$(document).ready(function(){
	ut.init();
});


/**
 * Object ut (uOttawa templates)
 *
 *
 * PROPERTIES
 * - conf : templates conf librairies
 * - i18n : templates localization libraries
 *
 * Notes: Please note that conf and i18N are stored as object
 * Example : ut.i18n.globalSearch is a i18n object
 *
 * METHODS
 * - push : push a localized string or a variable in ut. This method
 *          is used to makes the localization of string easy.
 *          Also use to store a simple variable that you want to reuse in ut.
 * - isMinimumBrowser true if javascript min function are enabled
 * - lang : 2 letters representation of the lang
 *
 *
 *  push METHOD
 *
 *
 * \brief store a value to ut.i18n | ut.conf
 * @param string = use one of the following librairies:
 * - ut.TI18N, to store a localization information
 * - ut.TCONF, to store variables
 * @param name, string that will become the key to identify your id, i18n...
 * @param object or string. The string will be converted to the right object
 * if you do not do it
 *
 * USAGE EXAMPLES
 *
 * ut.push(TI18N, 'url', {fr:'mon nom', en:'my name'});
 *
 * get the french translation from ut
 * out += "French translation: " + ut.i18n.url.fr + "\n";
 *
 * get the french translation from ut
 * out += "English translation: " + ut.i18n.url.en + "\n";
 *
 * get the french translation from ut
 * out += "Current translation: " + ut.i18n.url.t() + "\n";
 *
 *
 *
 * checkPlain METHOD
 * Encode special characters in a plain-text string for display as HTML.
 *
 */
var ut = {
	// act as constant
	TI18N : "i18n",
	TCONF : "conf",
	WIDTH : 972,

	// i18n collection
	i18n : {},

	// conf collections
	conf : {},

	// charset cache
	_charset : "",

	// lang cache
	_lang : "",

	// parse navigation
	parseNavigation : true,

	// i18n object,
	// Used to store localized string
	// Usage: var l = new i18n({fr:'mon nom', en:'my name'});
	_i18n : function (obj){
		this.fr = obj.fr;
		this.en = obj.en;

	// Translate strings to the page language or a given language.
	// This is based on Drupal's function for translation
	//
	// @param str
	//  A string containing the English string to translate.
	// @param args
	//  An object of replacements pairs to make after translation. Incidences
	//  of any key in this array are replaced with the corresponding value.
	//  Based on the first character of the key, the value is escaped and/or themed:
	//    - !variable: inserted as is
	//    - @variable: escape plain text to HTML (checkPlain)
	// @return
	// The translated string.
	this.t = function() {
		// Fetch the localized version of the string.
		var str = this[ut.lang()];
		var args = arguments[0];

		if (args) {
			// Transform arguments before inserting them
			for (var key in args) {
				switch (key.charAt(0)) {
					// Escaped only
					case '@':
						args[key] = ut.checkPlain(args[key]);
						break;
					// Pass-through
					case '!':
					break;
					// Escaped and placeholder
					case '%':
					break;
				}
				str = str.replace(key, args[key]);
			}
		}
		return str;
		}
  },

	// conf object
	// use it to store settings
	_conf : function (setting){
		this.setting = setting;
		return this;
	},

	// push method
	push : function(type, name, value){
		var val;
		switch(type){
			case ut.TI18N:
				val = typeof(value) == ut.TI18N ? value : new ut._i18n(value);
				this.i18n[name] = val;
				break;
			case ut.TCONF:
				val = typeof(value) == ut.TCONF ? value : new ut._conf(value);
				this.conf[name] = val;
				break;
		}
	},

	// isMinimumBrowser
	isMinimumBrowser : function(){
		return document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById ? true : false;
	},

	// lang property
	lang : function () {
		if(ut._lang != ""){
			return ut._lang;
		}
		// try to get it from the html tag
		ut._lang = $("html").attr("lang").substring(0,2);

		// some systems do not allow attributes on HTML tag
		// ex. : CGI/NJOIN
		// Try to find it on the body tag
		if(ut._lang == "" || ut._lang == undefined ){ ut._lang = $("body").attr("lang"); };

		// else assign a default value
		ut._lang == "" || ut._lang == undefined ? "en" : ut._lang;

		return ut._lang;
	},

	// return the charset of the page
	// directly imported from 2006 templates
	// \todo See if we can optimize it using jQuery
	charset : function () {
		if(ut._charset != ""){
			return ut._charset;
		}
		var meta = $("meta");
		meta.each(function(index) {
			if($(this).attr("charset") != undefined){
				ut._charset = $(this).attr("charset");
			}
		});
		return ut._charset == "" ? "iso-8859-1" : ut._charset;
	},

	// Encode special characters in a plain-text string for display as HTML.
	checkPlain : function (str) {
		str = String(str);
		var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
		for (var character in replace) {
			var regex = new RegExp(character, 'g');
			str = str.replace(regex, replace[character]);
		}
		return str;
	},

	// This function add a 1 px margin-right
	// to the body in case the browser window
	// is an odd number width
	// If the width is odd, the window can not be centered properly
	// in webkit based browser.
	windowResize : function () {
		var w = $(window).width();
		var r = (w - ut.WIDTH) % 2;
		var m = r != 0 && w > ut.WIDTH ? 1 : 0;
		$('body').css('margin-right', m);
	},

	debug : function(){
		$("#wrapper").addClass("showgrid");
	},

	// function loaded on init
	init : function(){
		ut.windowResize();
		$(window).resize(ut.windowResize);
		if($.jqURL.get('debug') == "true"){
			ut.debug();
		}
		ut.addBetaLabel();
		ut.setLangCookie();
	},

  // parseUri 1.2.2
  // (c) Steven Levithan <stevenlevithan.com>
  // MIT License
		_uri : {
			strictMode: true,
			key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
			q:   {
				name:   "queryKey",
				parser: /(?:^|&)([^&=]*)=?([^&]*)/g
			},
			parser: {
				strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
				loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
			}
	},
	parseUri : function (str) {
		var	o   = ut._uri,
		m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
		uri = {},
		i   = 14;

		while (i--) uri[o.key[i]] = m[i] || "";
			uri[o.q.name] = {};
			uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
			if ($1) uri[o.q.name][$1] = $2;
		});
		return uri;
	},
	createCookie : function (name,value,days,domain) {
  	if (days) {
    	var date = new Date();
    	date.setTime(date.getTime()+(days*24*60*60*1000));
    	var expires = "; expires="+date.toGMTString();
  	}
  	else expires = "";

  	/* Start modification */
  	//document.cookie = name+"="+value+expires+"; path=/";
  	var cookie_contents = name+"="+value+expires+"; path=/";
  	if (domain && domain.match(/[0-9A-Za-z][-0-9A-Za-z]+\.[0-9A-Za-z]+$/) && window.location.hostname.match(domain)) {
    cookie_contents += ";domain="+domain;
  	}
  	document.cookie = cookie_contents;
  	/* End modifications */
	},
	readCookie : function (name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	},
	eraseCookie : function(name) {
		ut.createCookie(name,'',-1,'.uottawa.ca');
	},
	addBetaLabel : function(){
		var beta = ut.readCookie('uostyle');
			if (beta) {
				$('<div/>').attr('id', 'beta').text('Beta').appendTo("body");
			}
	},
	setLangCookie : function() {
		ut.createCookie('lang-prev-page',ut.lang(),'365','.uottawa.ca');
		
		/* Remove lang cookie: no longer needed as it conflicted with some tools */
		ut.eraseCookie('lang');
	}
};
}(jQuery));