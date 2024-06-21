---
title: "Clickable Labels"
date: "2008-10-20"
tags:
  - "engineering"
layout: layouts/post.njk
---

In form design, there are many things you can do to improve usability, many of which have to do with `label` placement. I won't go into the depths of it, but Chris from [CSS-Tricks.com](http://css-tricks.com) wrote a good article about placement, not too long ago. [Read Chris's article here](http://css-tricks.com/label-placement-on-forms/)

#### Why read this?

This reason I'm sitting down to write this is to share a bit of usability I've come across on certain sites as I scour the Internet. Letting users know that a form label is clickable and will activate the associated form field.

This first came to me at the WDN conference in Vancouver last January, while I was listing to a Q&A session after a talk by [Derek Featherston](http://boxofchocolates.ca/), accessibility guru. Somehow the topic of users not realizing that form labels are clickable came up. And it got me thinking.

#### Background on labels

For anyone who doesn't know; this is the proper syntax for a form field and it's label.

```
<label for="name">Name</label> <input type="text" id="name"/>
```

Matching the label attribute "`for`" to the input attribute "`id`" will allow a user to click the form label and activate the corresponding input field.

There's no real problem with doing that, it's great, but the general public has no idea has that this functionality exists. And it can be very useful, especially when dealing with check boxes or radio buttons.

#### Secretly educating the user

How do we get this feature pushed to the user. You can't send out an e–mail to 50,000,000 users informing them that they can click the text next to a form field.

Adding in features (or letting people know that they are there), needs to be done in a way users will notice in their every day usage and it has to feel like a natural addition. So, we ask ourselves — what would make a user think something is clickable on a web site?

##### The code

```
label{cursor:pointer;}
```

And even maybe add something like this in:

```
label:hover{color:#777;}
```

Those code snippets will help bring clickable labels to the public (in compliant browsers, of course), letting them know of this little UI enhancement most web sites have, you could even go as far as to make you labels appear like links (but that might be a bit much).

#### Conclusion

Labels are already clickable, but Joe the Plumber, Internet user, has no idea, he just hates filling out forms and miss-clicking all the time. The hit areas of these form fields are already bigger than they appear, but now it's time we let our users know it, and make sure it comes naturally to them.
