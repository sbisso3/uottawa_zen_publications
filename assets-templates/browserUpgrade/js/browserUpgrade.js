(function($) {
$(document).ready(function(){
	
	// IE6 || IE7
	if((navigator.userAgent.indexOf("MSIE 6.0") != -1) || (navigator.userAgent.indexOf("MSIE 7.0") != -1)){
		
		block = '<div id="browser-upgrade">';
		if((ut.lang()).toLowerCase() == "en") { 
			block += '<p>You are using an outdated version of your browser. For a safer, faster browser experience please upgrade your browser. <input value="Upgrade Now" type="button" onclick="window.location.href=\'http://windows.microsoft.com/en-CA/internet-explorer/products/ie/home?ocid=ie6_countdown_bannercode\';" /></p>';
		} else {
			block += '<p>Vous utilisez une version obsolète de votre navigateur. Pour profiter d\'une navigation plus rapide et plus sécurisée, effectuez une mise à niveau de votre navigateur. <input value="Mise à niveau" type="button" onclick="window.location.href=\'http://windows.microsoft.com/fr-CA/internet-explorer/products/ie/home?ocid=ie6_countdown_bannercode\';" /></p>';
		}
		block += '</div>';
		
		$('#section-header').before(block);
	}
	
	//Firefox/2.0

});
}(jQuery));