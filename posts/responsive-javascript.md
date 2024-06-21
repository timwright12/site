---
title: "How I Handle Responsive JavaScript"
date: "2014-02-17"
tags:
  - "engineering"
layout: layouts/post.njk
---

I recently read a site (post?) about [learning responsive JavaScript](http://www.responsivejavascript.com/) that involved using the `window.matchMedia` object to detect a screen width. It's an OK method, but there are a couple holes and optimizations I wanted to talk about and also show my preferred method for dealing with the responsive JavaScript problem we have. I'm not going to address the "mobile" context mentioned in the write up because I'll just sound bitchy ranting about how how small screen isn't mobile. Anywho...

## Using matchMedia

Using the matchMedia object looks like this:

```
var breakpoint = window.matchMedia('(max-width:600px)');

breakPoint.addEventListener('resize', function(e){
  if(e.matches) {
    // we have a matching width, so do things
  }
});
```

What I don't really dig about this method is that Media Query support goes back to IE9, but support for matchMedia begins at IE10. That leaves you with a weird interaction gap in IE9 that needs to be polyfilled with more JavaScript. More page weight, means a slightly degraded experience. (Sidenote: check out [Designing for Performance](https://speakerdeck.com/lara/design-for-performance))

It also breaks the progressive enhancement model by embedding media queries into the CSS. I'm not into that. Chances are that your Responsive JavaScript will have to trigger at the same time as your normal breakpoints. For that reason, I like keeping them together.

## Alternative: Naming your media query

About a year and a half ago, Jeremy Keith wrote a post about [Conditional CSS](http://adactio.com/journal/5429/) and using pseudo elements in CSS to communicate to JavaScript via the DOM. I use this method and I really like it. Here's some code I modified from Jeremy's post:

### CSS

```
body:before {
  content: "largescreen";
}

@media screen and (max-width: 600px) {
  body:before {
    content: "smallscreen"
  }
}
```

### JavScript

```
var size = window.getComputedStyle(document.body,':before').getPropertyValue('content');

// string search for "largescreen"
if (size.indexOf("largescreen") !=-1) {
  // large screen JS
} else {
  // small screen JS
}
```

You also have to run that inside a resize event, just like `matchMedia`.

Accessing the document is one of the more resource intensive things to do with JavaScript so you want to make sure all your responsive JS is in the same area and cache the variables where you can, but I really like this method because you don't have to maintain your major breakpoints in more than one place.
