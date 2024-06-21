---
title: "Active navigation with jQuery"
date: "2008-10-08"
categories: 
  - "engineering"
tags: 
  - "javascript"
  - "jquery"
  - "navigation"
  - "ui"
---

I was building a site last week and came across some jQuery code for active navigation. It's very simple and works real well. I'm using it on some secondary navigation and still using my [body class](http://www.csskarma.com/blog/your-body-and-you/) for the main nav.

##### Active navigation with a body class

```
body.home #nav ul li.navhome{font-weight:700;}
```

So I'm still doing that, but then for the internal page navigation, rather than loading the CSS up with long declarations for the numerous sub nav links, I used this jQuery:

##### Active vavigation with jQuery

```
$("#nav a").each(function() {
var hreflink = $(this).attr("href");
if (hreflink.toLowerCase()==location.href.toLowerCase()) {
	$(this).parent("li").addClass("selected");
}
```

#### Breaking it down

Let's try this line by line for those who want to know what's happening here.

This targets _each_ link in contained in #nav.

```
$("#nav a").each(function() {
```

This line just saves the href attribute of each #nav a to a variable. It makes the code a little cleaner and easier to work with.

```
var hreflink = $(this).attr("href");
```

This converts the href of each link in #nav, makes it lowercase (it should be already, but just in case) and checks the current URL of the page and sees if they match. Also making the current page URL lowercase.

```
if (hreflink.toLowerCase()==location.href.toLowerCase()) {
```

If the current URL matches the href for one of the links it looks to the parent element (in this case it's a list item) and adds a class of "selected" to it.

```
$(this).parent("li").addClass("selected");
```

This is just closing the function, I really don't know why I didn't include it in the above code for the purpose of this post. But no matter.

```
}
```

#### Issues

The only problem I ran into with this was that you have to make sure the you use a consistent href for pages.

##### For example

If you're sub nav contains a link to [http://www.csskarma.com/contact/](http://www.csskarma.com/contact/), you have to make sure that you don't link to [http://www.csskarma.com/index.php](http://www.csskarma.com/contact/index.php); or the active navigation won't work.

It's not a huge deal, but definitely something to be aware of, I just had to go through a site and clean up a bunch of links up because I applied this jQuery pretty late in development. You can probably rework the code to strip out the file name and extension or do it with some PHP, if you'd like.

Actually, if anyone does that, let me know and I'll update this post with the code.
