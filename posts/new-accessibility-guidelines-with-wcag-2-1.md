---
title: "New Accessibility Guidelines with WCAG 2.1"
date: "2018-08-26"
tags:
  - "accessibility"
layout: layouts/post.njk
---

On June 5, 2018 the W3C updated version 2.1 of the Web Accessibility Content Guidelines to “Recommendation” status. What’s that mean? Well, it means we’re ready to start using it. The new guidelines have been in process for about a year and a half now, moving slowing, but surely, into a state where we can start digging our heels in.

Version 2.1 isn’t a major overhaul, but there are certainly some interesting additions to Levels A-AAA that we’ll be taking a look at since 10up now has a [baseline accessibility standard of Level A](https://10up.com/blog/2018/engineering-practices-accessibility-standards/). So here’s what’s new at each level and what they mean. I updated them all to be slightly more consumable, but if you want the full technical description you can follow the linked headings. Let’s take a look, shall we?

## Level A

### **2.1.4 [Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/quickref/#character-key-shortcuts)**﻿

If you’re creating an interface that uses keyboard shortcuts and those shortcuts only use one key (letter, number punctuation, whatever), then the user needs to be able to: turn it off, change it to use a modifier key (ctrl/cmd/shift/etc.), or the keyboard shortcut can only be active when a certain component is within focus. 

### 2.5.1 **[Pointer Gestures](https://www.w3.org/WAI/WCAG21/quickref/#pointer-gestures)**﻿

Any interface that uses multiple gesture points (more than one finger, for example), needs to also be accomplished with a single pointer (like how, on iOS, you can pinch-zoom, but also double tap). The exception to this is if the use of multiple pointers is essential for the function (it probably isn’t).

### 2.5.2 **[Pointer Cancellation](https://www.w3.org/WAI/WCAG21/quickref/#pointer-cancellation)**﻿

Clicks and taps need to be cancellable. There are “down clicks” and “up clicks”. Events need to be fired on the up click (the normal way they’re fired). Sometimes events are fired on the down click (mouse down) to speed up the responsiveness of the UI, but this means the click can’t be cancelled. That would now be a Level A failure. If you click a link, then drag your mouse away and release, you can naturally cancel the click, this happens naturally with a touchscreen as well – it prevents accidental clicks.

### **2.5.3 [Label in Name](https://www.w3.org/WAI/WCAG21/quickref/#label-in-name)**﻿

All visible form fields require associated labels, we know that, but what 2.5.3 says is that the visible label and the accessible input name should match as closely as possible. An element’s accessible name is exposed in the browser’s [accessibility tree](https://developer.paciellogroup.com/blog/2015/01/the-browser-accessibility-tree/) and is read by assistive technology (AT – screen readers). When this name doesn’t match the visual name the user can have trouble communicating AT when targeting a field. The accessible name can vary element to element, but generally speaking it seems like this guideline is meant to formalize the requirement that inputs need labels and labels need “for” attributes to pair them together. You can [read more about accessible names](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/) from the Paciello Group Blog.

### **2.5.4 [Motion Actuation](https://www.w3.org/WAI/WCAG21/quickref/#motion-actuation)**﻿

If an interface is using device motion as a point of interaction, these interactions can also be accomplished with interface controls and disabled to prevent accidental actuation. This means that users who have problems with controlling motion won’t have a disjointed experience.

## Level AA

### **1.3.4 [Orientation](https://www.w3.org/WAI/WCAG21/quickref/#orientation)**﻿

Making sure that content is available regardless of device orientation. So nothing like, “best viewed in landscape,” stuff. Or only allowing certain UI elements to be viewed in a certain orientation unless it’s critical to understanding the content (it probably isn’t).

### **1.3.5 [Identify Input Purpose](https://www.w3.org/WAI/WCAG21/quickref/#identify-input-purpose)**﻿

Form inputs need proper labelling, this seems similar-ish to 2.5.3 in that we just need to make sure forms use proper HTML.

### **1.4.10 [Reflow](https://www.w3.org/WAI/WCAG21/quickref/#reflow)**﻿

Single chunks of content fit in a single viewport, so the user doesn’t have to scroll in multiple dimensions to access complete information. This would be like a giant UI element that you need to scroll around a lot to get full context. There’s always the caveat with this stuff that it’s OK if it’s critical to the communication of the content, even though that’s a bit of a cop-out… An example exception would be something like [Figma](https://www.figma.com/) where you need to scroll every-which-way to fully use the tool.

### **1.4.11 [Non-text Contrast](https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast)**﻿

Any time two colors touch in a UI component, they need to have a contrast ratio of at least 3:1, unless that component is disabled – this includes other states like hover and focus. If you need to check color contrast you can use the [WebAIM tool](https://webaim.org/resources/contrastchecker/) or the [Sketch plugin](https://github.com/getflourish/Sketch-Color-Contrast-Analyser).

### **1.4.12 [Text-Spacing](https://www.w3.org/WAI/WCAG21/quickref/#text-spacing)**﻿

This guideline is really specific and has to do with typography. I’m actually surprised this isn’t Level AAA since it’s so specific with the requirements. I’m just going to list the rules directly (they’re pretty straightforward):

- Line height (line spacing) to at least 1.5 times the font size;
- Spacing following paragraphs to at least 2 times the font size;
- Letter spacing (tracking) to at least 0.12 times the font size;
- Word spacing to at least 0.16 times the font size.

**Update**: I chatted with some folks about this and we came to the conclusion that this guideline means: “If a user applies these rules to your content, none of the content should be lost.”

### **1.4.13 [Content on Hover or Focus](https://www.w3.org/WAI/WCAG21/quickref/#content-on-hover-or-focus)**﻿

When exposing content on focus or hover (some internal UI elements, but this will mostly be dropdown menus and navigation, form input errors, or tooltips), the content continues to display when focused/hovered on children elements (the menu stays open when you’re tabbing into it (you’d be surprised). The content should also be dismissible without moving focus (clearing it with the ESC key, but staying on an input). The content also needs to stay until the user does something, so you can’t use a timeout to remove it.

### **4.1.3 [Status Messages](https://www.w3.org/WAI/WCAG21/quickref/#status-messages)**﻿

Alerts need to have the aria role: role=”alert” so the fact that they’re an alert can be communicated to assistive technology.

## Level AAA

### **1.3.6 [Identify Purpose](https://www.w3.org/WAI/WCAG21/quickref/#identify-purpose)**﻿

The purpose of UI element, regions, and icons can be determined. Regions need roles, icons need text (even if it’s hidden text), and components need to be purposeful and labelled.

### **2.2.6 [Timeouts](https://www.w3.org/WAI/WCAG21/quickref/#timeouts)**﻿

If you’re using a timeout of some kind that will result in the user’s loss of data, you need to tell them unless the data is saved for more than 20 hours. This is like when you’re on a page and it kicks you off for inactivity – you have to let users know beforehand that it will happen if they’ll be losing any data.

### **2.3.3 [Animations from Interactions](https://www.w3.org/WAI/WCAG21/quickref/#animation-from-interactions)**﻿

Motion and animation from interactions can be disabled in some way unless it’s critical to the function of the UI (it won’t be). This is for users with motion disorders/sickness. I always turn off animations when I can for this reason (poor Tim and his weak belly, I know, I know).

### **2.5.5 [Target Size](https://www.w3.org/WAI/WCAG21/quickref/#target-size)**﻿

Click areas need to be at least 44px by 44px unless they’re links in a sentence.

### **2.5.6 [Concurrent Input Mechanisms](https://www.w3.org/WAI/WCAG21/quickref/#concurrent-input-mechanisms)**﻿

All content can be used with any input device. For example, I can hook up a keyboard and mouse to my iPhone (it’s a thing) and you’re interface will still be useable. The the UI isn’t specifically blocking a user from choosing the input device they want to use.

* * *

So that’s it. Those are all the new rules and my interpretations of them. Nothing super mind-blowing, but certainly some new guidelines to keep in mind as your building or designing. If you want to review WCAG 2.1 in its entirety, the [QuickRef](https://www.w3.org/WAI/WCAG21/quickref/) linked throughout this post is a great way to do that.
