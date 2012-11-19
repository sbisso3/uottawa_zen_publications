/*******
	***	Anchor Slider by Cedric Dugas   ***
	*** Http://www.position-absolute.com ***
	
	Never have an anchor jumping your content, slide it.

	Don't forget to put an id to your anchor !
	You can use and modify this script for any project you want, but please leave this comment as credit.

	Modifications by: Marc Meszaros
*****/

jQuery.fn.anchorAnimate = function(settings) {

 	settings = jQuery.extend({
		speed : 500 // used to be: 1100
	}, settings);	
	
	return this.each(function(){
		$(this).click(function (event) {	
			event.preventDefault()
			var locationHref = window.location.href
			var elementClick = $(this).attr('href')
			
			var destination = $(elementClick).offset().top;
			$('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination}, settings.speed, function() {
				window.location.hash = elementClick
			});
		  	return false;
		})
	})
}