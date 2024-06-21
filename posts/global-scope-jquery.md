---
title: "Quick Tip on Global Scope and jQuery"
date: "2011-04-08"
categories: 
  - "design"
tags: 
  - "javascript"
  - "jquery"
---

Before launch of a new site, I always take the time to run my JavaScript through a checker. Personally, I use [JS Lint](http://jslint.com/). It's not the prettiest thing, but it works great to pick up small errors and elements of bad practice. You'll get alerts like "unused variable", "don't use eval(), it's evil", "implied global".

I find that it's best not to argue with JS Lint, just fix the problem.

One that I had encountered quite a bit while running jQuery through JS Lint was "Implied global: $".

Up until a week or two ago, I was just blowing it off, because, I mean, come on, it's a $, it kind of is global when using jQuery. For whatever reason I had a quick talk with [@akira\_x](http://twitter.com/akira_x) and we figured out what was going on and how to fix it.

The solution is actually similar to how we build jQuery plugins, but without the real plugin model, just normal site code.

### Evolution of the the document.ready

When jQuery first came out, this is how we would used document.ready as a wrapper for custom jQuery:

```
$(document).ready(function() {
// jquery code here
 });
```

Then we moved on to the short cut method:

```
$(function(){
// jquery code here
});
```

Both of these methods are technically fine, but they both leave "$" as an implied global. This may not be an issue for most of us since we only use jQuery, so who really cares is $ is global, right?

We can, however make sure (just in case, because we're all good coders) that there are no future library or JavaScript collisions by containing the scope of $ with:

```
(function($) {
	// jquery here
}(jQuery));
```

This will still cause JS Lint to throw an "implied global" alert, but it will be for "jQuery" rather than "$". Personally, I feel like it's better.
