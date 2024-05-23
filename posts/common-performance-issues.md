---
title: Common Performance Issues and How to Solve them
description:
date: 2020-10-31
tags:
  - performance
layout: layouts/post.njk
---

A couple months ago I sat down and ran a performance analysis over 25 editorial-focused sites I’ve recently encountered (omitting URLs) in hopes to get a ten thousand foot overview of how the Web looks with page speed and loading metrics. The Analysis was split in to two parts: WordPress sites and React sites, as to not cross over two distinct tech stacks and keep the controls in my experiment consistent.

Here are some high level statistical takeaways from the data I uncovered, broken down by project type:

## WordPress

- Average lighthouse performance score: 52
- Average speedIndex (3G): 10.018s
- Average JS size: 2330kb
- Average CSS size: 434kb
- Average Image transfer size (homepage only): 1524kb
- Average HTML size (homepage only): 181kb

## React

- Average lighthouse performance score: 25
- Average speedIndex (3G): 15.458s
- Average JS size: 4639kb
- Average CSS size: 286kb (4 of 15 projects using styled components)
- Average Image transfer size (homepage only): 1273kb
- Average HTML size (homepage only): 719kb

## Issues

With all this data, let’s take a look at the top four issues I saw and how to address them.

### Images are too Large

The images that are being uploaded into WordPress are massive. There’s no way to get around that. They will also likely continue to be very large. From a design standpoint we need to keep an eye on the amount of images displaying on a page. From an engineering standpoint we need to make sure the images loading are the correct size for the component and environment (loading smaller images where smaller images should be and vice versa). We can also use the new in-browser lazy loading with a fallback option when it isn’t supported. Some more tips:

- Use the picture element to load proper images at certain breakpoints rather than relying on the default WordPress srcset output.
- Lazy load images that are further down the page.
- Set multiple crops so you can always get the image you need.
- For larger projects, lean on services like Cloudinary to help serve up the proper images and image formats (like webp, when supported).

Images are kind of a monster, there’s a lot to really unpack there, but if we start with these few tips, we’ll be in a good spot moving forward.

### General Lighthouse Scores are too Low

Lighthouse is a great tool for you to use nearing the end of a build (and even post-launch) to use as a performance checklist. At the start of a project you should be aware of all the Lighthouse targets and items so you don’t end up in a corner, but the real power is Google handing you a roadmap and specific things you can do to get a better score.

The recommendation here: run your site through lighthouse and fix whatever it tells you to fix.

### CSS Files are too Large

On the WordPress sites I reviewed, an average CSS file size of 434kb, is really large. In fact, the two largest I tested came back at 963kb and 1070kb. The former being a full design system and the latter being a site that was built on top of a base CSS file (kind of like theming Bootstrap). A bloated CSS file is usually indicative of a few things:

- A lot of repetition in the output (outputting the same code over and over) – happens on old projects and where many engineers touch the files.
- A lot of long class names, long variable names, long name spacing and heavy selector nesting
- Too much componentization and not relying on the cascade

Repetition from the code usually comes from isolated work and not being familiar with the global system that’s being used. This can also indicate an over-reliance on mixins in a system. A solution here would be to make sure you familiarize yourself with the entire CSS implementation before executing a task and also try to rely on utility classes where you can.

The second item has to do with the amount of characters present in the file. Especially referencing design systems that use name spacing, using a long prefix can really bloat a file, so try and keep those to 1-3 characters if possibly. In the design system referenced above (963kb project) I was able to shave off ~10% of the file size by reducing the name space length from seven characters to two characters. The same applies to CSS variable names (they end up in the CSS), prefer something like “sm” vs “small” and “md” vs. “medium”. It might not seem like a big deal, but they do add up and there’s no real reason for them.

The last item that can really bloat a file is focusing too much on componentization and isolating your work too much. The most powerful component in CSS is the cascade, so don’t forget to use it. If something is defin## ed higher up in the cascade it doesn’t need to be redefined; typography is the biggest offender of this, so keep an eye out and move those styles up the cascade are far as you can!

### Using too much Blocking JavaScript

It’s kind of a given that a React site is going to contain a ton of JavaScript, and much of that JavaScript will be blocking. The issue we’re seeing in this area with React is actually that React is bloating the HTML to the point where it’s near four times that of a WordPress or static site. This is something that really requires further investigation since the sites are not really designed differently.

From the WordPress side, we’re seeing a lot of unused JavaScript being outputted in the main thread. Generally speaking this is project to project, but there are a couple things to note that we can directly fix:

- Keep an eye on plugins that are outputting extra JS in to the DOM, especially jQuery.
- Make sure WordPress isn’t spitting out React on the front-end, especially on templates that aren’t using it.
- Make sure your GTM scripts are under control, this is managed by the client so it can get bloated very quickly and they won’t realize the performance affects.
- Make sure all JavaScript is loading at the bottom of the page so it doesn’t block render.
- MomentJS is huge and you usually don’t need all of it, so if you’re using Moment, only load what you need.

## Overall

Overall, how are sites looking? Not great to be honest. Builds move fast and sometimes it’s hard to remember the end goal of serving the best possible experience to all users (especially when a deadline is looming and tickets are flying by). Compounding that, most of the performance items we deal with are not, “we can fix it later,” type things, some are, but most are not. A homepage with two hundred images, ten ads, and a handful of third party scripts can only load so fast with engineering alone.

Decisions are made very early on in a project that trickle down and have long term lasting affects on the speed of a site as well as the end experience we’re offering to users. I do like to tout the importance of a performance budget, it’s a tool we use to level-set at the start of a project to bring everyone on the same page regarding the real-life performance and business goals of a site. Performance is not just an engineering thing, it’s a whole team thing and we need to work together.
