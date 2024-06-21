---
title: "Cracking open Google Gadgets"
date: "2008-04-14"
categories: 
  - "engineering"
tags: 
  - "ajax"
  - "google-gadgets"
  - "google-gears"
  - "javascript"
  - "rss"
  - "widget"
  - "xml"
---

A few weeks ago, I decided to do a little research into [Google Desktop](http://www.google.com/ig/directory?synd=open). Which is basically a Google widget platform competing with [Yahoo! widgets](http://widgets.yahoo.com/). After some exploration and dissecting Google Gadgets, this is what I came out with:

- The core of the application runs on 2 files
    - main.js
    - main.xml
- There are also some image and CSS options readily available, but the guts of it really run on JavaScript and XML
- Overall, it's very straightforward, a little playing around with the sample gadgets will give you a good idea of what you can do (endless possibilites)

The file structure of some of the sample gadgets leaves a lot of room for improvement. Some seem to be built to handle very large, modular applications, but in most cases, they're a little too modular (in my opinion).

Some of the more useful samples you can go through are:

- Animations
- ComboBox
- Countdown
- DragDrop
- HelloWorld
- HTMLDetailsView
- QueryAPI
- RSS
- XMLDetailsView
- XMLHttpRequest

There are others too, but these are the one's I found most useful. So, lookin at those options, a being an RSS freak, I chose to customize the RSS gadget for CSSKarma

**CSSKarma RSS Gadget**

[Download CSSKarma RSS Gadget](http://www.csskarma.com/gadgets/rss/csskarma_rss.gg)

The first thing to do is to make a copy of the RSS sample given with the Google Gadget samples. I did that (as a CSS person), I opened up the theme folder "default" and looked for "details.css". I assumed this file would edit all the presentation for the gadget. It doesn't. I only edits the flyout menu (after you click on a link in the RSS gadget). OK, that's fine. So I enter this CSS:

```
body {
  color:#323F4C;
  background:#fff url(http://www.csskarma.com/images/bg_branding.jpg) no-repeat 0 bottom;
  font: 0.8em/1.5 Verdana, Arial, Sans-serif;
}
```

That will add my CSSKarma logo to the flyout and add some basic CSS. The other files in the theme folder to deal with are "entry\_item.xml", "theme\_config.xml" and "title.xml". After you look at "theme\_config.xml" and "title.xml", you'll see why I think this is a little _too_ modular. I left those two file alone. But I did edit "entry\_item.xml", view [entry\_item.xml](http://www.csskarma.com/gadgets/rss/entry_item.xml). I edited some style information in there (one more thing I'm not thrilled about - embedding style info into the XML).

The next folder to tackle is "editme". It contains 2 files (config\_constants.js and entry\_item\_impl.js). In "entry\_item\_impl.js" you can edit the RSS nodes, if you want. I chose not to. In "config\_constants.js" you need to edit the URL of the RSS feed you want to use.

The last thing I wanted to do was to remove the default background image from "main.xml". When I did this, the background was transparent, by default. So in "main.xml" I added a background attribute of #FFFFFF to top level div (container). I also edited the height and width attributes of the "view" element for when the gadget is undocked from Google Desktop.

The outcome of this was the [CSSKarma RSS Gadget](http://www.csskarma.com/gadgets/rss/csskarma_rss.gg) (You'll probably need Google Desktop installed to use this). A very basic RSS gadget made by making simple modifications to the sample files. Feel free to download, play around with it, and let me know about any errors you find.

**Aptana Jaxter**

[Aptana Jaxter](http://www.aptana.com/) recently released "The worlds first Ajax server" (I have no date to back up the claim that it was recent). I've seen some web apps using this in integrating the Google API, looks promising but there's very limited server space right now. I'd like to see how these can be integrated into the [Mobile web](http://code.google.com/apis/gears/mobile.html "http://code.google.com/apis/gears/mobile.html"). I don't have too much information on it right now (and I keep losing the damn link).

That's all I have for now.

With ease  
Tim
