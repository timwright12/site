---
title: "Styling Your Body"
date: "2008-06-02"
categories: 
  - "engineering"
tags: 
  - "css"
  - "design"
  - "tips"
---

Diving into the depths of CSS involves much more than just mastering selectors, properties and semantic (X)HTML, it has a lot to do with knowing when you need extra elements (`span`, `div`, etc). What do I mean?

Since CSS layouts have exploded into the mainstream of web design there have been few designer/developer types who can say they haven't seen id="wrap" or id="container"; in fact, most of have been using it for years and it's a bit of a standard now. Meanwhile we all seem to forget that there's a lovely element we rarely use... `html`, the proud parent of `body`. All parents like to see their children succeed, but `html` has been depressed for some time now. Why? Because it's child isn't being put in in the 4th quarter, it's being taken out in the 8th inning, not being used to it's fullest potential because of this smug little punk on the block called "container" (or "wrap", for short).

No one forgets that `body` and `html` are there, they just forget they're a stylable elements, **everything** can be manipulated with CSS, ([remember?](http://www.csskarma.com/lab/csstable/)). So rather than doing something like this:

```
#container{
width:60em;
margin:0 auto;
}
```

Try filling out your `body` like this:

```
body{
text-align:left;
width:60em;
margin:0 auto;
background:#fff;
}
```

And then style that proud parent `html` (at the top of the style sheet)

```
html{
background:#ccc;
text-align:center;
}
```

There you go, you cut just down on an extra div you didn't need. This technique will work in 95% of the web sites out there. The only case it wouldn't fly is if you need to put content spanning the whole top of the browser window (with a center aligned page). With 95% of page load time happening on the front end, every character you can shave off counts. Since there's very little semantic benefit to a having `html body div#wrap`, it's usually an easy choice to cut out.

Not only is it an easy choice the drop, but it's a seemless integration. You essentially move all the layout properties up a level (move `#wrap` to `body` and `body` to `html`). There's usually little to no change for the user and few things to fix.
