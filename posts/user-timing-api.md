---
title: "Performance Testing with the User Timing API"
date: "2017-03-04"
tags:
  - "performance"
layout: layouts/post.njk
---

Performance is the first thing a user experiences on a site. In many ways it doesn't matter how amazing a user flow or IA appear to be, if a site won't load, users leave. This is why keeping a strong [performance budget](/blog/performance-budget/) and testing metrics are so critically important to creating a great end-to-end experience for users (and generating revenue).

When looking into ways of testing front-end performance for an application I stumbled upon the [User Timing API](https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API/Using_the_User_Timing_API), which is part of the [Performance Interface](https://developer.mozilla.org/en-US/docs/Web/API/Performance). At that point, I had never really dug into either of them, so I decided to share my research here.

## User Timing API

The User Timing API allows us to create named, application-specific, timestamps in the [performance timeline](https://www.w3.org/TR/performance-timeline/). The API gives us two kinds of entry types: **marks** and **measures**. Marks are timeline points in the application and measures are midway points between marks. As each mark and measure is executed, they are stored so you can access them at any time while the application is running (this prevents the application from getting sluggish as you add more timestamps).

### Marks

The most basic timing test you can run involves two marks (a start and an end), and the time it takes to get from the first mark to the second. The code below is an example of how to use two marks and return the timing information:

```
// Set the initial mark
performance.mark("initialize");

/* Do things in here */

performance.mark("complete");

measurePerformance();

// Function to output performance metrics
function measurePerformance() {

  var entries = performance.getEntries();
  var entryCount = entries.length
  var i;

  for ( i = 0; i < entryCount; i++ ) {

    console.log( " Name: "       + entries[i].name      +
                 " Entry Type: " + entries[i].entryType +
                 " Start Time: " + entries[i].startTime +
                 " Duration: "   + entries[i].duration  + "\n");
  } // end loop

} // end measurePerformance()
```

In the above example we're setting a start mark, an end mark, and executing some arbitrary code in the middle of them, then returning the entry information. This is a nice addition to an application if you're trying to time ajax calls or any method with a high level of processing (a really intensive loop, for example).

You probably wouldn't expose this sort of data to the user, but it will provide you some good insight into where performance bottlenecks exists in an application.

### Measures

A measure is a midpoint between two marks. It is created in a similar way, but the method takes three arguments:

```
performance.measure( "measureName", "startMarkName", "endMarkName" );
```

The measureName is whatever you want to call it (a string), startMarkName and endMarkName are the marks this measure is being placed between. To retrieve your measures you can use the _getEntriesByType()_ method within the performance object which will return an array of your data:

```
performance.getEntriesByType("measure");
```

or get them directly by name:

```
performance.getEntriesByName("measureName");
```

The combination of marks and measures and give you great insight in the performance of your application. It can even hook into commonly used events like [domComplete](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domComplete). This is a great addition to any engineer's toolset. I'm still in the early stages of testing the limits of this API so I don't have all the answers I'm looking for, but as a speed junky, I'm really looking forward to seeing what it can do to improve the UX of a site.

## Support

Support for the User Timing API is surprisingly strong. The [caniuse support table](http://caniuse.com/#feat=user-timing) says that we're good with IE10+, but no Safari. With appropriate support/feature testing I think this is 100% fine to use, especially since it's a developer feature and mostly likely would not be exposed to the user. Of course, if you need it, [there's always a polyfill](https://gist.github.com/pmeenan/5902672).

## Resources and Further Reading

- [MDN: User Timing API](https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API)
- [Understanding the User Timing API](https://www.html5rocks.com/en/tutorials/webperformance/usertiming/)
- [W3C: User Timing](https://www.w3.org/TR/user-timing/)
- [Discovering the User Timing API](https://www.sitepoint.com/discovering-user-timing-api/)
- [AppMetrics.js](https://github.com/ebidel/appmetrics.js)
