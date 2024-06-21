---
title: "Quick Tip #2  - Bringing Back Search with jQuery"
date: "2009-06-29"
tags:
  - "engineering"
layout: layouts/post.njk
---

This is something I use on all my projects now. It's designed for a search box, but can be used with any sort of input field.

The great thing about this is that the field value "Search" will only come back onBlur if the field is empty (or doesn't say "Search"). So if you started typing something it won't erase your text, which is something that has always irritated me about search boxes.

Anyway, I've been sitting on this post for a while, but I really wanted to get it out. So here it is:

## HTML

```
<div id="search">
<form method="post" action="">
   <label for="field">search</label>
   <input type="text" id="field"/>
   <button type="submit">go</button>
</form>
</div><!--/search-->
```

## jQuery

```
$("#search input").focus( function() {
if ($(this).val()=="Search") {$(this).val("");}
});

$("#search input").blur( function() {
if ($(this).val()=="") {$(this).val("Search");}
});
```

The word "Search" in the jQuery is case sensitive, so watch out for that.
