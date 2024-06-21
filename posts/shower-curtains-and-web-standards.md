---
title: "Web Standards and the Shower Curtain"
date: "2009-04-01"
categories: 
  - "engineering"
tags: 
  - "business"
  - "content-management"
  - "design"
  - "ui"
  - "web-standards"
  - "web-standards-curriculum"
---

![article banner](images/shower-curtain.jpg)

Have you ever bought shower curtain rings and wondered if there were enough in the package to fit your shower curtain? Probably not.

_Why is that?_

Its because the shower curtain industry has standards, just like the standards we're trying to implement on the Web. At some point in the process of creating shower curtains, an industry leader made a decision as to how many holes would be in that shower curtain. It filtered through the industry and became a standard so you, the consumer, didn't have to worry if there were enough rings to hold up your curtain. There are. And it's because of standards.

#### Barriers to Entry

Think of the millions of different industries out there that would be in a constant state of confusion if there were no standards set. Every time a new player would come into the business, they would be reinventing the wheel for their product (sound familiar?).

Unfortunately, the cost of entry to the Web is very low. It's available to everyone, whether you're aware of Web Standards or not, you can get in and do whatever you want, go to blogger, WordPress, Google sites, etc. There's no real governing body saying No, you can't put up a Web site with invalid code. Honestly, nothing happens if you use crappy code, you can still get a nice looking site that's all decked out in tables and `font` elements.

The barriers to entry are so low for the Web that no one needs to be aware of the standards. This is a culture that needs to change.

#### Accountability

Up until, maybe a month or two ago, I was a **huge** pusher of education for the client, cram as much knowledge as you can into their heads. But I'm starting to lean the other way. Where does the education need to stop and where does the industry take over in enforcing standards?

User-centric design is such a big deal right now, but we're not bringing it into our business model. We design our sites with the user in mind. What does the user want? What will they being thinking? Where do we want to guide the eye?

We all know that the user average doesn't care about paragraph tags, blockquotes and divs. But guess what? 95% of the time, the client doesn't care either. And you can say that caring about that is the cost of having a web site, but it's really not. Not with barriers to entry being so low. A small company doesn't need to know this to be successful.

I just had a very educational back-and-forth with some system administrators (server guys) where I truly felt like a client with the attitude of: I don't care about the innards of the server, I just want it to work. And it was finally pretty clear to me about how a client, who is not Internet savvy, and just wants a Web site to work. They truly don't care, they just want it to work.

#### The Ideal Client

The ideal client, wants to learn about the XHTML code we're using to build the site. They're curious as to why it's best practice to separate out a presentation layer. This is great when they actually want to be educated, I love these clients; unfortunately, they're few and far between.

Don't get me wrong, I'm not saying the education is a bad thing, I think [it's great](http://www.opera.com/company/education/curriculum/) and I'd love it if clients cared about semantics and proper document structure. But the reality of the situation is that we need to pick our battles and move some of the burden off the client and back onto us (the developer).

#### The CMS

Content management system and the developers need to take on most of the burden. This is where the code is produced, this is the output, and this is where the choke point is. Most content management systems I've come across are still outputting multiple line breaks instead of paragraph elements (they're elements, not tags). With how far we've come in Web Standards, its not acceptable anymore to just be proud that you're not using tables for layout. The best one I've seen, so far, has been WordPress (my CMS of choice). But the vast majority of "easy" CMSs are still outputting awful code.

A client should not be asked to do any more coding than they have to do in a Word document, unless they want to or there's an error in the CMS.

##### The Problem with Themes

The problem I have with WordPress/MovableType themes and default templates is all the extra code included to make things flexible. Code inserted completely for presentation purposes.

**The first 5 lines of code in the `body` of a default MovableType Blog:**

```
<div id="container">
<div id="container-inner">
<div id="header">
<div id="header-inner">
<div id="header-content">
```

**What I cut it down to before I start coding**

```
<div id="branding">
```

If we're going to make the barriers to entry so low that anyone can use these open source CMSs, we need to build them better out of the box. The same amount of theming can be done with half the amount of code.

#### What clients should know

There are certain things that a client needs to be responsible for when managing a Web site. Anything having to do with the content, properly floating images left and right, bold & italics (if there's no WYSIWYG editor), maybe some light positioning, things like that. They need to be educated on accessibility and how necessary alt text is when they're inputting an image into content. They need to be educated on relevant topics that they'll deal with on a day-to-day basis, not the importance of a DOCTYPE and making fewer HTTP requests (these are burdens of the developer).

#### The point of this

What am I ranting about? Shower curtains? The point I'm trying to make here is that there **are** certain standards that we, the Web team should share with the client, but they don't need to be experts. If they were, they wouldn't need us. Inform your clients about Web standards, let them know they exists, answer any and all questions they have, and correct any misconceptions, educate them as much as they need. [The Opera Web Standards Curriculum](http://www.opera.com/company/education/curriculum/) is a great resource for any client to have, maybe giving them that should be our newest standard.

You're the client, you don't need to think about how many rings there are in your shower curtain, it just works (ok, maybe you're the user, but you get the point).

P.S. There's a big learning curve with the Internet and it's even harder since it constantly changes; you're clients are not stupid, they're just confused.

Now if we can only agree on spelling it "Web site" vs. "website" we'll be in business!