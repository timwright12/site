/*
	Plugin: Progressive Fade In
	Version: 1.1
	Author: Tim Wright - csskarma.com
	Call: $(elems).progressiveFadeIn({ 'speedMultiplier': ###, 'fadeInSpeed': ### });
	Options: speedMultiplier, fadeInSpeed
	URL: http://www.csskarma.com/lab/jquery.plugins/jquery.progressiveFadeIn.js
*/

(function ($) {

    "use strict";
    
    $.fn.progressiveFadeIn = function (options, callback) {
    	
        var defaults = {
            speedMultiplier : 200,
            fadeInSpeed : 500
            },
            options = $.extend(defaults, options),
            items = $(this),
            count = items.length,
            i;
        
        if (count > 0) {
            for (i = 0; i < count; i = i + 1) {
                var obj = items[i],
                    delayTimer = defaults.speedMultiplier * i;
                
                $(obj).hide().delay(delayTimer).fadeIn(defaults.fadeInSpeed);
            
            } // for
        } // if
    }; // fn

}(jQuery));