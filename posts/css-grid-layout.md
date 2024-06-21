---
title: "Breaking Down a CSS Grid Layout"
date: "2017-08-26"
categories: 
  - "css"
  - "engineering"
---

Web layouts evolve pretty quickly. First we used tables, next, floats and positioning, then inline block made a short appearance, followed by the almighty Flexbox. [CSS Grid](https://www.w3.org/TR/css-grid-1/) is the newest incarnation of the W3C trying to solve the problem of creating flexible layouts (whether you believe one exists or not). Either way there's a [new kid on the block](https://www.youtube.com/watch?v=By86PcLufOU), and you should know about it.

There are already a lot of great articles out there explaining in depth what you can do with Grid Layout (I linked to some of them at the bottom of this post), so I'm not here writing an "Intro to CSS Grid Layout," kind of thing -- you can get that by [Googling around a bit](https://www.google.com/search?q=CSS+Grid+Layout&oq=CSS+Grid+Layout). I'm going to focus on a few specific things and one grid declaration I came across recently:

```
.grid {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax( 200px, 1fr ) );
  grid-gap: 10px;
}
```

This rule has a lot going on in it, and I think if you can understand what's happening, you can have a functional grasp of how to use CSS Grid Layout and at least understand what properties are being applied when you see it in the wild.

To fully understand the above rule, let's break down each line and talk about what's going on.

## Grid Track (display: grid & grid-template-columns)

A term that you'll hear a lot when discussing Grid is, "Grid Track." A grid track essentially is a generic term for a column or row within a defined grid. This is where grid really differs from something like Flexbox. While Flexbox can deal with columns **OR** rows (one dimension), Grid deals with columns **AND** rows (two dimensions). When you use the CSS property _display: grid;_ you're setting your grid track to be all the direct children.

```
<div class="grid"> <!-- Grid parent -->
    <div></div> <!-- Children/Track -->
    <div></div>
</div>
```

The **_grid-template-columns_** property describes the track size of your columns. This includes stuff like: how many columns you need, how wide they should be, and if you want to name them. If you wanted to have a simple three column layout you might use something like:

```
.grid {
    display: grid;
    grid-template-columns: 25% 50% 25%; /* 3 columns, 1st: 25%, 2nd: 50%, 3rd: 25% */
}
```

[View grid-template-columns on CodePen](https://codepen.io/timwright12/pen/mMbRxE)

You can also use **_grid-template-rows_** to work with the vertical grid track. It takes all the same values, but it applies to the height instead of the width. Although we aren't using it in this example, it's still a very useful tool to know about so you can read [more about grid rows over on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows).

## Repeat

The repeat function allows the rule inside the parenthesis to be applied to all the columns in our grid track. This is great if you want all your columns to follow the same rules, but if you need uneven columns you can also set them explicitly like the previous example or: _grid-template-columns: 1fr 66% 1fr;_. That code will set a center column to 66% and the remaining two columns with take up the rest of the space equally.

Using the repeat function would look like:

```
.grid {
    display: grid;
    grid-template-columns: repeat(3, 33%);
}
```

[View the repeat() function on CodePen](https://codepen.io/timwright12/pen/OjLWEp?editors=1100)

In our original example, we're using the _**repeat()**_ function to execute the same code more than once ( **_repeat( auto-fit, minmax( 200px, 1fr ) )_** ). It contains a lot more than the standard, "here are the columns repeating" syntax we just spoke about, so let's dive into this rule and talk about: _**auto-fit**_, _**minmax**_, and the _**fr**_ unit to gain a little more clarity about what's happening here.

## Auto-fit

The auto-fit keyword is like saying, "fit as many columns as you can in this track based on the applied rules." This is a nice way to create flexible layouts if you have a variable amount of columns in a row. These columns will also reflow based on screen width, so while you may have 5 columns on a wide screen, you may only have 2 on a narrow screen, depending on the available space. Auto placement of columns is a powerful feature in CSS Grid Layout, but the coolest part is that this is done without any media queries, just some nice clean, smart CSS.

If you wanted to create a simple layout using auto-fit you might use something like:

```
.grid {
    display: grid;
    grid-template-columns: repeat( auto-fit, 200px );
}
```

The above example would produce a series of 200px wide columns, bumping to the next row when they don't fit properly. [View the auto-fit keyword on CodePen](https://codepen.io/snookca/pen/MpMqMQ)

_**Auto-fit**_ also has a similar keyword called "_**auto-fill**_." The two work in similar ways, but since it isn't included in our original code, you can [read more about auto-fill on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout).

The _**auto-fit**_ and _**auto-fill**_ keywords are almost always pair with the _**minnax()**_ function, which is really the magic in creating a flexible column layout, so let's move right on to that one.

## Minmax

The minmax() function defines an upper and lower limit for your grid track size. In our case we're saying. "columns in this track can't be smaller than 200px and they can be as large as 1 fraction unit (the rest of the space)." We'll get into the fraction unit in the next section.

grid-template-columns: repeat( auto-fit, minmax( 200px, 1fr ) );

When we combine this with the auto-fit properly you'll see columns fill out a row based on the available space, but also break to the next line when there isn't room. It produces a responsive layout without any media queries (pretty cool, right? RIGHT?!?!).

This function is really helpful when trying to create responsive tracks. You can [read more about minmax() over at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax).

[View this minmax() demo on CodePen](https://codepen.io/timwright12/pen/JyovMP)

## FR Unit

The _**fr unit**_ is very common when using CSS Grid Layout. It stands for, "fraction" unit and it is meant to take up the remainder of the space in a column. If you wanted to set a column to 200px, and have another fill up the rest of the page you would do that with a fraction unit like:

```
.grid {
    display: grid;
    grid-template-columns: 200px 1fr;
}
```

In our case we're using it to tell the browser the maximum width for a column, but you can also use it to create fully flexible layouts, just like you would use percentages. The fraction unit also has the advantage of working really well with mix values (px, %, em, etc.) and being build right into the CSS Grid Layout specification.

## Gap

Grid-gap is probably the most straightforward part of this rule. The gap is the amount of space in between each grid item. In our example it is set to 10px, so when the cell widths are calculated in the browser it will always leave a 10px gap for us. Pretty easy, not much more to say about that.

## Resources and Further Reading

Now that you have a little more knowledge about CSS Grid Layout checkout these for further reading:

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/) from W3C
- [CSS Grid Layout documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) from Mozilla Developer Network
- [An Introduction to CSS Grid](http://www.lottejackson.com/learning/an-intro-to-css-grid) by Charlotte Jackson
- [An Introduction to the 'fr' Unit](https://css-tricks.com/introduction-fr-css-unit/) by Robin Rendle
- [Building Production-Ready CSS Grid Layouts Today](https://www.smashingmagazine.com/2017/06/building-production-ready-css-grid-layout/) by Morten Rand-Hendriksen
- [Spring into CSS Grid](http://jonibologna.com/spring-into-css-grid/) by Joni Trythall
- [Container Grids](https://snook.ca/archives/html_and_css/container-grids) by Jonathan Snook
- [Introducing auto-fill and auto-fit](https://gridbyexample.com/video/series-auto-fill-auto-fit/) by Rachel Andrews
