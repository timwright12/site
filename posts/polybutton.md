---
title: "Meet the Polybutton, An Accessibility Polyfill"
date: "2013-11-10"
categories: 
  - "accessibility"
  - "engineering"
  - "javascript"
coverImage: "polybutton.gif"
---

**Before we start,** I posted the solution over on Github, in my account under [Polybutton](http://github.com/timwright12/polybutton).

A couple years ago at the Boston version of [Global Accessibility Awareness Day](http://globalaccessibilityawarenessday.org/gaad.html) at [Carroll School for the Blind](http://carroll.org/) I listened to a visually impaired man tell a story that changed the way I viewed a seemingly small design element, the CTA (call to action).

We've all seen them, they usually look like buttons and use action-oriented phrases like: _Sign Up_, _Register_ and _View more_. To the human eye these are very interpretable as buttons, very few people would disagree with that, they stand out a great deal from the background, might have rounded corners and even a slight (or comically aggressive) gradient. To a machine reading through the semantic meaning behind them they're typically links (therein lies the problem). A sign up or register button may link to a page with a form, where a user can enter his or her information to start using a service. A _view more_ button (depending on it's function) might link to a gallery page where a user can consume more information. The point is, that a link has a very different semantic meaning and function when compared to a button and **when the computer and human are not on the same page, we encounter problematic gaps in communication**.

Anyway, to continue my story from the Carroll School (can you see where I'm going to take this?)...

**Setting the scene,** a visually impaired man is on the phone with a sighted user discussing a web page they are both currently visiting. One person is using a screen reader, the other is not. For a better story, we'll call the sighted user, "Samantha" and the visually impaired gentleman, "Allen."

Samantha is trying to help Allen register for a new service; she scans the page and finds the _register_ button about halfway down on the right and relays that information to Allen.

> "Oh, I see it... you need to click on the _register_ button."

Allen, using a screen reader, instructs the software to find a button with the text of _Register_, somewhere in the current document. Because the HTML behind the button is actually a link, the software never finds it, creating a bad user experience for Allen. He's frustrated and can't register for the service. Allen gets upset with Samantha, calls her a liar, hangs up the phone and the two long-time best friends never speak again. **Their lives are forever ruined because you designed a link to look like a button.**

OK, maybe I changed the ending a bit, but the point remains! When the designer, developer, user(s), and software are not on the same page we get experience (and accessibility) problems online. This issue has bothered me for a while, so recently (in the past month or so) I tasked myself with trying to fix it.

Through many [conversations](http://www.freshtilledsoil.com/the-dirt-button-accessibility/) with folks [at work](http://freshtilledsoil.com) and over Twitter I boiled it down to 2 main problems:

1. A gross mis-use of HTML, similar to using tables for layout
2. A problem in the communication chain with designers to sighted users, and sighted users to visually impaired users.

Because we can't force users to communicate our ideas exactly how we want (and we shouldn't), the problem needs to be fixed from a design & development angle and it must conform to how users perceive it. Ultimately it's our fault for miscommunication the purpose of an interface element to the user. It's certainly not Samantha's fault for calling something that looks exactly like a button, a button. And it's not the software's fault for not being able to find an element that doesn't exist.

Let's see where this little adventure into **accessibility experience design** took me, shall we?

## Setting Parameters for the solution

First thing I needed to do was set some goals for myself in finding a solution that can work for designers, developers, sighted users, and visually impaired users. So I came up with these parameters:

- Needs to meet the goals of a classic CTA (work for designers)
- Needs to use valid HTML (no making shit up)
- Needs to easily inherit natural styling without extra work we're not used to (intrgrate into current workflow)
- Needs to translate as a button to a sighted user
- Needs to translate as a button to a visually impaired user
- Needs to be keyboard accessible (natural tab index)
- **Needs to work without JavaScript,** or at least can't be made worse than our current solution

Lots of requirements for such a small project, but if the goal is for people to use it, it needs to slide into the current workflow and the barrier to entry needs to be as low as possible.

The main testing benchmarks I have for this experiment is: tabbing through the interface, and using [Apple's Voice Over](http://www.apple.com/accessibility/osx/voiceover/) as my screen reading software (and also common sense).

## Building and testing each solution

It was a fairly long road to get to a solution I was happy with, if something didn't meet even one of the requirements I laid out, I'd have to throw it away. I even threw out a couple just because they felt weird. From here, I'd like to take you through each potential solution and how I, eventually arrived at the **[Polybutton](http://github.com/timwright12/polybutton)**.

### Solution 1: Use a button and wrap it in a form

_Solution 1_ is something I saw in a (very old) piece of enterprise software I was customizing while I was working a [BU](http://bu.edu). At the time, I thought it was terrible. The basics of it where: wrap every CTA (that looked like a button) in a form with the form action set to it's destination like this:

```
<form action="http://www.google.com/">
  <button type="submit">Register</button>
</form>
```

It functions as a link, looks like a button, and works without JavaScript. Pretty much checks everything off the list that we need. Where this one fails, is that it's a gross misuse of a form submit. We're not passing any information with the form, so this should really be a link. Ultimately, this is no better than submitting a form with a link (which would be wrong).

Also, it feels super-weird, so I threw it out... moving on.

### Solution 2: Stop designing links to look like buttons

_My next instinct_ was to have a conversation with a design team and see if we could come up with a middle ground where there's a reasonably designed CTA that doesn't necessarily look like a button. Most problems like this can usually be solved with a short conversation to clear up any misconceptions about where design and implementation affect each other.

I did this, and it actually went very well, we came up with some alternate design solutions of CTAs. Totally awesome, right? Problems being solved by talking about them? Wild concept. There was a little resistance, but with everyone having a common goal of creating a great user experience, it was easy to brainstorm and bounce ideas back and forth.

I do, of course, realize that not every developer has the opportunity to have open dialogs with designers and higher-ups about seemingly small issues like this. Whether it's a matter of being way too busy to explain the concepts/problems, organizational issues within a company that don't allow that level of collaboration, or just doing some freelance work where a PSD gets tossed over the fence (this is awful) and you're expected to code it. For this reason, I can't in good conscience end the problem with a solution that's, "**stop doing that**."

I've always thought, in dealing with users doing something you see as, "wrong" you can fix it in 2 ways:

- Try and force them to do the thing you want (prevent sharing, being reactive to problems, etc)
- Listen to them and make it easier for them to accomplish their goal (e.g. Twitter implementing @ replies and hashtags).

Telling people to, "Stop designing like that," is totally a legitimate thing (IMO), but **there are real benefits in designing CTA to look like a button** (I say "button" and not, "clickable," because blue underlined text is one of the most clickable things on the Web and it looks nothing like a button). With that in mind, I wanted to find some happy middle ground so the solution is a little easier to integrate into the normal design process.

I also feel like offering a communication solution isn't quite as scalable as a tangible solution. So onward I went...

### Solution 3: Nesting links and buttons

In tooling around the Web one day I noticed that someone (my apologies, I can't remember exactly where) had dealt with this problem by wrapping CTA links in a button:

```
<button type="button">
  <a href="http://google.com">Register</a>
</button>
```

This solution looked very promising; it surprisingly executes the link, and you can find it with a screen reader via the button element wrapping it. I was curious about how far this could go, so I tried the inverse of a button wrapped in a link:

```
<a href="http://google.com">
  <button type="button">Register</button>
</a>
```

As it turns out, this functions pretty much the same way, the link executes just fine, and button is there for the screen reader. Where this solution failed was on tabbing through the interface. As you tab down the page, since both elements are focusable, you can get to them individually. **When you're focused on the button it won't execute the link.** I could have used some JavaScript to execute the link, but that's weird and certainly wouldn't work without JavaScript.

To solve the tabbing issue, I tried adding a tabindex of -1 to the button element. This makes the link the only thing that can be focused upon.

```
<button type="button" tabindex="-1">
  <a href="http://google.com">Register</a>
</button>

<a href="http://google.com">
  <button type="button" tabindex="-1">Register</button>
</a>
```

This version actually solved the button and the tabbing problems for me, so I starting working with some CSS objects to see if it was easy to style. It certainly wasn't difficult, but there was some weirdness in the nesting because I wanted to use a fairly standard convention of creating a css ".button" class. This all felt a like a little too much unnatural work to me, so I was learning towards dropping it. Just for kicks (and because it was really close to a solution), I ran it through a screen reader only to find that it failed miserably.

Because the tabindex was set it wouldn't read the buttons, and if I removed the tabindex, it was the same tabbing problem as before. So it failed anyway and I was back at square 1.

### Solution 4: Using an HTML polyfill, to generate proper markup & function

A few days ago, as I was drifting off the sleep (literally minutes away from from blissful shuteye), it came to me... an **HTML polyfill**! I was upset because I was really tired and I knew I'd be up until 2am coding and testing this out, but whatever. When you have to code, you have to code... so I coded. I was happy to find out the next day that my late night JavaScript was pretty coherent.

I'm a fairly active user of Scott Jehl's Picturefill - I like how it works, and most of all the implementation. I've worked with a lot of back end developers throughout the years who don't want to have anything to do with writing CSS or JavaScript. The common point of integration is the HTML. So, when I have the opportunity to write a plugin (of sorts) that uses HTML as the trigger instead of JavaScript, I usually try it. It also felt particularly applicable to this situation.

With that, I began building out a new markup structure, which I could modify with an the polyfill. This is ultimately where I landed for my best solution.

```
<span data-accessible="button" 
      data-type="button"
      data-value="Register"
      data-href="http://www.google.com"
      data-class="button">
  <noscript>
    <a href="http://www.google.com" class="button" rel="button">Register</a>
  </noscript>
</span>
```

That HTML, plus [including the JavaScript](https://github.com/timwright12/polybutton/blob/master/assets/js/polybutton.js) in your document will generate the **polybutton**, to make your CTAs look like buttons, but act like links. Any styling should be nothing different (might need to add a zero border, but that's it).

## Breaking down the Polybutton markup

Let's take a moment to break down the Polybutton elements so we're on the same page with what's happening the the HTML.

### span

I chose to use a span because there's no real semantic meaning behind it, and it's default display state of inline wouldn't interrupt the natural flow of the layout while allowing the button styles to come through. A very unobtrusive element overall.

### data-accessible="button"

This is the custom data attribute I chose as a trigger for the polyfill. At first I was using data-button="accessible", but I changed it to data-accessible="button" so I could possibly add more elements into the accessibility script for the future.

### data-type="button / reset / submit"

Data-type sets the type of button that will get generated, even though there isn't much reason to use anything other than "button" in this attribute, I wanted to open it up for any future possibilities.

### data-value="Register"

The data-value attribute is the text that gets outputted with the final generated button.

### data-href="http://..."

Data-href is the URL where the button/link should go when it's ultimately clicked by the end user.

### data-class="button"

This is the CSS class you want to use on the button, this makes it inherit the normal styles you would use on a button. I close to use a data attribute instead of a straight class just to make sure the normal button CSS didn't get applied to the `<span>` when the button is generated.

### noscript

The `<noscript>` element allows this method to function without JavaScript; it's pretty explicit, and just contains a normal link. For the edge case that JavaScript isn't enabled, it will just bring us back to square 1, which is the current solution of styling a link to look like a button. Alternatively, you could style the noscript link to look like a link (communication fallback).

## Is the problem solved? Can you use the Polybutton?

Yeah, totally. Well, maybe not, "solved," but I think it's OK for now and I think this is a great jumping off point for the future of these commonly used design elements.

Of course, I'll continue tweaking and finding bugs/optimizations but there's no reason you can't use this script right now. I would recommend putting it somewhere above your custom JavaScript, so the buttons will be in the DOM for any possible event bindings you may need.

Now that you've met the [polybutton](http://github.com/timwright12/polybutton), I hope you check it out on GitHub, and [chime in with your two cents](http://twitter.com/csskarma). I'm super-interested in seeing if folks try out this method and how it evolves.

If you have anything to add, [please let me know](http://twitter.com/csskarma). I'm tired of writing now, I'm going to stop for the day... and maybe see [Thor 2](http://www.rottentomatoes.com/m/thor_the_dark_world/).

**P.S.** Although a button ARIA role is generated by the JavaScript, I didn't use it by default because you **still need event bindings to the space bar** to make it function correctly. [Read more about the button role](https://developer.mozilla.org/en-US/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role).
