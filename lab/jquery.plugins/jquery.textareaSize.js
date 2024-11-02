/* get textarea dimensions on resize */

(function($){  

	supportsLocalStorage = function () {
		return ("localStorage" in window) && window.localStorage !== null;
	};

	$.fn.sizeId = function() {
		var thisHeight = this.height(),
			thisWidth = this.width();
		
		return [thisHeight, thisWidth];
	};
	
	$.fn.setResizeTextarea = function(options, callback) {
		
		if(supportsLocalStorage()){
		
			var defaults = {
				localStorageObj: 'textareaSize'
			}
			
			var options = $.extend(defaults, options);
		
			return this.each(function() {
				var obj = $(this);
				
				return obj.mousemove(function() {
					
					var textareaSize = { 'height': obj.sizeId()[0], 'width': obj.sizeId()[1] };
					
					localStorage.setItem(defaults.localStorageObj, JSON.stringify(textareaSize));
					
				});
			});
		
		} // if localStorage

	};
	 
})(jQuery);