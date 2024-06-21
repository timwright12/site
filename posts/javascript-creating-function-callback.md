---
title: "JavaScript: Creating a Function with a Callback"
date: "2015-02-04"
categories: 
  - "engineering"
tags: 
  - "javascript"
---

Something I seem to do a lot of when writing JavaScript is creating [callback functions](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/). I like them, they help with execution order, and [promises](http://www.html5rocks.com/en/tutorials/es6/promises/) aren't [supported](http://caniuse.com/#feat=promises) enough for me to make the jump over to them quite yet without a reliable polyfill (although they're very nice). As in anything you need to careful when using callbacks or you'll find yourself in, "callback hell," as they say (there's also coming called, "promise hell," so you're doomed either way if you abuse them).

Here's a quick template for creating a method with a callback. Nothing fancy, just a helpful little code snippet I hope you enjoy.

```
// Always namespacing!
var App = {

  method : function (value, callback) {

    // just doing something generic so we know the method worked
    console.log(value);  

    // make sure the callback argument is a function before calling it
    if (typeof callback === 'function') {

      // call the function
      callback.call( this );

    } // end if
  
  } // end method()

} // end App

// call the method with a callback
App.method('Hey there', function(){
  
  // this is the callback function
  console.log('callback was executed!');

}); // end method call
```

Remember, [don't abuse the callback](http://callbackhell.com/).
