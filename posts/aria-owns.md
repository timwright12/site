---
title: "Upgrading DOM Hierarchy for Accessibility with Aria-owns"
date: "2017-10-15"
tags:
  - "accessibility"
layout: layouts/post.njk
---

For the past couple weeks I've been working on accessibility audits and upgrades to a client website. Most of the updates were pretty straightforward, but I wanted to call out a specific item that allowed me to dive deeper into an aria attribute I really hadn't used before: [**aria-owns**](http://oaa-accessibility.org/example/42/).

The aria-owns attribute is a way to programmatically assign hierarchy to a document when that hierarchy can't be communicated with the HTML structure alone. My initial reaction when I realized I needed something like this was that the HTML should have been connected in the first place, but for whatever reason (design, business, admin UX goals) the navigation menu was set up in two separate areas like this:

```
<nav role="navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<!-- Hierarchically, this is sub navigation -->
<nav role="navigation">
  <ul>
    <li><a href="/about/ir">Investor Relations</a></li>
    <li><a href="/about/board">Board of Directors</a></li>
  </ul>
</nav>
```

The first section is the parent and the second section is the children of one of the parents (BUT WHICH ONE?!?!). The elements are visually connected, but there's nothing under the hood to tell what's what. That's where aria-owns comes in.

Reading through the hrefs, you can tell that the second navigation group should be nested in the "about" list item section. This HTML is great for the design goal of having the secondary navigation display statically under the main navigation bar, but causes some issues when we're trying to communicate to assistive technology about which parent section is related to the secondary navigation. When they're set up like this (without the design), they just look like two different navigation elements and lose some context that need to be communicated.

## Aria-Owns

I'll admit it, I could have rebuilt this entire navigation system to use the proper HTML structure, but holy crap, that would have taken forever. It would have needed a large scale revamp of the WordPress menu implementation, network menu rebuilds, client training, documentation, and a whole lot of recoding on the frontend. It definitely would have blown the budget for this project. So I wanted to try and find a way to programmatically connect the two elements.

Either that, or I would have to [move the DOM elements around with JavaScript](https://github.com/timwright12/util.move) and re-style the frontend (Not a terrible option, but I still wanted something a little less obtrusive).

I knew about attributes like, [aria-flowto](blog/changing-reading-order-page-aria-flowto/), [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute), [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute), [aria-controls](https://www.w3.org/TR/wai-aria/states_and_properties#aria-controls), and I had heard of [aria-owns](https://www.w3.org/TR/wai-aria/states_and_properties#aria-owns) (but never needed to use it). So I was pretty sure there was a combination of attributes I could use to bring these two elements together.

In reading the W3C documentation (I don't recommend doing that), I saw this within the aria-owns section:

> Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

Which is exactly what I wanted. And this paragraph is (more or less) the only information on the Web about aria-owns.

From there I started to hook up my DOM elements:

```
<nav role="navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li aria-owns="nav-sub"><a href="/about">About</a></li>
  </ul>
</nav>

<!-- Hierarchically, this is sub navigation -->
<nav role="navigation">
  <ul id="nav-sub">
    <li><a href="/about/ir">Investor Relations</a></li>
    <li><a href="/about/board">Board of Directors</a></li>
  </ul>
</nav>
```

The aria-owns attribute takes a comma separated list of ID values you want to hook up. In this case the ID of nav-sub is on what should be the children of the list item for the _about_ section which programmatically installs hierarchy where the HTML fails.

## Support

Support in assistive technology isn't great for aria-owns (kind of like it is for [aria-controls](http://www.heydonworks.com/article/aria-controls-is-poop)), so the best thing you can always do is structure your HTML with intension and meaningfulness to avoid these issues. However, if you find yourself in this situation, aria-owns is an official W3C accessibility recommendation, so support will come (eventually) and I wouldn't shy away from using it when you need to do something like this.

Sorry for ending so many sentences with a preposition.

## Further Reading

- [Using the aria-owns attribute](https://tink.uk/using-the-aria-owns-attribute/)
- [Aria-controls vs. aria-owns](https://stackoverflow.com/questions/34003530/what-is-the-difference-between-aria-owns-and-aria-controls)
- [MSDN aria-owns](https://msdn.microsoft.com/en-us/library/cc848876\(v=vs.85\).aspx"")
