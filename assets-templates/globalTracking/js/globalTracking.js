/**
 * @file globalTracking.js
 * module globalTracking
 * Global Google Analytics Tracking
 */
 
$(document).ready(function() {
	globalTracking.init();
});

var globalTracking = {

	init : function () {

		if (typeof window._gat == 'undefined') {
			(function() {
			    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			  })();
		}
	
		try {
			_gaq = window._gaq || [];
			
			_gaq.push(
				['uottawa._setAccount','UA-6980640-11']
			,	['uottawa._setDomainName','.uottawa.ca']
			
			,	['uottawa._setCustomVar',2,'page-lang',ut.lang(),3]
			,	['uottawa._setCustomVar',3,'template-version','3',3]
			,	['uottawa._setCustomVar',4,'is-home',(globalTracking.isHome())?"true":"false",3]
			
			,	['uottawa._trackPageview',globalTracking.pathWithProtocolAppended()]
			);
			
			if (!window._gaq) window._gaq = _gaq;
		} catch(err) {}
	
		if (typeof window._gaTrackClicks == 'undefined') { return; }
			
		_gaTrackClicks._parseElement(document.getElementById('main-banner'),'header');
		_gaTrackClicks._parseElement(document.getElementById('section-header'),'content');
		_gaTrackClicks._parseElement(document.getElementById('section-top'),'content');
		_gaTrackClicks._parseElement(document.getElementById('sidebar-left'),'content');
		_gaTrackClicks._parseElement(document.getElementById('main-content'),'content');
		_gaTrackClicks._parseElement(document.getElementById('sidebar-right'),'content');
		_gaTrackClicks._parseElement(document.getElementById('main-siteinfo'),'footer');

	},
	
	isHome : function () {
		return ($('#site-id h1').length > 0);
	}, 
	
	pathWithProtocolAppended : function () {
		return window.location.pathname + window.location.search + "&_gaProtocol=" + window.location.protocol;
	}
}

var _gaTrackClicks = {
 
	eventCategory: 'Clicks on ' + location.hostname,
	pageTrackerVarName: 'window._gaq',

	_parseElement : function (element, label) {
		if (!element) return;

		var eventCategory = _gaTrackClicks.eventCategory;
		var eventAction = _gaTrackClicks.trimAndClean(label);

		if (element.tagName.toLowerCase() == 'a'
			|| element.tagName.toLowerCase() == 'area') {
			var eventLabel = (_gaTrackClicks.getTextContent(element) != "")? _gaTrackClicks.trimAndClean(_gaTrackClicks.getTextContent(element)) + " " : "";
			eventLabel += _gaTrackClicks.trimAndClean(element.href);
			$(element).click(new Function(_gaTrackClicks.pageTrackerVarName + ".push(['uottawa._trackEvent','" + eventCategory + "', '" + eventAction + "', '" + eventLabel + "']);"));

		} else {
			var links = element.getElementsByTagName('a');
			for (j=0; j<links.length; j++) {
				var eventLabel = (_gaTrackClicks.getTextContent(links[j]) != "")? _gaTrackClicks.trimAndClean(_gaTrackClicks.getTextContent(links[j])) + " " : "";
				eventLabel += _gaTrackClicks.trimAndClean(links[j].href);
				var eventTrackCall = _gaTrackClicks.pageTrackerVarName + ".push(['uottawa._trackEvent','" + eventCategory + "', '" + eventAction + "', '" + eventLabel + "']);";
				$(links[j]).click(new Function(eventTrackCall));
				eventLabel = "";
			}
			var imagemap_areas = element.getElementsByTagName('area');
			for (j=0; j<imagemap_areas.length; j++) {
				var eventLabel = (imagemap_areas[j].getAttribute('alt') && imagemap_areas[j].getAttribute('alt') != "")? _gaTrackClicks.trimAndClean(imagemap_areas[j].getAttribute('alt')) + " " : "";
				eventLabel += _gaTrackClicks.trimAndClean(imagemap_areas[j].href);
				$(imagemap_areas[j]).click(new Function(_gaTrackClicks.pageTrackerVarName + ".push(['uottawa._trackEvent','" + eventCategory + "', '" + eventAction + "', '" + eventLabel + "']);"));
			}
		}
	},
 
 	/**
 	*  Used to trim out any whitespace surrounding the links / labels
 	*  Taken from http://www.webtoolkit.info/
 	**/
 	trim : function (str, chars) {
 		return _gaTrackClicks.ltrim(_gaTrackClicks.rtrim(str, chars), chars);
 	},
 
 	ltrim : function (str, chars) {
 		chars = chars || "\\s";
 		return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
 	},
 
 	rtrim : function (str, chars) {
 		chars = chars || "\\s";
 		return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
 	},
 
 	/**
 	 * Trims whitespace around a string, and escapes ', ", (, and )
 	 */
 	trimAndClean : function (text) {
 		text = _gaTrackClicks.trim(text);
 		text = text.replace(/'/g, "\\'");
 		text = text.replace(/"/g, '\\"');
 		text = text.replace(/\(/g, ' '); // remove parentheses
 		text = text.replace(/\)/g, ' '); // remove parentheses
 		text = text.replace(/\s+/g, ' '); // remove extra whitespaces
 		return text;
 	},
 
 	/**
 	 * Gets the text content of the specified element.
 	 * @param element {HTMLElement} The html element
 	 * @return {String} The string content of the specified element.
 	 * source: http://dandean.com/category/category/javascript/
 	 */
 	getTextContent : function (element) {
 		if (typeof element.textContent != "undefined") {
 			return element.textContent;
 		}
 		return element.innerText;
 	}
}