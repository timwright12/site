---
title: "Concatenating JavaScript"
date: "2014-06-15"
categories: 
  - "engineering"
tags: 
  - "javascript"
  - "js"
  - "performance"
---

I generally try and distance myself from unnecessary project overhead, mostly in the form of extra tools hanging around. For that reason, I really never fell in love with task runners like [Grunt](http://gruntjs.com/) and [Gulp](http://gulpjs.com/), but at the same time I see a lot of value in what they do.

One of the major things I do on a project is JavaScript concatenation (and minification), so I was happy to stumble upon this:

```
cat *.js > app.min.js
```

Running that on the command line will concatenate your JavaScript files. Nice little thing to have in your tool belt if you're looking to keep things simple.

This plus a Sass `--watch` gets me about 90% of the way on most projects.
