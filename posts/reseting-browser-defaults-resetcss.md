---
title: "Reseting Browser Defaults (reset.css)"
date: "2008-02-06"
categories:
  - "engineering"
---

I've heard a lot of arguments for and against the CSS reset file and most recently had a short conversation with [Jonathan Snook](http://snook.ca/jonathan/) about it. He's seemed to be avidly against the use of a reset file due to the extra code you need to make it happen. As a CSS person, I like dumping as much stuff as I can into my CSS rather than javaScript, so I'm all for reseting the crappy browser defaults.

After I read [Andy Clarke's Transcending CSS](http://www.transcendingcss.com/) about 6 months ago I started using the one he has in the book. And then [Eric Meyer](http://meyerweb.com) released a version on his blog. Ever since then I've been using a hybrid of the two and I added a little extra in there for myself.

Eric and Andy's reset files don't include reset rules for the HR element, rightfully so; it's damn near impossible to get it right since IE treats it weird (try it, you'll see). So I added the HR into my version of the reset file, it's not perfect, but I think its better than the default value... and really...how often do you use a horizontal rule? I rarely do.

So today I was poking around my reset file and decided to remove some of the absurd elements that I've never used but somehow found their way into my reset file, like _q_, _var_ and _dfn_. I have never once used those elements; so I took them out, slimmed down the file a little and thought I'd FINALLY release it. So here it is:

```
/**
* reset browser defaults
----------------------------------*/
body,div,dl,dt,dd,ul,ol,
li,h1,h2,h3,h4,h5,h6,
pre,form,fieldset,p,
blockquote,th,td          {margin:0;padding:0;}
body                      {line-height:1;color:#121212;background:#fff;}
h1,h2,h3,h4,h5,h6,p       {font-size:100%;font-weight:400;}
ol,ul                     {list-style:none;}
caption,cite,code,th      {font-style:normal;font-weight:400;}
fieldset,img              {border:0;}
caption,th                {text-align:left;}
:focus                    {outline:1px dotted #eee;}
table                     {border-collapse:collapse;border-spacing:0;}
hr                        {border:0;border-top:1px solid #555;margin:0;height:1px;}
```
