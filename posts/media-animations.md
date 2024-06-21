---
title: "Media Query Transition Animations"
date: "2011-05-11"
categories: 
  - "design"
tags: 
  - "animation"
  - "css3"
  - "quick-tip"
---

I've been doing a lot with [Responsive Design](http://www.alistapart.com/articles/responsive-web-design/), Media Queries (yea, they're different), and light transitions with CSS 3 lately and something kind of cool happened. By sheer accident I put a transition inside a media query, resized my window and watch the padding on my `<article>` element animate to it's new value.

It was way cool. check out a quick [demo I threw together](http://www.csskarma.com/lab/media-animations/).

I inserted 2 breakpoints in the demo. One at 800px and another at 480px, so you should see the design adjust twice.

## The CSS

```
header h1 a,
article h1,
article h2,
article{
     -moz-transition: all .5s linear;
     -webkit-transition: all .5s linear;
     transition: all .5s linear;
}
```

Put that in with the base CSS (not the media query) and you'll get a nice animation effect as you resize the browser window.

You can't animate all the properties, but things like: color, margin, padding, color, font-size, etc are all fair game. I've mostly been using transitions for softening hover effect lately, but I think this, if tastefully done, can be a nice hidden (and light weight) gem.
