'use strict';

var $ = require('jquery');
var scrollTo = require('./scrollTo');
window.$ = $;

// panel flipping //
(function(){

	$('.panel').on('click',flip);

	function flip(){
		$(this).toggleClass('active');
	}

})();

// top nav scrolling //
(function(){

	var $links = $('.topnav__link');

	$links.on('click',scroll);

	function scroll(e) {
		e.preventDefault();
		$('body').removeClass('menu');
		var target = $(this).attr('href');
		$.scrollTo(target,500)
	}
})();

// pancake stuff //
(function(){

	var $pancake = $('.js-pancake');
	
	$pancake.on('click',activateMenu);

	function activateMenu() {
		$('body').toggleClass('menu');		
	}

})();