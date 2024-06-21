---
title: "Learning ES6: Spread Operator"
date: "2015-12-23"
tags:
  - "javascript"
layout: layouts/post.njk
---

I got a little sidetracked.

This post was suppose to be about [Tagged Template Strings](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings?hl=en), but in my search for a real-life usage example of async loading data and a template (separately), then mashing them together (I couldn't really find one) I kept seeing a weird operator in the function examples. **It was an ellipsis**. I really hadn't see it before, but I could kinda tell what it was doing, so I continued down the path of Tagged Templates. Initially I thought it was pseudo code, but after seeing it a few times, I figured it was something in ES6.

When I realized that I needed to actually learn what this weird argument was, I stopped and Googled, "JavaScript ellipsis argument." What came back was the _[spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)_.

## Spread Operator

The spread operator is a way to pass a lot of data (an array) into a function. An example:

```
function wickedAwesome(...data){
  console.log(data); // Array[1] (the actual object)
}

var numbers = [1, 2, 3, 4, 5, 6];

wickedAwesome(numbers);
```

As far as I can tell this is different from passing the array directly because the latter will return the individual array items rather than the array object (try it).

This sort of function argument also works in reverse:

```
function wickedAwesome(x, y, z){
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // 3
}

var numbers = [1, 2, 3, 4, 5, 6];

wickedAwesome(...numbers);
```

You can also inject data into an array (which is kinda cool), mozilla uses this example:

```
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];

console.log(lyrics); // header, shoulders, knees, and, toes
```

Overall, I think the spread operator is pretty cool, support isn't great, but what is in ES6?
