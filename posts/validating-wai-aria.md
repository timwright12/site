---
title: "Validating with WAI-ARIA"
date: "2009-02-05"
tags:
  - "accessibility"
layout: layouts/post.njk
---

![article banner](images/validating-aria.jpg)

I was reading [Validating WAI-ARIA in HTML and XHTML](http://www.456bereastreet.com/archive/200902/validating_wai-aria_in_html_and_xhtml/). Since Roger has commenting turned off on his site now, I thought I'd write up a quick post with some thoughts on this.

For those who don't know, [ARIA](http://www.w3.org/WAI/intro/aria) is a type of accessibility for Ajax apps (Accessible Rich Internet Applications). And WAI stands for "Web Accessibility Initiative". You can assign roles to your HTML elements to make it clearer to a screen reader what exactly the purpose of an unordered list is (unordered list is just an example, you can apply roles to many elements).

The example that keeps creeping up is the [tree menu](http://www.dynamicdrive.com/dynamicindex1/navigate1.htm). Without ARIA, the tree menu is just an unordered list of links, and doesn't speak to the actual function of menu at all:

```
<ul id="treemenu">
<li>Home</li>
<li>Contact</li>
<li>Articles
	<ul>
	<li>Validating WAI ARIA</li>
	<li>Where I Get My Nws</li>
	</ul>
</li>
<li>Lab</li>
<li>Portfolio
	<ul>
	<li>CEO</li>
	<li>Globalization
		<ul>
		<li>Google Maps</li>
		<li>Google Charts</li>
		</ul>
	</li>
</ul>
</li>
<li>Research</li>
</ul>
```

This is fine, and perfectly accessible, but we can enhance it with ARIA:

```
<ul id="treemenu" role="tree">
<li role="treeitem">Home</li>
<li role="treeitem">Contact</li>
<li role="treeitem">Articles
	<ul role="group" aria-expanded="true"/>
	<li>Validating WAI ARIA</li>
	<li>Where I Get My Nws</li>
	</ul>
</li>
<li role="treeitem">Lab</li>
<li role="treeitem">Portfolio
	<ul role="group">
	<li role="treeitem">CEO</li>
	<li role="treeitem">Globalization
		<ul role="group">
		<li role="treeitem">Google Maps</li>
		<li role="treeitem">Google Charts</li>
		</ul>
	</li>
</ul>
</li>
<li role="treeitem">Research</li>
</ul>
```

A screenreader (with ARIA support) will know that this is a tree menu, where all the tree items are, and, in this case, that the tree group "Articles" is expanded.

So that's a quick overview of ARIA, there's a lot more to it, and I encourage everyone to do a little research next time you're building that killer Ajax app; because it's very cool stuff.

#### Anyway

In [Roger's article](http://www.456bereastreet.com/archive/200902/validating_wai-aria_in_html_and_xhtml/) he talks about how ARIA doesn't validate in our (X)HTML, which is true, you'll fail validation if you use ARIA.

To remedy this, he offers up a solution of creating custom DTDs. This will technically work fine, but who wants to go through the trouble of writing a custom DTD? I know I don't.

A few weeks ago I was at [CalWAC](http://www.knowbility.org/calwac/) in Long Beach, CA (a web accessibility conference) and sat in on an ARIA workshop by [James Craig](http://twitter.com/cookiecrook) from Apple. He talked about the validation problem as well. And it's very easy to get around without using a custom DTD.

Any current (up to date) screenreader & browser with ARIA support will read through the DOM and all the elements you've manipulated with JavaScript, so we can simply add these ARIA roles with some JavaScript and keep our XHTML validating just fine. And it makes perfect sense since ARIA is meant for rich internet apps that are heavy in JavaScript anyway.

I'd give this a try before creating a new custom DTD, but [don't take my word for it](http://en.wikipedia.org/wiki/Reading_Rainbow). Try it out for yourself.

#### Some more ARIA resources

- [W3C ARIA Spec](http://www.w3.org/TR/wai-aria/)
- [A List Apart: Accessible Web 2.0 Applications](http://www.alistapart.com/articles/waiaria)
- [Wikipedia](http://en.wikipedia.org/wiki/WAI-ARIA)
- [Opera's Intro to WAI ARIA](http://dev.opera.com/articles/view/introduction-to-wai-aria/)
