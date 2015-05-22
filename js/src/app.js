'use strict';

var $ = require('jquery');
var scrollTo = require('./scrollTo');
window.$ = $;

(function(){

	$('.panel').on('click',flip);

	function flip(){
		$(this).toggleClass('active');
	}

})();

(function(){

	var $links = $('.topnav__link');

	$links.on('click',scroll);

	function scroll(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		$.scrollTo(target,500)
	}


})();