---
title: "Changing History with HTML 5"
date: "2011-08-19"
categories: 
  - "design"
  - "engineering"
tags: 
  - "api"
  - "history"
  - "html5"
  - "javascript"
---

**[Here's the demo](http://www.csskarma.com/lab/html5/history)** for those who like to jump right in.

The URL is an important piece of user experience in any Web site or application. We like using, what we call "talking URLs" so they're easy to say and remember, like [clearleft.com/is/richardrutter](http://clearleft.com/is/richardrutter/) (one of the best all time).

But as we build complex ajax and javascript-base apps with wild interfaces, we sometimes forget about the URL and just how important it is.

The HTML 5 History API aims to deal with that problem by letting you access the address bar directly and create _pushes_ to change the URL and inject (same domain) history into the browser.

### Feature detection

Step 1 to using any of the new HTML 5 goodies is testing for support. The History API works where you would expect it to (Gecko & Webkit, not sure about IE9). Testing for support is pretty basic:

#### Regular JS

```
if (typeof history.pushState !== "undefined") {
    //history api is supported
}
```

#### With modernizr

```
if (Modernizr.history) {
     // history api is supported
}
```

### The History Push

```
if (typeof history.pushState !== "undefined") {
     history.pushState([state to track], '[page title]', '[pushed URL]');
}
```

#### The pieces

**State**: This data will be passed into the "popstate", which deal with things like when the user click the back button.

**Page title**: This is the title that you see when you click and hold the back button (the menu that pops up) - not totally supported yet

**Pushed URL**: this is the url you want to display in the address bar. It's only limitation is that is has to be in the same domain (security).

#### Worked out history push

```
if (typeof history.pushState !== "undefined") {
     history.pushState(null, 'I love dogs', 'dogsrock.html');
}
```

**[In this demo](http://www.csskarma.com/lab/html5/history)**, you can see the URL changing but the page not reloading.

This is basically a slimmed down version of the [Dive in HTML5](http://diveintohtml5.org/history.html) documentation with some modifications to the history code, I slimmed down the detection a bit.

As usual, any comments, questions, criticisms are welcome. I left the back button broken so you can see it actually working.
