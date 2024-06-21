---
title: "Twitter's JavaScript Framework, Flight"
date: "2014-02-12"
categories: 
  - "engineering"
tags: 
  - "javascript"
coverImage: "flight.png"
---

There are [way](http://angularjs.org/) [too](http://emberjs.com/) [many](http://backbonejs.org/) JavaScript frameworks out there right now, and most of them use some semblance of a programming methodology called, Model View Controller (MVC). Sorting through the crap the get to the good ones is hard enough, but we really never asked ourselves if the MVC model even belongs on the front-end. All too often we solve front-end problems with back-end solutions and theories. It causes more problems than you'd think (a topic for another time).

Applying software patterns like object oriented programming (OOP) and MVC to the front-end has its organizational benefits for sure, but that needs to be balanced with the micro performance problems that get introduced by over architecting JavaScript objects (retrieving heavily nested objects, again, something for another time).

## Twitter's Flight

In an attempt to separate itself from the pack, Twitter released an event-driven JavaScript framework called [Flight](http://twitter.github.io/flight/) (about 8 months ago-ish). Being event-driven means, that when a user does something (an event, like click), something happens (a function/method gets executed). I like it, it's very direct and straight forward without a lot of routing in an application that should be handled by the browser anyway. It's also something unique to front-end development; you can't really monitor events from PHP or Ruby.

Anyone who has read my book, [Learning JavaScript](http://www.amazon.com/Learning-JavaScript-Hands-On-Fundamentals-Modern/dp/0321832744/), knows that I'm a big fan of this event-driven model of working with JavaScript. I can't tell you how many people have e-mailed me since that book came out accusing me of making up the phrase, "event-driven JavaScript," and arguing that it's not a real thing (maybe I need more [Twitter](http://twitter.com/csskarma) followers to stop that). As much as I dislike what Twitter did with Bootstrap, I'm glad to see someone else apply the same model.

Flight made its way over the [ToDo MVC](http://todomvc.com/) in the module loader category, you can [check out the source code on Github for the to do app](https://github.com/tastejs/todomvc/tree/gh-pages/dependency-examples/flight).

I'm looking forward to playing around with it, it's refreshing to see someone try something different on that scale. Good on you, Twitter.
