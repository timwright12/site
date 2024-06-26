---
title: "Better Hiding & Showing of Content"
date: "2014-02-13"
tags:
  - "engineering"
layout: layouts/post.njk
---

With [progressive enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement) we always try and maintain a separation between structure, style, and behavior. This usually (in really world terms) means keeping CSS out of your JavaScript and both of them out of your HTML. It's a blurry line with behavior and presentation mapping directly to CSS and JavaScript, but I think we can all agree that using inline CSS or JavaScript isn't ideal.

I'm bringing this up because it happens with [jQuery](http://jquery.com/) all the time and no one seems to talk about it. If you use `hide()`, you'll see an inline style of `display:none;` on the HTML element. If you use `show()`, you'll see `display:block;` get added. The problem compounds when animations get added into the mix (tons of inline CSS). I'm not saying don't use them, but there are better ways and you can clean up after yourself in the DOM. Here's an example for a simple hide/show.

## HTML

```html
<a href="#target1" class="trigger">Toggle Content area 1</a>
<div id="target1" class="content">the content you want to hide/show</div>
```

## CSS

```css
// with this method I get to choose how I want to hide the content
.is-hidden {
  position: absolute;
  top: -9999px;
  left: -9999px;
}

// and I can easily make it work w/o JS
.content:target {
  position: static;
}
```

## JavaScript

```
$('.trigger').on('click', function(e) {
  e.preventDefault();

  var target = $(this).attr('href'); // returns #target1

  // see if the target area is hidden
  if( $(target).hasClass('is-hidden') ) {

    // if it's hidden, remove the class, but hide it so we can softly fade it in
    $(target).removeClass('is-hidden').hide().fadeIn(250, function(){

      // because fadeIn() adds some inline CSS, let's remove it to clean up the DOM
      $(target).removeAttr('style');
    });
  } else {

    // fade out the content
    $(target)fadeOut(250, function(){

     // once it's faded out, add the class and clean up the DOM
     $(this).addClass('is-hidden').removeAttr('style');
    });
  }
});
```

## Why bother?

I've been using this method for a very long time. I prefer it because it's a cleaner separation between CSS and JavaScript and I'm not forced to use jQuery's hide/show method of `display:none` (which really isn't good for accessibility).

Of course, the `fadeIn()` method could also be moved into a CSS animation at this point to clean this up even further. You probably wouldn't even need jQuery at that point... for another day though!
