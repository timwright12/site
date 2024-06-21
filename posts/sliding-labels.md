---
title: "Form Design with Sliding Labels"
date: "2010-01-19"
tags:
  - "javascript"
layout: layouts/post.njk
---

A few weeks ago I was reading an [article](http://www.lukew.com/ff/entry.asp?968) on form UI by [Luke Wroblewski](http://www.lukew.com/) of [Yahoo!](http://www.yahoo.com/). For those who aren't familiar with Luke, he ([quite literally](http://rosenfeldmedia.com/books/webforms/)) wrote the book on good form design.

In the article, one certain section about placing labels inside of form fields stood out to me:

> Because labels within fields need to go away when people are entering their answer into an input field, the context for the answer is gone. So if you suddenly forget what question you’re answering, tough luck—the label is nowhere to be found. As such, labels within inputs aren’t a good solution for long or even medium-length forms. When you’re done filling in the form, all the labels are gone! That makes it a bit hard to go back and check your answers. Luke Wroblewski

He brings up a good point. Generally speaking, you can look at a field that says "Tim Wright" and know that it was a field for your (my) name. But for long forms, yea, I do agree that you can forget some of the questions you answered.

For best practice, Luke talks about leaving your labels outside the form field so it's always available to the user. I do think it's a pretty good solution, but **I think we can get a little more creative than that**.

### Enter: Sliding Labels

After reading that article it occurred to me that there's no reason we can't have the best of both worlds. I like how inline labels look, and I see Luke's point about them disappearing as you fill out the form. But, we have jQuery, we know about progressive enhancement, and we have creative minds, so let's build something that allows us to keep the label inline, but **slide it off to the left** (or up, whichever you prefer) rather than going away on click.

#### The HTML

```
<form action="" method="post" id="info"> <h2>Contact Information</h2> <div id="name-wrap" class="slider"> <label for="name">Name</label> <input type="text" id="name" name="name"> </div><!--/#name-wrap--> <div id="email-wrap" class="slider"> <label for="email">E&ndash;mail</label> <input type="text" id="email" name="email"> </div><!--/#email-wrap--> <div id="street-wrap" class="slider"> <label for="st">Street</label> <input type="text" id="st" name="st"> </div><!--/#street-wrap--> <div id="city-wrap" class="slider"> <label for="city">City &amp; State</label> <input type="text" id="city" name="city"> </div><!--/#city-wrap--> <div id="zip-wrap" class="slider"> <label for="zip">Zip code</label> <input type="text" id="zip" name="zip"> </div><!--/#zip-wrap--> <input type="submit" id="btn" name="btn" value="submit"> </form>
```

The only necessary items to make sliding labels (as I built it) work are the wrapper element (`DIV` in my case) and applying a class of "slider" to it (you can change this easily in the JavaScript).

At this point we have a pretty basic, and ugly form

![slidinglabels no css](images/slidinglabels_nocss.png)

#### The CSS

```
body { font:12px/1.3 Arial, Sans-serif; } form { width:380px;padding:0 90px 20px;margin:auto;background:#f7f7f7;border:1px solid #ddd; } div { clear:both;position:relative;margin:0 0 10px; } label { cursor:pointer;display:block; } input[type="text"] { width:300px;border:1px solid #999;padding:5px;-moz-border-radius:4px; } input[type="text"]:focus { border-color:#777; } input[name="zip"] { width:150px; } /* submit button */ input[type="submit"] { cursor:pointer;border:1px solid #999;padding:5px;-moz-border-radius:4px;background:#eee; } input[type="submit"]:hover, input[type="submit"]:focus { border-color:#333;background:#ddd; } input[type="submit"]:active{ margin-top:1px; }
```

The only 100% necessary CSS in there is the `position:relative` on the wrapper element (`DIV`). The rest is basically cosmetic and you can mess with it as you see fit.

At this point you should have a pretty normal looking form with labels on top of their respective inputs.

![labelslider no js](images/labelslider_nojs.png)

#### The jQuery

Now for the section everyone skipped to, provided you didn't go straight to the demo (which I usually do).

```
$(function(){ $('form#info .slider label').each(function(){ var labelColor = '#999'; var restingPosition = '5px'; // style the label with JS for progressive enhancement $(this).css({ 'color' : labelColor, 'position' : 'absolute', 'top' : '6px', 'left' : restingPosition, 'display' : 'inline', 'z-index' : '99' }); // grab the input value var inputval = $(this).next('input').val(); // grab the label width, then add 5 pixels to it var labelwidth = $(this).width(); var labelmove = labelwidth + 5; //onload, check if a field is filled out, if so, move the label out of the way if(inputval !== ''){ $(this).stop().animate({ 'left':'-'+labelmove }, 1); } // if the input is empty on focus move the label to the left // if it's empty on blur, move it back $('input').focus(function(){ var label = $(this).prev('label'); var width = $(label).width(); var adjust = width + 5; var value = $(this).val(); if(value == ''){ label.stop().animate({ 'left':'-'+adjust }, 'fast'); } else { label.css({ 'left':'-'+adjust }); } }).blur(function(){ var label = $(this).prev('label'); var value = $(this).val(); if(value == ''){ label.stop().animate({ 'left':restingPosition }, 'fast'); } }); }) });
```

At this point, you should have a fully working sliding label form!

![labelslider final](images/labelslider_final.png)

Making sure everything is still usable without JavaScript is important (no matter what people say), it's just a basic principle of progressive enhancement. Believe it or not, there are still people browsing without JavaScript (blackberry users - turned off by default). So creating the interaction in layers, as we did, will help it be **past-proof**.

Try it out and let me know what you think. So far I've used it on a password change form, so definitely let me know if you find a place to use it!
