/*
	Plugin name: Equal Height
	Version: 1.1.3
	Author: Tim Wright - csskarma.com
	Call: $('.col, .summary, .item').equalHeight();
*/

(function ($) {

    "use strict";

    $.fn.equalHeight = function (callback) {  

        // store some variable
        var tallest = 0,
            items = $(this),
            count = items.length,
            i;

        if (count > 0) {
            // get the tallest one
            for (i = 0; i < count; i = i + 1) {
	         // in ES6: items.forEach( item => { console.log( item ); } );
			
                var obj = items[i],
                    thisHeight = obj.offsetHeight;
                
                if (thisHeight > tallest) {
                    var tallest = thisHeight;
                }
            } // for
		    
		    // set all items to the same height
            items.height(tallest);
        } // if
	    
        // accept callback functions
        if (typeof callback === 'function') {
            callback.call(this);
        }

    }; // fn
	
})(jQuery);