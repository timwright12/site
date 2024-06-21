---
title: "CSS Performance and OOCSS"
date: "2011-04-18"
categories: 
  - "design"
  - "engineering"
tags: 
  - "css"
  - "javascript"
  - "performance"
---

I'm in the process right now of signing on for my first speaking gig in since I moved to Boston (thanks to [@joedevon](http://twitter.com/joedevon)) and it got me thinking about performance in CSS; a topic I really haven't address in years since I started using my [single-line CSS formatting style](http://csskarma.com/css/csskarma.css). **Tip:** use spaces rather than tabbing to maintain the alignment across different software since they all treat the "tab" differently.

But I digress.

### CSS Performance

We've all seen the mass of articles & tutorials about [JavaScript performance](http://www.youtube.com/watch?v=mHtdZgou0qU), how to [optimize jQuery](http://www.alfajango.com/blog/the-difference-between-jquerys-bind-live-and-delegate/), and the [JS Performance test suite](http://jsperf.com/browse). The market is flooded, ok, we get it. JavaScript is a beast of the Web that needs to be constantly tamed. It's getting better, especially with lightning-fast JS engine , [V8](http://code.google.com/p/v8/) looming around in Chome and NodeJS.

CSS performance is constantly overshadowed by JS performance (and rightly so), but that doesn't mean we shouldn't at least take a look at it every now-and-then as a form of checks and balances for our front-end code. After all, something like [90% of the load time for a site happens on the front-end](http://developer.yahoo.com/performance/rules.html) and unless you're Google, it's probably not _all_ JavaScript (little bit of a big there, sorry fellas).

### OOCSS

Object Oriented CSS goes a little like this:

#### The CSS

```
.rounded{ border-radius:7px; }
.box-shadow{ -moz-box-shadow:0 2px 2px #333;box-shadow:0 2px 0 #333; }
.left{ float:left; }
```

#### The HTML

```
<div class="rounded box-shadow left"></div> <!--/.rounded .box-shadow .left-->
```

You're basically just separating out the individual properties you'll be using and modifying the HTML to reflect them. It's very similar to a framework model in building and styling a site.

Whether you like it or not, there it is. There's a lot of debate over this method, pluses and minuses, loves and hates. The most popular argument against it is that you're embedding style information into your HTML and semi-collapses the progressive enhancement model of structure — presentation — behavior.

It's tough for me to totally buy into OOCSS for that reason. I stick very closely to progressive enhancement while I'm building a site and really only stray from that when I'm styling for a CMS and I need classes like: "left", "right", "clear", etc., which get applied by the user later on.

So, when styling for use in a CMS, I really do think OOCSS is dead-on. I've yet to fully use it just because I question it's maintainability. But from a strictly performance stand point: **Is OOCSS better?** Yea, it's better. [It does perform better across the board](http://www.shauninman.com/archive/2008/05/05/css_qualified_selectors#comment_3940) than almost all of the CSS selectors (especially the advanced ones).

### Lastly, on performance

We can all go through ySlow and JSLint to see where we may have some front-end memory leaks but getting down to the granularity of the way we're constructing a page (OOCSS vs. non-OOCSS) is tough without running the explicit performance tests.

As the Web gets more and more advanced and browsers like Chrome pave the way for faster sites, I have no idea what the real answer for CSS performance is, but I do know that **browsers will not help you write better code**. We still need to explore the best practices, be it front-end, back-end or somewhere in the middle.

I'd like to get into this in more detail, but I have a group of tourists screaming at eachother in French next to me (trying out a new coffee shop), so I defer to the comments if you're at all interesting in the OOCSS debate.
