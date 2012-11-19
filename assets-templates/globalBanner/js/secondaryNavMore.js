/**
 * @file secondaryNavMore.js
 * module banner
 * Add second level entry in the secondary nav
 */
(function ($) {

var quickPicks = {
	init : function() {
		//  add on click event on header
		$("#secondarynav-more > h2").click(function(e){
			$("#quickpick").siblings('h2').toggleClass('active');
			$("#quickpick").slideToggle("fast");
		});

		$('html').click(function(e){
			/* if you click on the quickpicks tool itself, do nothing */
			if($(e.target).parent().attr("id") == "secondarynav-more") return;
			if($("#quickpick").css('display') != 'none'){ 
				$("#quickpick").siblings('h2').toggleClass('active');
				$("#quickpick").slideToggle("fast"); 
			}
		});
	}
};

$(document).ready(function() {
	quickPicks.init();
});

})(jQuery);