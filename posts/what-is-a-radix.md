---
title: "What is a Radix?"
date: "2014-02-10"
categories: 
  - "javascript"
tags: 
  - "javascript"
---

The JavaScript method `[parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)` takes 2 arguments. The first being a string (or decimal) you want to turn into a rounded integer (like changing 1.2 into 1). The second value is something called a _radix_, and no one seems to be able to define it in plain english. Looking through the MDN documentation about `parseIn()`, and a plethora of good write-ups on the same topic it's generally known that when using the `parseInt()` method it's best (or typical) to use a radix of 10.

Using a radix argument of 10 will help output a predictable result. Without it, things can get a little funky. Check out the example below.

```
parseInt("0x4");  // returns 0, prefix 0x sets the default radix to 16
parseInt("0x4", 10); // returns 4
```

That's great, but no one seems to know what a radix is (at least not in the JavaScript world). We just use it. I decided to investigate.

## The Radix

Once I cut through all the crap and, "intellectual fluff" (as my 5th grade teacher called it) it was actually pretty straight forward. In `parseInt()`, **we use a radix value of 10 because our number system is based on 10 digits (0-9)**. For the value to process normally it's best to let JavaScript know that you want to use the _decimal number system_ (10).

I know what you're thinking: "What the other kinds of numbering systems are there besides the one based on 10 digits?" I researched more and found some others you may be familiar with:

- Decimal number system (this is the normal 0-9 one)
- Binary system (2 digital, 0 & 1)
- Hexadecimal system (16 digits)
- Base 64 (like Base64 encoding images)
- Byte (256)

There are some more but these are the ones I recognized, and I feel like it illustrates the point well enough.

That's what a radix value is and why it should (generally) be set to 10 when using `parseInt()`. Happy coding.
