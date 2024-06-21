---
title: "Modular vs. Singular CSS"
date: "2007-11-30"
categories: 
  - "engineering"
---

I posted this to the [regular site](http://www.csskarma.com/articles/singular_vs_modular_css/ "http://www.csskarma.com/articles/singular_vs_modular_css/") too, but wanted to open it up for comments

### Modular

There's a software development principle that has grabbed my attention lately that I wanted to talk about. Most of the developers I interact with are heavy in software & PHP/MySQL, rather than web so naturally they have a hardcore programmer mentality. The principle that I've had drilled into my head has been _keep things modular_.

So we take what's been drilled into our heads and apply it as we can; I did it with my CSS (keeping it modular) with using a master style sheet with import rules

##### CSS: master.css

```
@import url("reset.css");
@import url("global.css");
@import url("layout.css");
@import url("nav.css");
```

Something like that.

#### Up side

Keeping your CSS modular like that is fantastic for maintenance. You can split it up into as many pieces and you want, and update the live site however you want. I like doing this to release a site upgrade is sections rather than in one large chunk.

#### Down side

The down side to using a modular CSS file structure design is that every URL you import to the master.css file is another HTTP request you have to make to the server, and that will have negative effects on site performance. So you have to balance your ease of updating with how well you want your site to perform. The same principle can be applied to JavaScript

### Singular

Keeping all your CSS (or JS) in one large file is pretty self-explanatory so I'll just get right to it...

#### Up side

This will cut down on your HTTP requests, hence speeding up your page. Also the 1 CSS file is usually a little smaller than the combination of all the imported ones plus the master.css

#### Down side

The down side to this is that it makes it tougher to maintain, but as long as you comment you code you shouldn't have a huge problem

My personal preference to this issue is to keep things modular while I'm in development and then switching to a singular style sheet right before a launch. I do think it's important to take site performance into consideration. Since 80%-90% of the load time on a page comes from the front end, things like optizing images, compression and semantic XHTML are very important.

### Site optimization tools

- [CSS Validator](http://jigsaw.w3.org/css-validator/)
- [XHTML Validator](http://validator.w3.org/)
- [Speed report](http://www.websiteoptimization.com/services/analyze/index.html)
- [Clean CSS](http://www.cleancss.com/)

OK, that's all I have for now

with ease, tim
