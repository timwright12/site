---
title: "A New Breed of Microformat"
date: "2008-09-22"
tags:
  - "engineering"
layout: layouts/post.njk
---

![article banner](images/vfacet-banner.jpg)

Because I'm a web dork (nice way to start a post, huh?), I was poking around [YouTube](http://www.youtube.com/) last weekend and decided to crack it open in [FireBug](https://addons.mozilla.org/en-US/firefox/addon/1843).

I was on [YouTube's MayerMusic channel](http://www.youtube.com/mayermusic) fiddling around with the video info section and notice that some of the info was wrapped in a quasi familiar class "vfacets". This _appears_ to be some sort of [Microformat](http://www.microformats.org); but none that I've ever seen.

![mayermusic video info wrapped in div.vfacets](images/vfacets-mayermusic.jpg)

After seeing that, I decided to do a little digging (digging = 5 mins of Googling), and eventually found a pretty undetailed page about [group examples of Microformats](http://microformats.org/wiki/group-examples).

Generally, I find that Google's front end development is a disgrace to the Internet (no offense…), but it seems like they're buying into the concept of Microformats. With that in mind I thought I'd talk about how Microformat groups could be used.

#### Usage

Many of us are familiar with the most common [types of Microformats](http://microformats.org/code-tools/) (hCalendar, hCard, hReview, and XFN). There are also many that are [still in draft form](http://microformats.org/wiki/Main_Page#Drafts) like hResume, geo, and rel-directory. However, it seems that a new type could be emerging for grouping information.

[The link above](#linkabove) listed out 4 examples of major sites using Microformat groups: YouTube, Magnolia, Linkedin and Flickr. I really like how Google (youtube) is marking it up though, so I'm going to get in to that.

##### YouTube vEntry markup

```
<div class="v120vEntry">
<div class="vstill">
<a href="/user/spoiledmilk"><img src="2.jpg" class="vimg"></a>
</div>
<div class="vtitle">
<a href="/profile?user=spoiledmilk">spoiledmilk</a>
</div>
<div class="vfacets">
<span class="grayText">Joined:</span> August 02, 2006<br>
<span class="grayText">Videos:</span> <a href="/profile_videos?user=spoiledmilk">21</a>
</div>
</div>
```

In marking up user information they are using:

- **ventry** as a wrapper
- **vstill** for the user image link
- **vimg** for the image itself
- **vtitle** for the user's name
- **vfacets** for, what seems to be, general information

I'm wondering why Google is going with this. In the past I think it's safe to say that they don't really do things like this unless they're planning to use it in something they build. Not to take shots at Google, but they don't really do things for the greater good of the web community (correct me if I'm wrong).

#### Consistent user tagging

The basis for using something like a `vcard` class is to let the browser, user, spambot, or software know that a page contains contact information (and your now beautifully marked up e–mail address). This same principle applies to Google's `vEntry`.

Let's consider that Google is building a large social networking platform; I know that the main complaint I have with all these new networking sites is that you have to constantly rebuild your contact list. Marking up a member's information in a consistent way would aid in search and ease the pain of finding those [Twitter followers](http://twitter.com/csskarma/followers) (for example) we all love so much. _Or even for building some sort of Internet phone book._

#### What are they scheming?

What's Google planning? What else can be done with this new microformat? Did I completely miss a huge glaring detail here?

Maybe this isn't even Google code, it could be left over from when they bought out YouTube. I guess we won't know for sure until we can pick apart Google's brain and find out what's going on in there.

In the mean time, watch out for this new Microformat, I have a feeling they'll be popping up in other Google sites as well.
