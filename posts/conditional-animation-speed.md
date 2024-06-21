---
title: "Conditional Animation Speed in jQuery"
date: "2010-01-08"
tags:
  - "design"
layout: layouts/post.njk
---


For years (and by "years", I most likely mean "the years since I started using jQuery... maybe 2"), there's been one aspect of jQuery that's bugged the crap out of me, the animation speed.

We've all probably seen the problem that happens in many drop down menus of varying height. We set `slideDown(300)` (or whatever you set it to) on all the submenus and leave like that. Inevitably, menus grow and shrink based on the content and we get this weird and mildly annoying behavior of really fast moving tall menus vs. shorter menus that move painfully slow just because there's not much content in there.

This problem stems from where we set the speed of the animation; the value isn't actually a speed, it's how long it takes (in milliseconds, I think) for the animation to finish. So you can see why you get varying behaviors based on the element height.

It's true, that you can use the built-in speed values like "fast" and "slow", but if you want more fine-grained control over your animation, you'll have to use a value.

### Problem Child [∞](http://us.imdb.com/title/tt0100419/)

This is what our problem menu looks like all collapsed, just 2 clickable headings (`h2`) that will slide open to expose content (`p`)

![animation collapsed](images/animation_collapsed.png)

Normally our jQuery would look something like this:

```
$(function(){

$('h2').toggle(function(){
    /* get the next element */
    var next_element = $(this).next();

    /* open it  if it's closed */
    next_element.slideDown(500);
},function(){
    /* get the next element again */
    var next_element = $(this).next();

    /* close it if it's open */
    next_element.slideUp(500);
});

});
```

Note: just example code, I didn't check to see if it actually works

This is our menu fully expanded. As you can see, the first item has a lot more content then the second. Using the code above will make menu #1 move noticeably faster than menu #2; which, to me, creates an odd user experience. Because you're like "Why's is moving so slow?"

![animation expanded](images/animation_expanded.png)

So let's see if we can't fix that.

### Ben Healy (Solution) [∞](http://us.imdb.com/name/nm0000615/)

What we're looking to do here is **get the height** of each collapsed item, do some JS math, and set a speed (animation time) value based on the height.

#### jQuery functions we'll need

- [next()](http://docs.jquery.com/Traversing/next)
- [height()](http://docs.jquery.com/CSS/height)
- [slideDown()](http://docs.jquery.com/Effects/slideUp) / [slideUp()](http://docs.jquery.com/Effects/slideDown)

#### The Code

```
$(function(){

	/* Variables to set */
	var id = '#heightCheck';
	var click_element = 'h2';
	var height_value = '100';
	var tall_menu_speed = 400;
	var short_menu_speed = 250;

	/* System variables, probably don't change */
	var target = id +' '+ click_element;
	var menu_content = $(target).next();

	/* Hide the element after the click_element, whether it's a
	div, p, ul, whatever you choose to wrap the items in */
	menu_content.hide();

	$(target).toggle(function(){
		/* save the menu items in a variable */
		var this_menu = $(this).next();

		/* get the menu height and save it */
		var menu_height = this_menu.height();

		/* Calculate the animation speed based on the element height */
		/* if the height is greater than the height set above use the
		tall menu height */
		if(menu_height > height_value){
			var speed = tall_menu_speed;

		/* If it's smaller, use the short menu height */
		} else if(menu_height < height_value) {
			var speed = short_menu_speed;
		}

		/* slide the menu down */
		this_menu.slideDown(speed);

	},function(){
		/* this is the same but reversed to close the menu */
		var this_menu = $(this).next();
		var menu_height = $(this).next().height();

		/* Calculate the animation speed based on the element height */
		if(menu_height > height_value){
			var speed = tall_menu_speed;
		} else if(menu_height < height_value) {
			var speed = short_menu_speed;
		}
		this_menu.slideUp(speed);

	});

});
```

That should give you a little more control over the menu speed. I'm sure it needs to be tweaked based on the menu you're using, but the general concept is there, and it should work pretty well. I hope it was helpful. Let me know if you have any additions to the code or suggestions to improve it.

[View demo](/lab/animation_speed/)
