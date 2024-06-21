---
title: "A Clean SVG Fragment Identifier Polyfill for Implementing Icons"
date: "2015-11-04"
categories: 
  - "engineering"
tags: 
  - "javascript"
---

Looks can be deceiving, especially with icons on the Web. There's a lot of debate over the best way to implement those small graphics next to words in your site or application. We've gone through phases of using: individual images, [CSS Sprites](http://www.smashingmagazine.com/2009/04/the-mystery-of-css-sprites-techniques-tools-and-tutorials/), [icon fonts](https://css-tricks.com/examples/IconFont/), and now we seem to be landing on using [Scalable Vector Graphics](http://blogs.adobe.com/dreamweaver/2015/09/css-vs-svg-the-final-roundup.html) (SVGs) to get that crisp, scalable icon we all want. If you look closely, you can [watch the tides turn](https://css-tricks.com/icon-fonts-vs-svg/) in that direction.

Putting the debate about sprites vs. fonts vs. SVG aside for a moment (because, ultimately, your solution will be what's best for your individual project), there's still a lot of debate over the best way to implement SVGs as an icon. And that's why we're here today, to talk about [SVG Fragment Identifiers](http://www.broken-links.com/2012/08/14/better-svg-sprites-with-fragment-identifiers/).

## SVG Fragment Identifiers

For those not familiar, an SVG is basically a bunch of code that draws an image (a very simplified definition, I know). It can be contained inside a file with a .svg extension or it can be embedded right into the HTML inside an <svg> element (this is a linked vs. inline SVG - not here to debate which is better, they both have benefits). Inside that file (or element) you can add code to create more than one image. This is the code version of a CSS sprite (instead of an image edit tool, you can use HTML) - it's called an SVG sprite and until now, I've found them horrible to deal with.

Last week I was in a client meeting and noticed that the front-end developer on the other end of the call was using an icon syntax I hadn't really seen before:

```
<svg aria-hidden="true" class="icon icon-archive">
    <use xlink:href="img/svg-defs.svg#icon-archive"></use>
</svg>
```

**I fell in love immediately**. I had seen this usage without the image path, just the URL hash, but never with it. We geeked out for awhile about it. The hash ultimately links to an ID inside the SVG file, and you can create these by hand or generate them from a tool like [IcoMoon](https://icomoon.io/app/) (use the tool). I immediately started researching and found a roundup by [Chris Coyier](http://twitter.com/chriscoyier) on [Creating an Icon System with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/).

Buried at the bottom of that article was a similar syntax to the one above, with a note about how poor [support in Internet Explorer](http://caniuse.com/#feat=svg-fragment) is. The concept of using fragment identifiers does work in IE9+, but the syntax I fell in love with (using the image path) doesn't work in any version of Internet Explorer. I was heartbroken (and overly dramatic).

In Internet Explorer, the fragment identifier works if the SVG itself (in its entirety) is embedded into the document. I hate this solution, because it's messy. I want a nice, clean, HTML output.

## The Polyfill

After remembering that the Web is an amazing place to work, I began writing a polyfill to make this syntax work how I wanted it, in all the places I wanted it. It's up on Github, and I called it the [SVG Icon Sprite Polyfill](https://github.com/timwright12/SVG-Icon-Sprite-Polyfill/). I also modified the syntax a bit to help with accessibility:

```
<svg role="img" aria-label="Golf clubs in a bag" class="icon icon-add-to-my-bag">
    <title>Golf clubs in a bag</title>
    <use xlink:href="img/svg-defs.svg#icon-add-to-my-bag"></use>
</svg>
```

Adding a _role_ attribute and an _aria-label_ makes this icon accessible to screen readers, rather than hiding it altogether. I like that much better.

Using this syntax with the JavaScript in the polyfill _will_ make it work in Internet Explorer 9+. I stopped at IE 9 because SVGs don't work in IE8 anyway, so they would need to be again polyfilled with a PNG, JPG, or GIF. Essentially, it creates the syntax IE supports by firing off an ajax call to the SVG file, sticking it into the document, and hiding it. [Easy as pie](https://en.wikipedia.org/wiki/As_easy_as_pie).

[Download or fork the polyfill](https://github.com/timwright12/SVG-Icon-Sprite-Polyfill), and let me know what you think!

Read the original article on [the Fresh Tilled Soil blog](http://www.freshtilledsoil.com/svg-fragment-identifiers/).
