---
title: "Keeping Up with Accessibility"
date: "2017-01-07"
tags:
  - "accessibility"
layout: layouts/post.njk
---

A couple years ago for [Global Accessibility Awareness Day](http://globalaccessibilityawarenessday.org/) I sat down with some of the great accessibility minds around an recorded them explaining [why they thought accessibility was important](https://vimeo.com/album/3400106/). I got a chance to chat with some amazing people like [Sarah Horton](https://twitter.com/gradualclearing), [Brad Frost](https://twitter.com/brad_frost), [Larry Goldberg](https://twitter.com/larrygoldberg32), [Whitney Quesenbery,](https://twitter.com/whitneyq) and many more.

These are some of the people I lean on when I have questions about accessibility. Some issues are solved with a conversation, some with user testing, and some with Web resources (articles, books, etc.). With that in mind I wanted to share a quick list of references I use when I need an answer to an accessibility question.

Because there aren't a lot of lightweight articles that cover many of these topics some of this documentation is pretty dense, so [grab a coffee](https://ko-fi.com/) and settle in.

## Articles & Documentation

### [WebAIM Articles](http://webaim.org/articles/)

WebAIM is a great resource for articles, blog posts and documentation when you're looking around for some information. The have write-ups on pretty much every topic you can think of.

### [WCAG Working Group](https://www.w3.org/WAI/GL/wiki/Main_Page)

WCAG stands for, "Web Content Accessibility Guidelines", this is the wiki for the working group. You can see all the goings-on here including meeting notes. This is a good resource if you're looking to get more involved with WCAG or you just want to be in the loop.

The current official accessibility guidelines are [Section 508](https://www.section508.gov/), but WCAG 2.0 (the second version of WCAG) will soon overtake them. It's widely thought that the Section 508 guidelines are out of date and poorly maintained, which is why WCAG 2.0 will soon be the standard and 508 will go away.

### [WAI-ARIA Best Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)

This is where I go whenever I need to check on how a UI element (like tabs or a modal) should act. This document is meant to be consumed by browser makers (which is why it is so dense and detailed), but there are a lot of good UX and UI guidelines in here as well. If you can stomach it, I highly recommend reading this even if it's in multiple sittings.

### [WCAG 2.0 at a Glance](https://www.w3.org/WAI/WCAG20/glance/)

The WCAG 2.0 guidelines are pretty hard to read for anyone, this makes them a little easier to consume. The basic rules are easy like, "create text alternatives," (alt text, captions, subtitles, etc.), but when you want to get into UI interactions and asynchronous communication this is a good place to check up on to make sure everything is correct.

### [Simply Accessible Blog](http://simplyaccessible.com/articles/)

Simply Accessible is a consultancy run by [Derek Featherstone](http://twitter.com/feather). Derek is one of the pioneers in the accessibility community; I've followed his work for years. What sets Simply Accessible apart from others who implement an accessible Web is that they don't follow the W3C spec 100%, they follow it where it make sense based on user testing. This is an interesting blog because you get to see where the spec writers might be degrading an experience and how to improve it.

## Books

### [A Web For Everyone](http://rosenfeldmedia.com/books/a-web-for-everyone/)

There aren't very many books dedicated to accessibility but, _A Web for Everyone_ by Whitney Quesenbery and Sarah Horton is a great one. They take a non-technical angle on a topic that is typically thought of a very technical. Sarah and Whitney talk about universal design concepts that elevate the experience for all users, not just those with disabilities. The book was so good in fact, that [I had them both on my old podcast](http://www.freshtilledsoil.com/experience-dev-universal-access/) to talk about universal access.

## Tools

### [HTML Code Sniffer](http://squizlabs.github.io/HTML_CodeSniffer/)

This is probably my favorite tool for accessibility testing. It runs in a bookmarklet and will put any HTML document up against: Section 508,WCAG Level A, WCAG Level AA, or WCAG Level AAA. It will run color contrast checks for you as well to make sure all the colors in your design have the proper contrast ratio. I love this tool, it's great for snapshot automated testing.

### [VoiceOver](http://www.apple.com/accessibility/osx/voiceover/)

VoiceOver is the accessibility software that ships with Mac and iOS. This is great for checking ARIA states and making sure everything in your project can be accessed with a screen reader. It's kind of hard to use, but there are good tutorials built right into the OS to learn from.

### [Keyboard Accessibility](http://webaim.org/techniques/keyboard/)

This is just a check I run to make sure I can use an interface without a mouse. **Tab** through a page, if there's something you can't get to, then build it so you can. Lots of people don't use a mouse for various reasons, so we need to make sure they can get to every piece of a UI however they need to.
