---
title: "Very Movies & JavaScript Animation without jQuery"
date: "2014-03-28"
categories: 
  - "ux"
---

I've been working on a side project lately called [Very Movies](http://verymovies.com). It's a way to share Netflix movies with people (via e-mail right now). For years I've had the problem of being out at a bar, having someone tell me about a great movie they watched on Netflix only for us to drink the night away and completely forget what the movie was.

I waiting a while to see if Netflix would add this feature (seems obvious, right?), but they never did, so I built it. I called it _Very Movies_ because the domain was available and you can totally use it. It's a neat little app, I actually use it all the time.

Anyway... one of my goals for building the app was to not use jQuery. Until last week it wasn't a problem, but I found myself needing to do a controlled animation of a variable height container (the main navigation menu) ; for the amount of control I wanted it wasn't really doable with a CSS transition or animation. Determined not to use jQuery just for one small function, I built my own animate method. I modified it from a Stack overflow post I came across (I've since lost it, but will update this post if I find it). Here's the code, if you want it.

## Building the method

The method itself is pretty straight forward, I used an object as the argument (similar to the way jQuery handles things). I run a loop over the options and use a very fast setInerval to execute the style changes. I also wanted a callback function to get a little more control over the UI.

```
var Movies = {

  animate : function( options, time, callback ) {

    // set the defaults, there are none
    var defaults = {
      'elem' : null,
      'style' : null,
      'unit' : null,
      'from' : null,
      'to' : null
    };

    // cache some variables
    var start = new Date().getTime(),
        animationCallbackDelay,
        timer, step;

    // map all default settings to user defined options
    for (var i = 0; i < defaults.length; i = i + 1) {
      if( typeof options[i] === "undefined" ) {
        options[i] = defaults[i];
      }
    }

    if( !options.elem ) return;

    // start the animation interval, make it wicked fast
    timer = setInterval(function() {

      step = Math.min(1,(new Date().getTime() - start) / time);

      options.elem.style[options.style] = (options.from + step * (options.to - options.from)) + options.unit;

      if( step === 1) clearInterval(timer);

    }, 25);

    options.elem.style[options.style] = options.from + options.unit;

    // add in a callback
    if (typeof callback === 'function') {

      // make sure it doesn't execute until the animation has finished
      animationCallbackDelay = window.setTimeout(function() {
        callback.call(this)
      }, time);

    }

  } // end animate

}; // end Movies
```

## Calling the method

I only made it utilize 1 style at a time because that's all I needed and I'm not trying to rebuild jQuery, I'm trying not to use it. In this example there's an element with at id of menu and I'm animating the height from 0px to 200px.

In the callback function I'm adding a class to the body and to the menu element so my CSS can tell the menu is open.

```
// grab the target element
var menu = document.getElementById('menu');

// call the method
Movies.animate({
  'elem': menu, 
  'style': 'height',
  'unit': 'px',
  'from': 0,
  'to': 200
}, 200, function() {

  // do stuff in the callback
  menu.classList.add("is-open");
  document.getElementsByTagName('body')[0].classList.add('menu-is-open');

});
```
