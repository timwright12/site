---
title: "Performance Budget"
date: "2016-04-01"
categories: 
  - "performance"
tags: 
  - "performance"
  - "ux"
---

Clients often spend hundreds of hours pouring thousands of dollars into the great staples of UX like [user flows](http://conversionxl.com/how-to-design-user-flow/), [user journeys](http://theuxreview.co.uk/user-journeys-beginners-guide/), [experience mapping](http://adaptivepath.org/ideas/the-anatomy-of-an-experience-map/), [persona development](http://knowledge.hubspot.com/contacts-user-guide-v2/how-to-create-personas), [design sprints](http://www.gv.com/sprint/), and [user onboarding](https://www.useronboard.com/). They're all complex, detailed and thoughtful approaches to creating a great experience for your users. I'm, unfortunately, here to let you know that all that money you're spending is better off in other places if you ignore the most experience-connected (and revenue-connected) aspect of designing a complete experience: **performance**.

Often times, performance (loading time) is the first thing a user will experience when interacting with your product. If it's slow, they'll leave, if it's fast, they'll stay (it's really that simple). [Sean Work](http://twitter.com/seanvwork) over at Kissmetrics wrote an article called, "[How Loading Time Affects Your Bottom Line](https://blog.kissmetrics.com/loading-time/)." Some of the more harrowing statistics include (paraphrased from the [infographic](https://blog.kissmetrics.com/loading-time/?wide=1)):

- 40% of users abandon a website that takes more than **3 seconds** to load
- 79% of shoppers who are dissatisfied with website performance are less likely to buy again
- **A 1 second delay in page response can result in a 7% reduction in conversions**

The math on that last item, depending on your product, can make or break a company. For a site making $100,000/day, a 1 second page delay means about $2.5Million/year in lost revenue. Maybe you're not quite that lucky, but the point is, that a faster site means higher conversions, and higher conversions mean higher revenue (and then everyone gets raises, right?... RIGHT?!).

## Don't Do the Best You Can

Once you realize the hardline connection between page speed and revenue, the gut reaction is to get your product loading as quickly as possible. And honestly, at first, that was my reaction as well, but it turns out that doing that is about as helpful as trying to drink water from a firehose. You'll probably end up catching a lot of things just because of awareness, but you still won't really know what, "success" means. The next step after awareness is to create a plan.

There are a lot of things you can do to [improve overall performance](http://www.slideshare.net/csskarma/slow-kinda-sucks) like minifying and concatenating asset files (CSS & JavaScript), [utilizing responsive images](https://www.smashingmagazine.com/2014/05/picturefill-2-0-responsive-images-and-the-perfect-polyfill/), tuning up those SQL queries, and getting your HTTP requests down to the minimum. These are all great things to do, but without a concrete goal you really can't succeed. This is where, "doing the best you can" really isn't the best thing you can do. Setting proper metrics and goals will help you measure success surrounding the performance of your product.

Once I came to this realization, I started creating [performance budgets](https://timkadlec.com/2013/01/setting-a-performance-budget/) - I love them.

## Setting Up a Performance Budget

Performance is our front-line defense in creating an end-to-end experience for a user, and the first step to that is creating the proper performance budget.

A performance budget is a thoughtful analysis of your main competition, how other products in your space perform, benchmarking against the best of breed, then finding a way to get there. **How about a quick case study while we're here?**

Let's use Amazon as our client. [View Amazon's performance budget](https://docs.google.com/spreadsheets/d/1C2xIoEX2LjjoAcZlzL8p5RNqpcZ89NBzkuKzubOOeTQ/edit?usp=sharing). It will be broken down into 5 major buckets: Start Render, Document Complete, Fully Loaded, [Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index), and the Dominant Asset.

### Setting Competitors

The first thing we'll do is gather some competition for Amazon and identify key pages/templates to run our tests against. For the purpose of this exercise we'll use: Etsy, eBay, and Target (you should have at least 3 - don't pretend like you have no competition either, it isn't helpful). The templates we'll test will be: Homepage, Product Page, and Search Results.

### Start Render

This is the time it takes to go from a white screen to "something is on the screen" - it doesn't matter what, just something. This statistic greatly affects the experience, because it lets the user know _something_ is happening. Racing to start render is very important to the overall experience and the speed index.

### Document Complete

This moment speaks to when the user can actually interact with the page with some context. The images usually are not fully loaded at this point, but the user can do everything they need and have the feeling that things will be finished soon.

### Fully Loaded

The is the moment all assets (HTML, CSS, JS, images, fonts, etc.) are downloaded.

### Speed Index

For speed index, the lower the better. It speaks to the experience of watching a page load. If site **A** loads in 8 seconds and site **B** loads in 10, you would think that site **A** is better, but if site **A** has a blank screen for 7 of those 8 seconds, that's actually a pretty terrible experience. This is what speed index is really good at: telling you exactly what it's like experiencing the loading of your site.

### Dominant Asset

Focusing on the dominant asset will give you a starting point for improving performance and yield the largest, "win." If images are your dominant asset, then optimizing your images, reducing them, and making them lighter will get you the most bang for your buck! The path forward is often very difficult and long, but this gives you a great place to start.

## Now What?

After running the performance budget, the next step is to choose your benchmarks. Sometimes it's obvious, sometimes it isn't. I've settled into choosing the best speed index, and benchmarking off that because it speaks to the actual experience for a user a little better than any of the physical milestones. From there, after your targets are decided and fleshed out, you can shave 20% off the values, and there you have it, your performance budget! ~20% is the point where a page actually _feels_ faster to a user.

Based on the test metrics used (I use 3g), you can calculate the allowed KB weight of a page, and distribute it across the assets to create the best performance possible!
