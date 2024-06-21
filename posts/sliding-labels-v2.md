---
title: "Sliding Labels v2 - Patch"
date: "2010-02-02"
tags:
  - "javascript"
layout: layouts/post.njk
---

Last week I wrote an article about sliding form labels that got quite a bit of attention. Many of the commenters brought up a couple good points/bug in the Sliding Label code that I wanted to address and provide a patch for:

- The sliding label was barfing out in **Safari** when auto-fill was active
- The default scripting didn't work on **textareas**

I sat down yesterday and wrote a patch/new version of sliding labels which I think addresses these two problems.

### The new jQuery

```
$(function(){
$('form#info .slider label').each(function(){
	var labelColor = '#999';
	var restingPosition = '5px';

	// style the label with JS for progressive enhancement
	$(this).css({
		'color' : labelColor,
		 	'position' : 'absolute',
	 		'top' : '6px',
			'left' : restingPosition,
			'display' : 'inline',
    		        'z-index' : '99'
	});

	var inputval = $(this).next().val();

	// grab the label width, then add 5 pixels to it
	var labelwidth = $(this).width();
	var labelmove = labelwidth + 5 +'px';

	// onload, check if a field is filled out, if so, move the label out of the way
	if(inputval !== ''){
		$(this).stop().animate({ 'left':'-'+labelmove }, 1);
	}

	// if the input is empty on focus move the label to the left
	// if it's empty on blur, move it back
	$('input, textarea').focus(function(){
		var label = $(this).prev('label');
		var width = $(label).width();
		var adjust = width + 5 + 'px';
		var value = $(this).val();

		if(value == ''){
			label.stop().animate({ 'left':'-'+adjust }, 'fast');
		} else {
			label.css({ 'left':'-'+adjust });
		}
	}).blur(function(){
		var label = $(this).prev('label');
		var value = $(this).val();

		if(value == ''){
			label.stop().animate({ 'left':restingPosition }, 'fast');
		}

	});
}); // End "each" statement
}); // End loaded jQuery
```

### Textarea HTML

The HTML for the textarea follows the same convention as the rest of the inputs, in only needing a wrapping element.

```
<div id="comment-wrap"  class="slider">
    <label for="comment">Comment</label>
    <textarea cols="53" rows="10" id="comment"></textarea>
</div><!--/#comment-wrap-->
```

There are no major changes to the plugin, just a few tweaks. If you find anymore bug, please let me know.
