---
title: "Browser Defaults"
date: "2013-06-29"
tags:
  - "ux"
layout: layouts/post.njk
---

Overwriting browser default behaviors creates can create a very poor and confusing experience for users and can dramatically increase development time when we need to rewrite a certain feature (I'm looking at you Mr(s). I-Love-JS-Frameworks). Here are some browser default behaviors you should leave alone:

- Scroll
- Right click
- The URL bar
- The back/forward button
- The spacebar (or certain key combinations)
- Tab index

Hijacking a request with Ajax is a different story, but when you do something like rewriting how scrolling works just to pin something to the top of the screen on a phone (because iOS freezes the DOM onScroll), it breaks native experience conventions (like tapping the time to scroll to top) that users are used to. Any experience enhancement added by pinning a heading to the top of the screen is quickly cancelled out by the slightly different scrolling acceleration, because you couldn't _exactly_ match Apple (looking at you, Gmail), and the inability to scroll right to top. Try and think if it's worth the many extra hours of work to degrade an experience like that before designing it in. Oh, and just wait until iOS tweaks that scrolling algorithm and you're **way** off!

We don't _design_ with OS elements and we shouldn't _develop_ with them either.

Less is more.

Have some more defaults that should be left alone? Disagree with me? [Shoot me a tweet](http://twitter.com/csskarma), let's discuss it.

## Resources

- [Styling Select Menus with feature queries](http://www.red-team-design.com/making-html-dropdowns-not-suck)
- [Support for feature queries](http://caniuse.com/#search=@support)
