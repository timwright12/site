---
title: "Framing an Image"
date: "2009-02-09"
categories: 
  - "engineering"
tags: 
  - "css"
---

![article banner](images/framing-an-image.jpg)

I'm not sure exactly how well known it is, but you can put a background image on any HTML element... even an image. I don't think I've ever seen it done on a live site before, but it can be very useful for creating an image template for repeated use; without having to do a ton of photo editing. Like in a portfolio or image gallery.

The goal of this post is to show how you can display a decorative frame around an image with minimal markup (just your img element, and maybe a class).

[View Demo](http://www.csskarma.com/articles/examples/background-image/)

The first thing I like to do when doing any serious CSS for an image is set the `display` to `block`. This allows us to do a little more with it since inline elements do have some limitations on them. So let's do that:

##### CSS

```
img{
display:block;
}
```

Next, we set our background image to the `img`. I chose a polaroid

##### CSS

```
img{
display:block;
background:url(polaroid.png);
}
```

Then set our padding accordingly so the background image shows through, I also floated it left, for some reason.

##### CSS

```
img{
display:block;
background:url(polaroid.png);
padding:19px 25px 80px 17px;
float:left;
}
```

And there you have it, a quick and easy way to add some \*pop\* to images on your site.

![show padding](images/dog_polaroid.jpg)

[View Demo](http://www.csskarma.com/articles/examples/background-image/)
