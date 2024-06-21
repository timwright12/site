---
title: "Manipulating Opacity"
date: "2008-03-05"
categories: 
  - "engineering"
tags: 
  - "moz"
  - "opacity"
  - "tips"
---

Any one who has worked with CSS opacity has, most likely run into this problem. Using:

```
div{
filter:alpha(opacity=60);
-moz-opacity:0.60;
opacity:0.60;
}
```

to make a transparent background. It works great in all browsers, but have you ever tried putting text in that div? Right, it applies the opacity to everything inside the div as well. So then you try something like this to bring the opacity level back up to nornal:

```
div h1{
filter:alpha(opacity=100);
-moz-opacity:1;
opacity:1;
}
```

That, in theory should work, but it doesn't. So then you try to up the opacity to 140 & 1.4 to try and account for the extra transparency... but that doesn't work either. So you settle on using a small opacity level to read the text or use a background image.

Thanks to a challenge issued by a friend at [Sporting News](http://www.sportingnews.com) we now have a technique, without using any extra markup, to have your opacity without dimming the "containing" text. Why is containing in quotes? Well, you'll see.

First off, here's the [live example](http://www.csskarma.com/articles/examples/opacity/)

CSS

```
body{
background:#5A6163 url(bg_floral.gif) no-repeat 0 0;
}
a#skip-link{
filter:alpha(opacity=60);
-moz-opacity:0.60;
opacity:0.60;
background:#000;
display:block;
height:8em;
margin:70px 0 0 0;
text-indent:-9999px;
}
div#branding{
position:absolute;
top:70px;
height:8em;
width:98%;
}
div#branding h1{
font-size:1.8em;
padding:.5em 0 0 .5em;
}
div#branding h1 a{
color:#fff;
text-decoration:none;
}
```

Wordpress really sucks at displaying HTML code, so you can just [view source on the live example](http://www.csskarma.com/articles/examples/opacity/).

It's very simple HTML, just a skip to content link, div called "branding" and an H1 link inside of branding. I also added some other stuff to jazz it up a bit.

Tested in FF2, IE7, IE6, Safari 3 with no errors.

_Clean code will transcend browsers_
