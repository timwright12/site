/*
	Plugin name: Text toggle
	Author: Tim Wright - csskarma.com
	Call: $('button').textToggle(callback);
	Required attribute on target element: data-toggle="your toggle text"
*/

(function ($) {

	"use strict";
   
    $.fn.textToggle = function (callback) {
    
		return this.each(function () {
		
			var obj = $(this),
				defaultText = obj.text(),
				toggleText = obj.attr('data-toggle');
		
			obj.click(function () {

				if (!obj.hasClass('active')) {
				
					if (toggleText !== undefined) {
						obj.addClass('active').text(toggleText);
					} else {
						obj.addClass('active').text('set toggle text');
					} // if
				
				} else {
				
					obj.removeClass('active').text(defaultText);
				
				} // if
				
				if (typeof callback === 'function') {
					callback.call(this);
				}

			}); // click
			
		}); // each	
		
	}; // fn
}(jQuery));