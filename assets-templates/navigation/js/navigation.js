/**
 * @file navigation.js
 * module navigation
 * add active class in the top navigation
 * expand left navigation
 *
 * how it works
 * User specify 2 javascript variables
 * example:
 * var currentTopNavSection = "top-nav-services";
 * var expandNavSection = "left-nav-distance";
 *
 * Each variable contains the id of the li to expand
 * this jQuery module add the required class if
 * - variables are declared
 * - id exists
 */
var nav = {
	href : {},
  currentIsSet : false,
	init : function() {
    if(!ut.parseNavigation) { return; }
    nav.href.parts = ut.parseUri(document.location);
		nav.href.isIndex = nav.isIndex(nav.href.parts.file);
    nav.href.parts.file = nav.href.isIndex ? "" : nav.href.parts.file;

		if(window.currentTopNavSection !== undefined && window.currentTopNavSection !== ""){
			$("li#" + window.currentTopNavSection).addClass("current");
			nav.currentIsSet = true;
		}
		if(window.expandNavSection !== undefined && window.expandNavSection !== ""){
			$("li#" + window.expandNavSection).addClass("expand");
		}
		if(!nav.currentIsSet){ nav.setCurrent(); }
	},
	isIndex : function(str){
  	return str.indexOf("index") != -1 || str.indexOf("default") != -1 || str == "" ? true : false;
  },
	setCurrent : function() {

		$("ul#left-nav li a").each(function (i) {
			var cHref = String($(this).attr('href'));
			var cParts = ut.parseUri(cHref);

			//build absolute path
			// if no domain (relative or absolute path). this is the same domain
			if(cParts.host == ""){
				// no host
				cParts.host = nav.href.parts.host;
				cParts.protocol = nav.href.parts.protocol;

				// start with / or not
				cParts.relative = cHref.indexOf("/") == 0 ? cParts.relative : nav.href.parts.relative;

			};

			cIsIndex = nav.isIndex(cParts.file);
			cParts.file = cIsIndex ? "" : cParts.file;
			if(cParts.protocol == nav.href.parts.protocol && cParts.host == nav.href.parts.host && cParts.relative == nav.href.parts.relative && cParts.file == nav.href.parts.file){
				$(this).parent().addClass("current");
				return false;
			}
		});
	}

};

$(document).ready(function() {
	nav.init();
});