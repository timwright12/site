---
title: "Measuring Performance with Interaction to Next Paint"
date: "2023-05-30"
categories: 
  - "performance"
---

[Interaction to Next Paint](https://web.dev/inp/) (INP) is an experimental metric that gauges the responsiveness of individual interactions throughout the lifecycle of a page (from load to close). It measures from when an event (click, tap, and keyboard interaction) fires to when visual feedback is represented on a page (aka, next paint). The main example given here is when you click an accordian, how long does it take to open? If slow, it can be indicative of a lot of main-thread JavaScript clogging up UI interactions.

To quickly summarize how an INP value is calculated:

> INP is calculated by observing all the interactions made with a page. The chosen value is then a percentile of those interactions.

Your INP value will be fully calculated when a user leaves a page (so it can get all the data). The highest value will be reported, your goal is to get this number as low as possible (under 200ms). These calculations can be gathered [in the field](https://web.dev/lab-and-field-data-differences/#field-data) or [in the lab](https://web.dev/lab-and-field-data-differences/#lab-data), but field data appears to be more reliable for analysis due to the variability in hardware and connection speeds users will encounter in the real world.

This is a really interesting metric to gather what seems to directly correlate to the experience a user will have when interacting with a page. Is it the, "A-number-one," most important thing to fix? No, probably not. There are many other macro-level performance metrics you would focus on fixing before this one, but for a micro-level UX/Performance improvement it seems really nice and promising to fine-tune an experience for your users.

If this is of interest to you, I highly recommend reading more about [Interaction to Next Paint](https://web.dev/inp/) on the official site.
