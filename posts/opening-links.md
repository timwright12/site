---
title: "Security and Accessiblity When Opening Links in a New Window"
date: "2017-01-21"
tags:
  - "accessibility"
  - "security"
layout: layouts/post.njk
---

A handful of years ago there was a quiet agreement in the Web community that we should stop opening links in new windows (using `target="_blank`") to give users more power over their experience. After all, who are we to say that something should open in a new window? It was a reaction to the UX problem we still encounter all the time today: assuming we know what's best for the user. So we started letting the user decide how and where they want to open links.  If you want a new window, right click and do it yourself, or hold shift and click -- either way the user will pick. As a user, I can't cancel out `target="_blank"` but I can simulate the feature if I want it. There are few things worse on the Web than fighting with a UI that thinks it knows what's best for you.

That debate aside, there are probably going to be instances where you will still open something in a new window (like social sharing buttons), so if you do have to do it there are a couple things you should keep in mind that I wanted to quickly run through: security and accessibility.

### Security

A few weeks ago I stumbled across and article called [_Target="\_blank" - the most underestimated vulnerability ever_](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/), an overly dramatic title? Yeah. But it still made some good points that I wasn't aware of previously. In a nutshell, every time you use `target="_blank"` you give partial access to the opener object, which allows JavaScript to potentially get executed (mostly used in phishing).

There's a pretty easy fix for this, by adding `rel="noopener noreferrer"` to any link that contains `target="_blank"`. This will block access to the opener object. The `noopener` value is for most browsers, but the `noreferrer` one is for Firefox support.

The vulnerability is also exposed when you open windows with JavaScript, so it's important to programmatically set the opener to null when you're doing this. The code block below is pulled from the article referenced above:

```
var newWnd = window.open();
newWnd.opener = null;
```

## Accessibility

Links that open in a new window a terrible for accessibility. The act of refocusing the interface somewhere else can be very disorienting for a user with assistive technology. Many modern screen readers will alter the user when a link opens in a new window (but only after it has been clicked). It’s easy for a sighted user to see when this happens, but it’s tough for someone with cognitive disabilities to process. It will also disable the back button (because it’s a new window/tab), which can further the confusion if you don’t understand what just happened.

For this reason, if a link is going to open in a new window, you should let the user know that beforehand. Many people use iconography with alternative text like, “This link opens in a new window,” to let a user know. Or you can hide the text without using an image, although icons in this instance will help communicate the UI to all users (sighted or not sighted) so it is the recommended method.

I put together a quick [WordPress plugin](https://github.com/timwright12/wp-a11y-links) to illustrate a way to potentially automate this process in a CMS. I welcome all pull request on the plugin, as I'm not a WP-super-dev.

## Resources and Further Reading

- [Web AIM: Links and Hypertext](http://webaim.org/techniques/hypertext/hypertext_links)
- [Target="\_blank" - the most underestimated vulnerability ever](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/)
- [rel="noopener"](https://mathiasbynens.github.io/rel-noopener/)
