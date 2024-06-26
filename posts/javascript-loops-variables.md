---
title: "JavaScript Micro-optimizations: Loops and Variables"
date: "2016-12-03"
tags:
  - "javascript"
  - "performance"
layout: layouts/post.njk
---

Creating loops in JavaScript can be one of the more resource intensive things you do on a project, especially if you're touching the DOM. While we can't really change how loops work, there are some micro-optimizations we can install to help them run a little more efficiently. These types of improvements are especially important with **Front-end Development** because these blocks run on the client, not server, so we can't really control the end user environment and it can directly impact the experience.

Each time you execute a block of code within a loop anything that wasn't previously defined, needs to be defined (Make sense right? How can something exist without being created?), and when you do that over and over again you can create memory leaks and small performance issues. While these issue probably won't be noticed by the user, they will pile up over time and _could_ cause an issue later on. For this reason, they're called "micro-optimizations" (macro-optimizations are the more obvious ones like concatenating files or using minification - they have major performance implications).

## Onto to Code

As an example, let's take a look at this block of code below. It's not doing anything special, but looping through all the buttons on a page and binding a click event to each. [You can also view the code in this Pen](http://codepen.io/timwright12/pen/vXLpKR?editors=1011).

```
// Get all the buttons
var buttons = document.querySelectorAll( 'button' );

  // Loop through all the buttons
  for( var i=0; i < buttons.length; i++ ) {

  // Attach a click event to each button
  buttons[i].addEventListener( 'click', function( e ) {

    // Log the result in the console
    console.log( this );

  } );
}
```

There are a few things we can do in this code block as far as caching and improving some micro-level performance. First off, the iteration variable (i) can be pulled out, along with the button length.

Inside our loop, we can pull out the button\[i\] object so it's initialized when the loop starts and also remove the anonymous function. This function doesn't need to be created each time the loop runs, so we can pull it out and define it elsewhere.

Below you'll find the cleaned up code. [You can also view the new code in this Pen](http://codepen.io/timwright12/pen/rrxprV?editors=1011).

```
// Get all the buttons
var buttons = document.querySelectorAll( 'button' );

// Cache a variable for how many buttons are on the page
var buttons_count = buttons.length;

// Initialize "i" so it's available when the loop starts
var i;

// Initialize a variable for the looping object so it doesn't have to be created in each loop
var obj;

// Predefine your function so it doesn't have to be reset within each loop
var process_event = function( e ) {
  console.log( this );
};

// Start the loop now that your variables are ready
for( i=0; i < button_counts; i++ ) {
  obj = buttons[i];
  obj.addEventListener( 'click', process_event );
}
```

Again, these kinds of optimizations may seem small, but will add up over time and if you're not caching variables already I promise you'll learn to love it if only to stop the [JS Lint](http://jslint.com) errors... ahhhh JavaScript!
