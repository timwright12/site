---
title: "Detecting for Bandwidth with the Network Information API"
date: "2012-05-11"
categories: 
  - "engineering"
tags: 
  - "html5"
  - "javascript"
---

**First things first: [view the demo](http://www.csskarma.com/lab/_javascript/network-connection/).**

One of the principles we build sites by is to never resize an image in HTML but rather size the image appropriately in Photoshop, Fireworks, or whatever you use. We do this so the user doesn't have to waste bandwidth by downloading a larger image than is necessary for the situation. Sounds great right? Totally reasonable.

When media queries and responsive design began to get heavy traction images started to present a real problem because using a single image on a large screen with high bandwidth didn't necessarily work on a small screen with low bandwidth (let's face it, we're talking about a phone here). Using a single image makes sense in theory, but maybe not so much in practice. The famous [Boston Globe redesign](http://unstoppablerobotninja.com/entry/the-boston-globe/) was the first (notable) site to try and tackle this problem on a large scale. I'm not exactly sure why it's apparently ok now to resize image with CSS, but still bad to do it in HTML, but that seems like a topic for another day.

I won't get into the specifics about how they did it because I heard there were a lot of problems with the method (and I forget exactly what went on). The important thing that came out of successes and failures of that project was that it kick-started the discussion about what exactly we should do to deal with this image (or really asset management) problem.

Scott Jehl came up with an interesting solution via the [picture element](https://github.com/scottjehl/picturefill). While I don't think inventing new standards is quite the answer, the method seems sound.

### The Detection Stack

When I'm building a site I can generally boil an interface down to a couple detection points:

- detect screen size to modify the design
- detect for touch capabilities for modify the interface

I'd like to add one more to that: **detect bandwidth level for asset management**.

### Detecting for Bandwidth

The focus of image loading, so far has been based on image dimensions and screen-size; I think what really matters there is **file size** and **available bandwidth**. Just because browser window is small doesn't necessarily mean it can't handle a high-res image.

On a recent project I was looking for a way to test online/offline state, I came across [Using navigator.connection in Android](http://davidbcalhoun.com/2010/using-navigator-connection-android). Which is a blog post covering the [Network Information API]( http://www.w3.org/TR/netinfo-api/).

I built out a simple demo based off the blog post which checks bandwidth and returns another image version. To set up the HTML, we're using a normal <img> tag and loading in the small version of the image incase nothing works, you'll get the small version:

#### HTML

```
<img src="images/small-fella.jpg" data-large="images/large-fella.jpg">
```

Using the data-large attribute let's use store the image inside the <img> tag, so it feels more natural.

The JavaScript will check the bandwidth using the network information API, loop through all the img\[data-large\] and re-set the image src attribute.

#### JavaScript

```
(function(){
    
    // initialize some variables
    var connection,
        connectionSpeed,
        images = document.querySelectorAll("img[data-large]"),
        imageCount = images.length,
        i;
    
    // create a custom object if navigator.connection isn't available
    connection = navigator.connection || { 'type': '0' };
    
    // if statement checking for WIFI, ETHERNET or UNKNOWN
    if(imageCount > 0 && connection.type === '0' || connection.type === '1' || connection.type === '2') {
        
        // loop through each image with the data-large attribute
        for (i = 0; i < imageCount; i = i + 1) {
            
            var obj = images[i],
                largeImg = obj.getAttribute('data-large');
            
            // reset the image src to the larger version of the image
            obj.setAttribute('src', largeImg);
            
        }
        
    }
})();
```

In the [demo](http://www.csskarma.com/lab/_javascript/network-connection/) there's also a switch statement outputting a string for the connection type. I'm adding it to the HTML, but you could easily add it as a class to the body so it's globally available and usable with the CSS.

Cool right?

### Support

It doesn't really work anywhere. There are rumors of Android support but I personally testing the demo I built for this write-up on the latest Android OS and it didn't work. Hopefully we'll get there soon because I think this a great API.
