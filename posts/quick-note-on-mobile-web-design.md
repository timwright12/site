---
title: "Quick note on mobile web design"
date: "2008-03-31"
tags:
  - "engineering"
layout: layouts/post.njk
---

Before, you check: no, I haven't made a handheld style sheet for this site yet, hopefully in the near future.

Anyway, I've been reading up on some user interface principles in the past few months and have been talking up designing for mobile devices. First, I was looking into [Fitts's Law](http://particletree.com/features/visualizing-fittss-law/) (I've seen it spelled a few different ways, so I just chose one and went with it) which wasn't meant to apply directly to the web, but is still very useful in relation to link size, deceleration, and general usability issues. Then reading up on some [Mediatyping on Mezzoblue](http://mezzoblue.com/archives/2008/03/18/mediatyping/). And I started dumping all that stuff into the research, mainly so I could keep track of it, but also to try and centralize some of the happenings on the web and show some of the better resources I've come across, but that haven't made it to the lab yet.

I've been speaking pretty frequently about mobile design/development and there's one particular aspect of it that seems to escape a designer's mind in almost every conversation: **a finger, while far more accurate than a mouse, is around 10 times larger**. Very often, you get something like this:

![huge finger vs the iPhone](images/iphone_finger.jpg)

I have no idea who's finger that is, got it from Google images.

This seems like common sense, but you'd be surprised how many times people have trouble hitting a small link on their mobile device because it doesn't translate from the regular web browser well. It's true that the iPhone/iPod touch have that cool zooming feature, but it's still kind of a pain for browsing a site. Fitts's Law, as part of it applies to link size (target area) is very useful where it basically says that increasing the size of a small object will improve hit accuracy, but only to a point (increasing the size of a large object will not necessarily increase accuracy).

I really recommend reading up on [Fitts's Law](http://particletree.com/features/visualizing-fittss-law/). It's pretty useful, especially in a time where the future of web design is moving towards mobile devices (can the future move?).

**General handheld style media:** media="handheld"

**iPhone/iPod Touch style media**: media="only screen and (max-device-width: 480px)"

Just some stuff to remember while you're designing for the mobile web

with ease,

Tim
