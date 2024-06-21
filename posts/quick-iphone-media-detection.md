---
title: "Quick iPhone Media Detection"
date: "2008-06-17"
tags:
  - "engineering"
layout: layouts/post.njk
---

I finally got around to reading [David Shea's post on MediaTyping](http://mezzoblue.com/archives/2008/03/18/mediatyping/) today and as I was going through it, I asked myself if all the PHP he was using was really necessary. It sure wasn't for what I wanted to do. I just wanted to detect an iPhone or iPod to test out some interfaces.

I did some digging around after that and came across a short post on [iPhoneAppr](http://www.iphoneappr.com/howto.php?id=1) about how to auto-detect a browser based on the user agent (what is essentially the browser).

#### The HTTP User Agent

When you visit a web page, your user agent changes based on the media you're using. So, right now, if you're using Firefox 2 your user agent string looks something like this:

```
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.14)
Gecko/20080404 Firefox/2.0.0.14
```

and if you're on an iPhone it will look something like this:

```
Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like
Gecko) Version/3.0 Mobile/4A102 Safari/419.3
```

As you can see, the user agent string has some key difference. The iPhone agent actually says "iPhone" in it. With this in mind we can use a neat little function built into PHP 5 called [stripos](http://us2.php.net/stripos) to search the user agent and return some code (like code to send someone to a mobile version of a web site).

Let's just get into it shall we? Here's the PHP:

```
<?php
//setting the variables
ipod = stripos($_SERVER['HTTP_USER_AGENT'],"iPod");
$iphone = stripos($_SERVER['HTTP_USER_AGENT'],"iPhone");

//detecting device
if ($ipod == true || $iphone == true){
    echo "iPhone or iPod";
    } else {
    echo "Screen";
}
?>
```

`Stripos` is a function that takes 2 arguments. The first is what you want to search (the haystack) and the second is what you want to search for (the needle). If the _needle_ is found in the _haystack_ it will return "true", and if not, it will return false. An important thing to note about `stripos` is that it's case insensitive\[edit\], so if you have some initial trouble, check your spacing and maybe try trim().

#### Trouble I had

In the PHP manual it says to use === when checking the value (which is for an exact match, true=true), but for some reason that didn't work for me so I used == (match, but not exact so true=true & true=1 for boolean values). It's usually just a spacing issue, but I'm not real sure this time. Feel free to tell me I'm wrong.

I like this, it's pretty easy, light, and useful if you just want an iPhone/iPod interface.
