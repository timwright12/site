---
title: "Learning ES6: `let` Declarations"
date: "2015-12-07"
tags:
  - "javascript"
layout: layouts/post.njk
---

In dipping my toes into ES6 more and more, I want to make sure I fully understand each feature and it's ES5 fallback before I move forward and adopt it. It's a little over the top, I know, but it's how I am. If my compiler were to break for some reason, I want to make sure I can still parse through and effectively write my code.

Right now, I'm digging into `let` vs `var`. This is where I'll be documenting it.

## let

Let introduces a concept to JavaScript called "block scoping." It's been around in other languages for years, but is just now (sorta, just now - I realize this has actually be around for a while, it's just not supported well enough yet) being introduced into JavaScript. The best way I can describe it is by example:

### Using Var

```
function a() {

  var b = 1;
  if(b) {
    b = 2;
    console.log(b); // 2
  }

  console.log(b); // 2

}
```

### Using Let

```
function a() {

  var b = 1;
  if(b) {
    let b = 2;
    console.log(b); // 2
  }

  console.log(b); // 1, because "2" is block-scoped inside the if statement

}
```

The difference in the 2 examples is that when we use let, the variable gets stuck (scoped) inside the curly braces {...} (aka, a block).

## Why would I use this?

I'm not sure. Well, that's not true, I know _why_ to use it (block scoping), I just haven't had much of a problem with it in the past so making a switch isn't completely clear. I've seen people completely drop `var` in favor of `let` and it looks perfect valid. For me, I think it'll be a case-by-case usage, but I do like it overall.

To an extent, we already use it with for loops:

```
for (var i=0; i<5; i++) {...}
```

That's a stylistic choice (and optional, I might add). Kyle Simpson goes into detail about stylistic block scoping in [his write-up about let](https://davidwalsh.name/for-and-against-let). It tells us to only use `i` within the scope of the loop. To use `let` it's just:

```
for (let i=0; i<5; i++) {...}
```

Not bad and pretty straight forward.
