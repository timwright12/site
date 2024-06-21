---
title: "Form Security with Autocomplete"
date: "2009-04-10"
tags:
  - "security"
layout: layouts/post.njk
---

![article banner](images/autocomplete.jpg)

I was looking through my blog this morning because I could have sworn I already wrote this post. I know I've had this conversation with Phil Nash of [Unintentionally Blank](http://www.unintentionallyblank.co.uk/). But I guess I never wrote it down? Oh well...

One of my pet peeves when filling out a form is when I click in the payment field and my credit crard / bank account number drops down because it was saved in the browser from last time I made a payment on that site. How is it that developers on these sites overlook that **huge** security issue?

There's a very simple fix for it, and it's called "autocomplete off":

##### The XHTML

```
<input id="pmt" name="payment" type="text" autocomplete="off"/>
```

The `autocomplete="off"` makes sure the text field doesn't expose any saved data. Of course, it would be too easy if this was valid XHTML so it's not. If you're concerned with writing 100% valid XHTML, there are valid ways to do this.

#### Writing valid code

To make this valid, we need to do it with JavaScript. Since I'm pretty sure most people who read this are jQuery freaks (like me), I'll show the jQuery version of this:

##### The XHTML

```
<input id="pmt" name="payment" type="text" />
```

##### The jQuery

```
$(function() {
$("input#pmt").attr("autocomplete","off");
});
```

#### The problem with added security with JavaScript

I don't really recommend using javaScript for this, only because it's easily disabled. And then you're back at square one with the payment info dropping down in the text field

Ideally, I'd like to use PHP to do this, but I can't find it anywhere so I'm using <noscript>:

##### The jQuery

```
$(function() {
$("form#paymentform").html("<input id="pmt" name="payment" type="text" autocomplete="off"/>);
});
```

##### The XHTML (placed inside the form)

```
<label for="pmt">Credit Card Number</label>
<noscript>
```

That way, if javascript is enabled you'll use the jQuery to write the textfield, and if it's not, you'll just write it out normally, which will be invalid, but more secure.

Let me know if anyone knows the PHP way to check for JS.
