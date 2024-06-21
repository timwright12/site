---
title: "Web Directions North - Vancouver (Day 2)"
date: "2008-02-03"
categories: 
  - "engineering"
---

It's the end of day 2 up in Vancouver at WDN08, another really great day, some good talks. The Keynote Matt Webb was really interesting, looking forward to the podcast. Anyway, here are my notes from day 2: **CAMERON ADAMS - THE FUTURE OF WEB-BASED INTERFACES**

- _dynamic interfaces_
- you can't make design that's perfect for everyone

Flexibility

- font size
- font availability
- page width
- javaScript

Why not flexible layouts?

- currently, there's a narrow range of interface

Approaches

1. user-driven
2. developer-driven

USER DRIVEN

- identity management with customization (twitter, myspace, etc.)
- make it easy (using Ajax for immediate customization feedback)
- there's still a need for constraints
    - preset layouts
    - modular applications
- widget-based interactions (drag & drop - iGoogle)
- moving widgets into content
    - collapsing and moving menus around
- desktop apps using draggable panels (ExtJs)

Beyond HTML, but not really (?)

- canvas
- flot
- yahoo pipes

How?

- Ajax
- Regular old forms
- increase the range of interface

keep layers separate:

1. data
2. behavior
3. style

DEVELOPER DRIVEN

- Client side analysis
- print.css
- changing css based on browser width
- handheld css
- alternate style sheets and using CSS3
- fill in the gaps with javaScript
- Server-side analysis
- removing a welcome message after a certain number of visits

[www.poetpainter.com](http://www.poetpainter.com)

CLOSING NOTES

- Dynamic interfaces are useful in high traffic websites
- Technology is never a barrier for very long
- The hardest thing is changing how people think

**ERIC RODENBECK - INFORMATION VISUALIZATION**

- [http://index.blogspot.com](http://index.blogspot.com)
- data visualization
- starting with the data & forming a map from it rather than overlaying data on an existing map

**JOHN ALLSOPP & DAVID SHEA - WHERE'S YOUR WEB AT?**

They're essentially talking about all the different places you can access the internet now-a-days and how you shouldn't assume that your site is going to be viewed in a certain way.

[http://mezzoblue.com/presentations/2008/wdn/](http://mezzoblue.com/presentations/2008/wdn/)

DESIGN (Shea)

- Screen size varies greatly from a 128x128 cellphone to a 52" HDTV
- css media can with this
    - iPhone media code: media="only screen and (max-device-width:480px)"
- Adaptive layouts based on screen resolution using javaScript
- generally speaking, mobile devices only have 1 system font and a couple of font sizes to work with
    - rendering (clear-type & anti-aliasing)
- control your design by using semantic markup
- embrace the type-face limitations
- UI elements that get messed up on mobile devices
    - tabs
    - breadcrumbs
    - transitions (on screen changes)
    - icons (turning images off so you need alt & text labels)

USER EXPERIENCE (Allsopp)

- assumptions
    - everyone has fine motor skills
    - typing/clicking assumptions
- Text input strategies (things to do to make inputting text easier for the user)
    - short URLs
    - using ECML for form fields
    - ECML is a standard for naming form fields to help with auto-complete
    - openID for faster and easier account sign up

**DANIEL BURKA - UI CASE STUDIES**

1. Digg story format
2. Digg comment system
3. Pownce

DIGG STORY FORMAT

- started designing in the story level pages since it was the main focus area of the site's service
- describing the evolution of the digg button

DIGG COMMENT SYSTEM

4 versions

- ver1 -> original comment system
- ver2 -> problem with nested comment
- ver3 -> current -> hiding nested comments, using ajax to lighten HTML on pages, comment increased 30%, scales to thousands of comments
- ver4 -> coming soon (UI changes, pulling META data out of the content line for easier page scanning)

POWNCE DESIGN

- starting from scratch
- "sencha" - original Pownce name
- logo "down arrow" is integrated throughout the site to break up hard lines

CONCLUSIONS

1. starting focus
2. echo design language
3. be prepared to iterate & react to many types of user feedback
4. there's nothing wrong with making mistakes
5. 2 release cycles
6. normal cycle
7. guerilla cycle - faster iterations
