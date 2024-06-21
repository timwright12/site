---
title: "Centering an Image"
date: "2009-01-06"
tags:
  - "engineering"
layout: layouts/post.njk
---

`<div align="center">` is [deprecated](http://webdesign.about.com/od/htmltags/a/bltags_deprctag.htm).

It's been deprecated for a long time, but it keeps creeping up for things like center aligning an image.

Another popular way to do this is to wrap an extra `div` around the image and set the text alignment to center. This creates (as you might know, I hate), an added layer of XHTML code that you really don't need.

```
.image-wrap{
text-align:center;
}
```

This goes back to one of my pet peeves about using too many `divs`. Here's what I came up with:

##### CSS

```
#content-main img{
display:block;
width:auto;
margin:auto;
}
```

That will center your image, and of course you can add a class in if you don't want all your images centered.

Just a quick tip today, as I'm getting back into the swing of things after vacation. I hope everyone had a good holiday season.
