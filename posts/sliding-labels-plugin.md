---
title: "Sliding Labels Official Plugin Release [ver. 3.2]"
date: "2010-06-29"
tags:
  - "javascript"
layout: layouts/post.njk
---

- [Plugin](/lab/jquery.plugins/jquery.slidinglabels.js)
- [Minified Plugin](/lab/jquery.plugins/jquery.slidinglabels.min.js)

**Version: 3.2 – Added a "className" option so you don't have to use ".slider" as the wrapper**

Version 3.1: Changed "children" to "find" so it will work with a UL. Thanks to [Oro](/blog/sliding-labels-plugin/comment-page-1/#comment-85490) for the feedback

Version 3 of Sliding Labels brought some big changes, the largest being that I finally converted it into a working jQuery plugin.

Maybe it was the 200 e-mails requesting an official plugin, maybe it was my curiosity. Whatever it was, I heard everyone and I wanted to let you know that I'm listening to all the feature requests and bug reports; and I really do appreciate them.

### Additions to version 3

**Plugin status**: Obviously creating an official plugin was the biggest change

**Position: relative**: It seemed like a lot of the questions I was getting had to do with adding `position:relative` to the .slider element in the CSS, so I just moved that into the script.

**Animation speed**: I added an option to easily control the animation speed. It can take strings like "fast" and "slow" or any numeric value.

**Axis option**: I got a lot of requests to add in some functionality to have the label slide up rather than only to the left. I added this in with an "axis" variable which can take either "x" or "y" for sliding direction

### Subtractions to version 3

**Label Color**: Originally I had this in the script so it looked nicer inline to the field, but I got to thinking that this really should be defined in the CSS, and it's just color; so I took it out.

### Using the plugin

Just like the previous version, you need an element wrapping the `<label>` and `<input>` elements. I use a `<div>` in the demo, but you can use whatever you'd like. The only requirement is that it have the class name "slider". I can change that if anyone finds it to be annoying, but **let me know and I'll update the script**

#### HTML

```

<div class="form-slider">
<label for="user">User name</label>
<input type="text" id="user" name="user">
</div>
```

#### JavaScript

```

$(function(){ $('#contactform').slidinglabels({
/* these are all optional */
className : 'form-slider', // the class you're wrapping the label & input with -> default = slider
topPosition : '5px', // how far down you want each label to start
leftPosition : '5px', // how far left you want each label to start
axis : 'x', // can take 'x' or 'y' for slide direction
speed : 'fast' // can take 'fast', 'slow', or a numeric value
});
});
```

That's all there is to it. Let me know what you think, any extra features you'd like and any bugs. I should be submitting this to [jQuery.com](http://jquery.com) in the next few days.
