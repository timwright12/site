/*
	Plugin name: Clear inputs
	Author: Tim Wright - csskarma.com
	Call: $('#searchbox, #name').clearInputs();
*/

(function($){  
	$.fn.clearInputs = function() {  
		return this.each(function() {  
			var obj = $(this),
				value = $(this).val();
			
			obj
			.focus( function() { if ($(this).val() === value) { $(this).val(""); } })
			.blur( function() { if ($(this).val() === "") { $(this).val(value); } });
		}); // each
	}; // fn
}(jQuery));