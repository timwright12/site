---
title: "Setting your Apple icon"
date: "2008-10-01"
categories: 
  - "engineering"
tags: 
  - "iphone"
  - "ipod"
  - "mobile"
---

![article banner](images/setting-your-apple-icon.jpg)

Getting your own iPhone app icon is easier than you'd think. I was recently working on a project where the client wanted to make sure that if a user added his site to their iPhone home screen, there would be a pleasing icon.

Apple used a lot of forward thinking when they implemented the apple-touch-icon. It's treated very much the same way a favicon is treated. There are 2 ways to set your Apple icon.

- You can simply put a file called apple-touch-icon.png in your root directory
- You can put the icon where ever you'd like and link to it in your document head element

I'm one of those people who prefers to do a combination of both to make sure it gets set. I put apple-touch-icon.png in my root directory and also link to it with the following code.

##### Apple icon code

```
<link rel="apple-touch-icon" href="apple-touch-icon.png" />
```

That will make sure it gets set.

#### Icon specs

The great thing about this is that you don't need to dress up your icon to match the iPhone theme. The software will round your corners and add the nice glossy effect for you.

Like the favicon, the Apple touch icon has a size requirement. Your icon must be 45x45 pixels to properly fit. I haven't tried to do it any other way; my gut tells that it would either crop the icon or squish it down the size.

#### In action

This is the Apple icon for csskarma.com:

![csskarma apple icon](images/apple-touch-icon.png)

Note that the corners are not rounded and I didn't add the Apple gloss.

In bookmarking a site on the iPhone/iPod you can "Add to Home Screen". This makes the bookmark look much like and app with the shiny icon and whatnot.

![iPhone menu - add link to home screen](images/add-to-home-screen.jpg)

Then your new Apple icon shows up on the home screen

![iphone home screen](images/iphone-home-screen.jpg)

A brilliant and easy bit of marketing for a site that anyone can jump on board with... you may want to dress yours up a bit more.
