---
title: "IE8 - Version Targeting"
date: "2008-01-24"
tags:
  - "engineering"
layout: layouts/post.njk
---

The current hot topic in the world of web development is [IE8 and its version targeting](http://www.webstandards.org/2008/01/22/microsofts-version-targeting-proposal/), [Eric Meyer's article on A List Apart](http://alistapart.com/articles/fromswitchestotargets) and [Aaron Gustafson's Beyond DOCTYPE](http://alistapart.com/articles/beyondDOCTYPE). I've commenting all over the place about this, so I thought I'd consolidate all the comments into a blog post, and maybe elaborate a little.

This is the META tag IE wants you to use:

_< meta content="IE=8" http-equiv="X-UA-Compatible" />_

It basically tells the browsers that you want to use standards available for IE8 when rendering your page. If you don't use it, the default rendering engine will (as of right now) be IE7. As an added feature, you can also set the tag to:

_< meta content="IE=edge" http-equiv="X-UA-Compatible" />_

for the latest version of IE standards.

There's a lot of talk about how this tag will hurt [progressive enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement) in relation to CSS and JavaScript. But elements such as [Microformats](http://en.wikipedia.org/wiki/Microformats) should be unaffected, as it just deals with current XHTML elements.

> It has to be realized that this may well be the only way for IE to advance its standards support in a reasonable time frame, or at all. Version targets let them avoid breaking existing sites, especially intranet sites, while fixing and adding their DOM, CSS, and other implementations. That has to be understood and accepted if the discussion is to be anything more than people talking past each other. Within the world of IE, they must have a way to uphold backwards compatibility with sites developed under older versions of IE.

That was a section, from [Eric Meyer's post yesterday](http://meyerweb.com/eric/thoughts/2008/01/23/version-two/)

I think the only thing about this that irritates me is that, right now, we have to do all these special things for IE, add all these little extra pieces of code (whether it be browser detection, CSS hacks, conditional comments, etc). And now here's yet another line of code to put in.

This is all fine, but I think the key to this not causing an uproar is publicity since the default rendering will be for IE7. If it defaulted to "edge" then it wouldn't matter if no one new about this. If the word doesn't get out enough (it apparently seems to be getting out just fine) then it will just cause more and more hacks to come out of the woodwork.

**For example:** IE stand alone versions are kinda crappy, I run an IE6 stand alone, it's pretty unstable and you have to edit the registry to get conditional comments to work. So, let's say a developer is running IE v10 and for some reason doesn't add in this _meta_ tag and it defaults to an IE7 rendering, but this person doesn't have IE7, they're running IE v10, so their site looks messed up pretty bad. what can they do? They can use hacks and conditional comments to make it look right, as they see it.

I have a feeling that this sort of thing will happen quite a bit unless Microsoft changes the default to "edge", maybe builds in a soft error message or makes sure developers are well aware of this tag.

I’m unclear on why Microsoft feels like they need to re-invent to wheel when they release a browser (using Trident and now a new rendering engine). Why don’t they just use Gecko or Webkit to really create some consistency across browsers. Maybe they have a financial obligation to fight open source with every fiber of their being… I don’t know.

Since I had some time to mull over all this stuff, the version targeting seems like it actually does have a valuable place. Mainly when developing a site for a client. Since a lot of client sites (that I've done) are just basically for marketing and they don't really care to integrate a lot of extra features it seems logical to lock something like that into a browser version if it's just going to sit around anyways.

Where I think version targeting would be a bad this is for sites that actually have a web team behind them. In my experiences I've done my most innovative stuff when a site breaks in IE.

So I think that's my **official stance on the whole matter**. I like it for websites that will essentially go untouched for extended periods of time.

**Related articles:**

- [Version Targeting For IE8, Developer Wars](http://www.unintentionallyblank.co.uk/2008/01/23/version-targeting-for-ie8-developer-wars-my-thoughts/)
- [Version 2 from Eric Meyer](http://meyerweb.com/eric/thoughts/2008/01/23/version-two/)
- [From Switches to Targets: A Standardista's Journey](http://alistapart.com/articles/fromswitchestotargets/)
- [Beyond DOCTYPE: Web Standards, Forward Compatibility, and IE8](http://alistapart.com/articles/beyondDOCTYPE)
- [Microsoft’s Version Targeting Proposal](http://www.webstandards.org/2008/01/22/microsofts-version-targeting-proposal/)

with ease, tim
