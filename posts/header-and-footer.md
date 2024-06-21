---
title: "Header and Footer in the Semantic Web"
date: "2008-11-21"
tags:
  - "engineering"
layout: layouts/post.njk
---

![atricle banner](images/branding-and-header.jpg)

A couple years ago I read through [Andy Clarke's Transcending CSS](http://transcendingcss.com/) and it really made me think about semantic naming conventions I had otherwise taken for granted. By now, most of us (at least people reading this blog) practice using semantic markup and meaningful class & ID names. But can we do it better? Probably. There's _always_ room for improvement.

Andy's book was (still is) filled with many techniques that I hadn't seen before. I had fallen into the trap that many designer/developers fall into. I was doing things just because I had seen other others doing it and assumed it was the best way. This is why most people still use `<div id="wrap">` even though it's usually unnecessary.

I'm mainly talking about semantic `div` naming. Specifically "header" & "footer". I've had a while to think through this, so bear with me here.

#### Basic semantics

The basis of the semantic web is to look at content first, and then decide which element to use, based on that content. Using a list for navigation rather than a paragraph with line breaks (for a brutal example), using an `h2` instead of regular bold text, things like that.

Semantic elements extend beyond just XHTML, it extends into your class and ID names. We've all seen articles telling us to use names like "error", rather than "red" and "highlight" rather than "yellow". These names are more meaningful and leave room in the future changing the CSS behind them, while still keeping them meaningful.

The same principle should be applied to ID naming, but for some reason, it hasn't fully taken off. We're using names like "header", "footer", and "sidebar" in our every day development. On the surface they're fine, but in the long run they can really hinder future design changes.

What information can be gathered from these `div` names?

##### Header

From the name alone, you can tell that this element is at the top of the page. From experience we can assume it also contains some kind of information about the site (name, logo, tagline, etc.). But it's definitely at the top of the page.

##### Footer

Footer tells us this is located at the bottom of the page.

##### Sidebar

The name "sidebar" contains no information about what it contains, just that it runs along, either the right or left side of the page.

##### The popular way

```
<div id="header"></div>
<div id="nav"></div>
<div id="main"></div>
<div id="sidebar"></div>
<div id="footer"></div>
```

What if you want to put the logo somewhere else? Maybe your copyright and contact information isn't stylish at the bottom of the page anymore? Or you just want to move that sidebar where your "footer" is? You'll have to rework the markup, move code around and waste time. This takes a valuable function of out CSS, you should be able to completely redesign the layout of your site without touching the markup (unless you want to add stuff, of course). **That's the true power of CSS.**

#### Advanced Semantics

Andy Clarke proposed that we actually look at the content contained in these `divs` before give them labels and lock them into a role that could change in the future.

##### Andy's suggestion

```
<div id="branding"></div>
<div id="nav"></div>
<div id="content">
  <div id="content_main"></div>
  <div id="content_sub"></div>
</div>
<div id="site_info"></div>
```

##### My edits

I've made some suggested changes to this code, I'll get into the why of that in a little while, but for now, here's how I changed it:

```
<div id="branding"></div><!--/branding-->
<div id="nav"></div><!--/nav-->
<div id="content">
  <div id="content-main"></div><!--/content-main-->
  <div id="content-sub"></div><!--/content-sub-->
</div><!--/content-->
<div id="site-info"></div><!--/site-info-->
```

What information can we gather from these `div` names? (Let's just look at the 3 we're talking about)

##### Branding

Logo, tagline, topics, information and graphics that brand this as an individual can be found in a `div` named "branding". Best of all, it gives no positioning–relevant information, so in the future (or present) this area can be moved and modified in any way. As long as the content stays meaningful to branding information (which is not usually something that changes in a redesign/realignment), all will be well on the web.

##### Content-sub

This is old "sidebar"; "content-sub" is labeled as secondary content, it can be positioned anywhere, and will most likely continue to be secondary information in relation to "content-main". And both are contained in a `div` labeled as "content". You can always add more elements in there like "content-level-three" to accommodate a growing site. But, I find that "main" and "sub" usually cover everything.

This will clean up your style sheet as well:

```
#content{}
#content-main{}
#content-sub{}
```

##### Site-info

"Site-info" replaces the old "footer". The footer usually contains content about the site: archives, copyright, maybe a contact link, etc. And there's no rule that says that information needs to be at the bottom of the page (there isn't, I checked). It's fine if it's there, that's where mine is, but in the future if you want to move it the `div` name will stay semantic and meaningful.

#### The changes I made

I made some changes to Andy's code for a few reasons:

- I can never leave well enough alone.
- I always close out my divs with a comment telling me which div got closed so there's no confusion in the future.
- **The underscores**: I switched out the underscores with dashes because I came across an article about [using underscores in CSS](http://devedge-temp.mozilla.org/viewsource/2001/css-underscores/).

In old browsers the underscore in ID and class names had to be escaped like:

```
p.urgent\_note {color: maroon;}
```

Or there can be some bad layout problems. Now, this is a big "Who give a crap" in today's web since no one uses these old browsers anymore, but I see it as a small change to my CSS to make it slightly more degradable just in case some strange user comes by. And it's really no extra work to do this, which makes it even better.

#### Closing

I've been using this technique for a while now and I love it. When I did my last redesign, it was just a straight style sheet swap. I don't know if anyone remembers what that looked like, but this is totally different. It was very simple, fast and I hope some readers out there give it a try.

Thoughts? Want to tell me I'm wrong? I'd love to here it.
