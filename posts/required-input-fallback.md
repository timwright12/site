---
title: "Required input fields with JS fallback"
date: "2011-06-15"
tags:
  - "design"
  - "engineering"
layout: layouts/post.njk
---

[View the demo](lab/html5/input.required/)

One of my favorite features of the HTML 5 forms is the "required" attribute. But unfortunately, support isn't totally there yet. So we need to create fallbacks.

It works in the modern browsers you'd expect it to (FF4, Safari, Opera, etc) but in older browsers, form validation isn't something you can really ignore (like border-radius) or you'll get flooded with all sorts of nastiness and spam. Sure we should be doing it at the server level anyway, but you still want that client side layer to add a bit of UX charm to your form.

We can still use the new required attribute effectively by creating a JavaScript fallback for unsupported browsers.

In this [demo](/lab/html5/input.required/), I'm using:

- [jQuery](http://jquery.com/)
- [jQuery Validation](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)
- [Modernizr](http://www.modernizr.com/)

### The HTML

The HTML is very basic, just an HTML5 form, with 2 inputs: text (name), and email (email). I'm using 2 form types to show how we add classes to support the [jQuery Validation](http://bassistance.de/jquery-plugins/jquery-plugin-validation/). You can, of course, use whatever validation method you'd like.

```
<form action="" method="post">
<label for="name">Name</label>
<input type="text" name="name" id="name" required>

<label for="email">Email</label>
<input type="email" name="email" id="email" required>

<button type="submit">Submit</button>
</form>
```

### The JavaScript

With the JavaScript, we first make the check for "required" support. I'm using [Modernizr](http://www.modernizr.com/) for this.

I left an open block in the if statement in case you want to do something else in there, but you could remove the `else` and replace the first line with it's inverse `if (!Modernizr.input.required) {` if you don't plan on using it for anything.

If "required" isn't supported I'm running through all the form inputs on the page with a "required" attribute, adding a class of "required", and the type of input (email, text, etc.). Setting the input type helps you use the validation plugin a little better and can also aid in styling for IE6.

**NOTE:** I'm using JavaScript's native getAttribute() method to grab the input type because jQuery's `attr('type')` returns "text" on the "email" input for some reason.

After all the appropriate classes are added, we can call the plugin. I'm doing it on each form, but targeting one specific form by it's ID value is more traditional.

```
(function ($) {

	// check for "required" input support with modernizr
	if (Modernizr.input.required) {

		// do something else

	} else {

		// parse through each required input
		$('form').find('input[required]').each(function () {

			// add a class to each required field with "required" & the input type
			// using the normal "getAttribute" method because jQuery's attr always returns "text"
			$(this).attr('class', 'required ' + this.getAttribute('type')).removeAttr('required');

		});

		// call jQuery validate plugin on each form
		$('form').each(function () {
			$(this).validate();
		});

	} // if required supported

}(jQuery));
```

Older (unsupported) browsers will use the Validation plugin, and modern browsers will use the built-in HTML 5 validation.
