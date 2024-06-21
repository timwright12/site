---
title: "Accessibility in Web Applications with ARIA Live Regions"
date: "2017-02-18"
categories: 
  - "accessibility"
---

Accessibility in Web applications can be pretty confusing. ARIA live regions are a method of communicating asynchronous document changes to [assistive technology](https://en.wikipedia.org/wiki/Assistive_technology#Accessibility_software) (AT). A screen reader will read an HTML document in a bunch of different ways (links, headings, regions, form controls, etc.), the problem with all these methods is that none of them are really equip to detect changes in the document that happen after initial load. Especially if the user has already passed that point in the document. This is where live regions are helpful.

Live regions allow you to flag a section of the document as _active_, meaning that it has the potential to update without a full page refresh (Ajax). There are four main attributes you can use to alert an AT user to changes in the document: [atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic), [live](https://www.w3.org/TR/wai-aria-1.1/#aria-live), [busy](https://www.w3.org/TR/wai-aria-1.1/#aria-busy), and [relevant](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant). Let's step through them.

## Atomic

The aria-atomic attribute will tell a screen reader whether, when changes happen within the current region, to present the entire region as a single unit or to only announce the nodes that have been changed (added and removed). It has 2 options: _true_ and _false._

Setting _aria-atomic_ to _true_ is good when you're replacing a large block of content asynchronously \[like loading an entire page in a single page application (SPA)\]. Have a look at the code below as an example:

```
<button type="button" aria-controls="loader">Load the Content</button>
<div aria-atomic="true" id="loader"> [all this content will be replaced] </div>
```

Setting _aria-atomic_ to _false_ is useful when you're appending or prepending content asynchronously (like adding items to a list). Again, see below for an example:

```
<ul aria-atomic="false">
  <li>This is a list item, but there will be more added asynchronously</li>
</ul>
```

## Live

The _aria-live_ attribute is an indicator that an element will be updated asynchronously; it also describes the type of updates that will happen and communicates it to assistive technology. The values of this attribute are expressed in degrees of importance (not important to very important). There are three potential options: _polite_, _assertive_, and _off_ (the default).

Setting the _aria-live_ attribute to, "_polite_," indicates to a screen reader that background updates will be happening and they should be announced to the user at the next "graceful" opportunity such as at the end of a sentence or when the user stops typing. You'll use this value most of the time when using _aria-live_. In my own personal user testing, it's the preferred method unless there is a reason in the UI that a user physically can't continue with they're doing (like an error blocking the screen).

The _aria-live_ value of, "_assertive_," is much more... well... assertive. It's actually pretty rude, to be honest. It will interrupt the user in whatever they're doing with the update you have. Because this type of update can be disorienting to the user, the W3C recommends not using this value unless the interruption is imperative (it usually isn't).

The last option with _aria-live_ is the default state of, "_off._" Setting the value to off is the same as not including the attribute at all, it won't alert the user of unless the specific element is currently being focused on. This could be useful if you need to turn _aria-live_ on and off programmatically for some reason, but it's still pretty rare in the wild.

Below, you'll find some updated HTML with an aria-live attribute:

```
<ul aria-live="polite" aria-atomic="false">
  <li>This is a list item, but there will be more added asynchronously</li>
</ul>
```

## Busy

The _aria-busy_ attribute is used to indicate if an element (and/or its children) are currently being updated. It has two states: _true_ and _false_. You would set this attribute to _true_ while content is loading in a target area and _false_ after the request is complete. If you're writing a standard Ajax call you can hook into the status code [200](https://www.w3.org/Protocols/HTTP/HTRESP.html) to set this appropriately.

The code block below will illustrate a snapshot of aria-busy being used:

```
<button type="button" aria-controls="loader">Load the Content</button>
<div aria-atomic="true" aria-busy="true" id="loader"> loading... </div>
```

## Relevant

_Aria-relevant_ is used in conjunction with the _aria-live_ attribute to describe the types of changes (semantic, not just presentational) that have occurred within a given live region that should be announced to the user. This attribute can contain a space-delimited of the four accepted values: additions, removals, text, all. The default state is: _aria-relevant="additions text"_. An example directly from the W3C:

> This is used to describe semantically meaningful changes, as opposed to merely presentational ones. For example, nodes that are removed from the top of a log are merely removed for purposes of creating room for other entries, and the removal of them does not have meaning. However, in the case of a buddy list, removal of a buddy name indicates that they are no longer online, and this is a meaningful event.

Using the _additions_ value applies when information is getting (you guessed it) added into a live region. Each time an element is added, it will let the user know based on your politeness setting in _aria-live_.

The _removals_ value is the opposite of _additions_ in that it will alert the user when items area removed from the live region, again, based on the politeness setting. This should only be used when the removal has real meaning, like described in the quote above.

The text value is used when you want changes to content of existing nodes marked as relevant. This triggers when any text is added to a live region, not just nodes.

Using the _all_ value is the equivalent of combining all the values: _additions removals text._

The code block below illustrates the use of _aria-relevant_:

```
<ul aria-relevant="additions text" aria-live="polite" aria-atomic="false">
  <li>This is a list item, but there will be more added asynchronously</li>
</ul>
```

## Resources and Further Reading

- [Live Regions](https://www.w3.org/TR/wai-aria-1.1/#attrs_liveregions)
- [ARIA Atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic)
- [ARIA Live](https://www.w3.org/TR/wai-aria-1.1/#aria-live)
- [ARIA Busy](https://www.w3.org/TR/wai-aria-1.1/#aria-busy)
- [ARIA Relevant](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant)
