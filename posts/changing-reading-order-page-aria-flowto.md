---
title: "Changing the Reading Order of a Page with ARIA Flowto"
date: "2016-11-05"
tags:
  - "ux"
layout: layouts/post.njk
---

"Why would I ever want to mess with the reading order of a page?" That was my initial thought when I first came across the [`aria-flowto`](https://www.w3.org/TR/wai-aria-practices-1.1/#relations_flowto) attribute. The purpose of this attribute is to redefine the order in which a screen reader accesses a page (when going top to bottom isn't the best way). It is especially helpful when the implied reading order doesn't match the DOM, well... let's be honest, that's really the only time it's helpful, because that's it's purpose.

If you're like me and you grew up in Web Design/Development with Progressive Enhancement and knowing the importance of hierarchy in your HTML you may ask yourself, "When will I ever intentionally shuffle the DOM order to the point where it's an accessibility problem?"

### Use Cases

The first thing that comes to my mind is [changing column layout with flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/order). Changing the order of column-based layouts within CSS can create a disconnect between the visual and physical order of a page. This is especially problematic when it is done multiple times at various breakpoints, so connecting up sections with this attribute could be beneficial.

Another, and more common, use case is on sites with heavy editorial content (like a newspaper site). It's not uncommon to place the primary focus item further down in the document so it has more visual weight. The **New York Times**, is a good example of this. The main story on [nytimes.com](http://www.nytimes.com/) is in the dead center of the page (and the only H1 represented). It has the most visual weight putting it at the top of the hierarchy, but the natural reading order has it placed after the entire first column (not ideal for a screen reader - I realize that flexbox could reorder the columns, but that's not being used in this case, so let's push that aside for now).

Let's take a look at how we might hook up these sections for The New York Times (...because we're nice people, of course).

### Implementation

Implementing `aria-flowto` only requires that each section your "flowing to" have an ID attribute that can be referenced. We have a few different options on how to put together the flow.

Our first option uses a single ID within the `aria-flowto` attribute and it should (depending on the screenreader) move the user to the next logical reading point based on the ID:

```
<h2 class="branding" aria-flowto="topnews-1>
<a href="http://www.nytimes.com/">[ The New York Times Logo Here ]</a>
</h2>

[a bunch of things that shouldn't be next]

<article class="story theme-feature" id="topnews-1">
[The main article content]
</article>
```

Our second option is to list out a series of IDs to give the user options about where they might like to go next, like this:

```
<h2 class="branding" aria-flowto="topnews-1 topnews-2">
<a href="http://www.nytimes.com/">[ The New York Times Logo Here ]</a>
</h2>

[a bunch of things that shouldn't be next]

<article class="story theme-summary lede" id="topnews-2">
[content]
</article>

<article class="story theme-feature" id="topnews-1">
[The main article content]
</article>
```

You can also daisy-chain them to create a full mapping of the reading order of a page:

```
<h2 class="branding" aria-flowto="topnews-1">
<a href="http://www.nytimes.com/">[ The New York Times Logo Here ]</a>
</h2>

[a bunch of things that shouldn't be next]

<article class="story theme-summary lede" id="topnews-2">
[content]
</article>

<article class="story theme-feature" id="topnews-1" aria-flowto="topnews-2">
[The main article content]
</article>
```

In the above example you can see `aria-flowto` is being used on multiple elements to show a screenreader where to go after it's first stop. This is nice when your layout bounces around a little bit, like The New York Times.

### Notes about `aria-flowto`

Setting proper HTMLaria-flowto won't change the tab order of your page, but it will at least give a screen reader the option to follow the visual hierarchy when it doesn't match the physical hierarchy.

Support isn't great for this, but it's still a cool thing to know about!

### References and Further Reading

- [Support Table](http://wps.pearsoned.com/WAI_ARIA_Testing/235/60309/15439152.cw/index.html)
- [Using aria-flowto](https://www.w3.org/WAI/GL/wiki/Using_aria-flowto)
- [Changing the Reading Flow](https://www.w3.org/TR/wai-aria-practices-1.1/#relations_flowto)
- [Testing aria-flowto](http://3needs.org/en/testing/code/aria-flowto.html)
- [ARIA Flowto Controls The Reading Order Of A Page](https://developer.yahoo.com/blogs/ydn/aria-flowto-controls-reading-order-page-53436.html)
