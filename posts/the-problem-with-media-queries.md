---
title: "The Problem with Media Queries"
date: "2012-01-31"
categories: 
  - "ux"
tags: 
  - "css"
  - "media"
  - "mobile"
---

I finally got around to reading the new article on A List Apart this morning , "[A Pixel Identity Crisis](http://www.alistapart.com/articles/a-pixel-identity-crisis/)". It basically talks about how some pixels are defined differently than others (based on the "reference pixel"), so there can be variations in how 2 devices (Galaxy  Tab and Kindle Fire given as examples in the article) with the exact same dimensions can display responsive content differently. A solution was proposed in the form of this absurdly complex media query:

```
@media screen and (device-pixel-ratio: 1.5) and (device-width: 683px) and (orientation: landscape), screen and (device-pixel-ratio: 1.5) and (device-width: 400px) and (orientation: portrait) { /* css */ }
```

And that's not even the whole thing, you still need vendor prefixes to get it to work. **This brings me to my point.**

This intense form of a media query is getting dangerously close to targeting a specific device, which defeats the entire point of responsive design. It's all about setting breakpoints, but if your breakpoints get too granular, it's no better than targeting an iPhone directly. We have starting points because you need to have starting points, something like 800px, 480px, 320px, right? Typical breakpoints for your media queries. We're missing the mark a little with using them out of the box like that though.

_Not to point blame at any boilerplates, I think they're actually really great to get you started, but when you use them out of the box, you start to get in trouble. They're meant to be customized. -- and wow, at least change that pink highlight._

The intention of breakpoints is to identify points where your design gets a little messed up, let's say at 600px wide your design gets too cramped. In that case your first breakpoint would be at 600px. It's different for every design. If you follow that basic model, you don't have to worry about what a reference pixel for a device is. If the resolution for a device is 800px and your breakpoint is at 600px, it will look at intended. **Don't worry so much, you're already doing it right**.

As some may know, I've been writing a JavaScript book and I've been studying a lot of the basic history of the Web. Since its early conception we (as a community) have been hacking things together to deal with a device market that is struggling to get its sea legs. Normally what happens is that we'll have a period of instability followed by developers & designers scrambling to rethink what they do and hacking something together to make it 100%, then it will get standardized and all the work you did to take a project from 95% to 100% is seen as a pile of dirty hacks (anyone remember the war between JavaScript and jScript?).

_Now we use something called [feature detection](http://www.modernizr.com/), which is **a million times better**._

When you work in the browser vs. on the server there are certain things you can't control and you need to manage bottlenecks in the process rather than forcing control over an uncontrollable situation. The devices will do what they'll do and if you try and plan for them all you'll:

1. Go insane
2. Go broke purchasing all the devices
3. Create so much extra code that it will be unmanageable
4. Bog down performance
5. Ruin your JavaScript
6. Get to a point where it's more efficient to detect for a device and serve up new markup on the server (**and nobody wants crap that again**)

What the moral of the story? I don't know, **stop over-thinking everything**. It's great to explore new stuff, but even better when you can recognize when new stuff isn't that much better than the old stuff.
