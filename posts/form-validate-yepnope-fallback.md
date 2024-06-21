---
title: "HTML 5 Form Validation with Yepnope Fallback"
date: "2011-08-04"
tag:
  - "engineering"
layout: layouts/post.njk
---

In my [last post](/blog/required-input-fallback/ "Required input fields with JS fallback") about creating a proper fallback when using the new HTML 5 form validation I mentioned using modernizr to detect for support, then creating an if statement to call the jQuery validate plugin.

One of the commentors mentioned using yepnope for this instead of loading the jQuery validation plugin by default. Since modernizr has yepnope now anyway, I thought it was a good idea. And here we are with some ne code to look at.

[View the demo](/lab/_javascript/no_require/)

### Dependencies

- [jQuery](http://www.jquery.com)
- [Modernizr (with yepnope)](http://www.modernizr.com/)
- [jQuery Validate plugin](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)

### The HTML

```
<form action="" method="post">

    <ul>
        <li>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required>
        </li>
        
        <li>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>
        </li>
    
        <li>
            <button type="submit">Submit</button>
        </li>
    </ul>
    
</form>
```

### The JS

```
(function ($) {

	// set and cache some variables, change var forms to whatever forms you want to validate
	var forms = $('form'),
		formsCount = forms.length,
		items = forms.find('input[required]'),
		count = items.length;

	// check for "required" input support with modernizr
	if (Modernizr.input.required) {

		// do something else, maybe customize the output messages?

	} else {

		// loop though each required input and set the required and type class jQuery validate needs
		for (var i = 0; i < count; i += 1) {
			var obj = items[i];
			$(obj).attr('class', 'required ' + obj.getAttribute('type')).removeAttr('required');
		};

		// after the classes are set, load in the plugin with yepnope , you can do this with Modernizr.load as well
		yepnope([{
			load: 'js/validate.js',
			complete: function () {

				// after the plugin is loaded, call the method on each form listed at the top
				for (var i = 0; i < formsCount; i += 1) {
					$(forms[i]).validate();
				}
			}
		}]);

	} // if required supported

}(jQuery));
```

I'm not really a fan of script loaders, especially when using them to load a core script file, like jQuery, but I think this is actually a pretty good use of yepnope.

I don't know about you folk(s), but I'll be using this moving forward. Any comments/corrections are obviously welcome.
