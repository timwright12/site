---
title: "A True CSS Table"
date: "2008-05-23"
categories: 
  - "engineering"
tags: 
  - "css"
  - "tips"
  - "xhtml"
---

A few years ago I while I was working at a community college in Virginia I was building a site for their Arts & Sciences department and trying out some think, different colored borders for the site container and I noticed that when two borders intersect they form a diagonal line. You can see it if you try out this code:

```
div{
border:20px solid red;
border-top-color:blue;
border-bottom-color:green;
}
```

[or see the example](http://www.csskarma.com/lab/csstable/postexample.html)

I thought it was neat, but didn't think too much about it. Then about a year later I saw [Eric Meyer's Slantastic](http://meyerweb.com/eric/css/edge/slantastic/demo.html)

Shortly after that, I created [CSS Shelves](http://www.csskarma.com/lab/css_shelves) based on the search box area of [webmonkey](http://www.webmonkey.com)

This morning I found myself thinking about tables for some reason and in a moment of clarity (while reading [css-tricks](http://css-tricks.com/the-css-ah-ha-moment/)) I thought to myself "CSS Tables... hmmm... CSS _tables_... a table doesn't have to look like a table, but what if it looked like an actual table (like a kitchen table)." I wondered if I could make it happen, could I take a semanticlly marked up XHTML table and make it look like a kitchen table? After a few hours of coding the answer was becoming clearer to me... "kind of".

What do I mean? Check out my [true CSS table](http://www.csskarma.com/lab/csstable/).

99% image-free CSS, unfortunately I broke down around hour 4 or 5 and used 1 background image (feeling all sorts of shame). But I came out with a nice looking table with a transparent top, that gets **destroyed** in IE. I decided to only make it for Firefox 2 since it's pretty much just a novelty item and has very few practical uses other than [decoration](http://www.zeldman.com/2008/05/06/content-precedes-design/).

It is, however (in my opinion) a pretty neat trick and a great way to show the power CSS has over the presentation of (X)HTML. A table (or any element) doesn't have to look the way the browser intended.

This is how I did it:

First off, I made up some data and filled it into a semantic table using ids, headings, table headers, axis, and any table attirbute available that I could use to grab control of each cell. You can [view source on the example to see the mark up I used](http://www.csskarma.com/lab/csstable/).

Next, I started building the legs:

```
th{position:absolute;font-weight:700;}

th[scope="col"]{
border:1px solid #999;
border-right:10px solid #888;
padding:250px .5em 0;
font-weight:700;
z-index:99;
}

/*table legs*/
th#us{top:160px;left:-350px;}
th#cdn{top:20px;left:-150px;}
th#aus{top:20px;left:150px;}
th#uk{top:160px;left:-50px;}

th#tables{top:-160px;left:-180px;}
th#chairs{top:-120px;left:-235px;}
th#doors{top:-80px;left:-290px;}
th#dressers{top:-40px;left:-355px;}
```

After that, I styled and positioned the data

```
th[scope="col row"]{
background:#fff;
position:absolute;
left:261px;
top:-5px;
height:50px;
width:50px;
}

td{position:absolute;text-align:center;width:90px;}

td[headers="us tables"]{top:-160px;left:-130px;}
td[headers="us chairs"]{top:-120px;left:-180px;}
td[headers="us doors"]{top:-80px;left:-230px;}
td[headers="us dressers"]{top:-40px;left:-280px;}

td[headers="cdn tables"]{top:-160px;left:-50px;}
td[headers="cdn chairs"]{top:-120px;left:-100px;}
td[headers="cdn doors"]{top:-80px;left:-150px;}
td[headers="cdn dressers"]{top:-40px;left:-200px;}

td[headers="aus tables"]{top:-160px;left:30px;}
td[headers="aus chairs"]{top:-120px;left:-20px;}
td[headers="aus doors"]{top:-80px;left:-70px;}
td[headers="aus dressers"]{top:-40px;left:-120px;}

td[headers="uk tables"]{top:-160px;left:110px;}
td[headers="uk chairs"]{top:-120px;left:60px;}
td[headers="uk doors"]{top:-80px;left:10px;}
td[headers="uk dressers"]{top:-40px;left:-45px;}
```

Lastly, I had to build the table top

```
table{
position:relative;
top:100px;
border-top:200px solid #eee;
border-left:0;
border-right:220px solid #fff;
width:600px;
z-index:50;
}

caption{
font-size:1.5em;
position:absolute;
top:100px;
left:0;
line-height:100px;
margin:-130px 0 0 0;
padding:30px 0 0 0;
border:0;
border-bottom:180px solid #ddd;
border-left:260px solid #fff;
z-index:50;
}

thead{
position:absolute;
height:199px;
width:400px;
background: transparent url(edge.gif) no-repeat 0 0;
left:424px;
top:101px;
z-index:99;
}

tbody{
position:absolute;
border-right:240px solid #e3e3e3;
border-top:180px solid #ddd;
top:100px;
left:425px;
z-index:90;
background:#eee;
height:20px;
width:20px;
}
```

You may have noticed that I use `edge.gif`... unfortunately it's to cover up, what looked like a peice of table cloth hanging off the edge of the table. I used a little more absolute positioning than I would have liked, but hey, this was a tough one!

Anyway, I'd love to get some feedback on this, find out what everyone thinks and if you can offer and improvements short of loading the table up with classes to get it to work in IE. It was a fun little project for today, and I hope you all enjoy poking through the code.

[The final product](http://www.csskarma.com/lab/csstable/) (Firefox, load in IE for a laugh) [download the CSS](http://www.csskarma.com/lab/csstable/table.css).

with ease, tim
