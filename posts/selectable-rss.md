---
title: "Selectable RSS with SimplePie and jQuery"
date: "2009-08-17"
categories: 
  - "engineering"
tags: 
  - "advanced"
  - "ajax"
  - "rss"
  - "simplepie"
  - "ui"
---

![banner](images/simplepieloader.jpg)

I was building an RSS reader for a project last week and it turned out to be a cool little app. So I thought I'd share some of the code.

[View demo](http://www.csskarma.com/articles/examples/simplepieloader/)

[Download demo files](http://www.csskarma.com/articles/examples/simplepieloader/simplepieloader.zip)

Let's start off with the HTML we need to get some user interaction with the form. It's a pretty basic, just some of checkboxes.

![form with 4 checkboxes](images/simplepie_form.png)

##### HTML

```
<form action="" method="post" id="selection">
  <h2>Choose your news sources</h2>
 <!--
  Setting all the checkbox names to "source[] helps us build the array on submit"
  We're also adding the RSS feed url to the checkbox value so we can save it in the array values
  -->
  <ul>
  <li><input type="checkbox" id="csskarma" name="source[]" value="http://www.csskarma.com/blog/feed/"/><label for="csskarma">CSSKarma</label></li>
  <li><input type="checkbox" id="cnn" name="source[]" value="http://rss.cnn.com/rss/cnn_topstories.rss"/><label for="cnn">CNN</label></li>
  <li><input type="checkbox" id="espn" name="source[]" value="http://sports-ak.espn.go.com/espn/rss/news"/><label for="espn">ESPN</label></li>
  <li><input type="checkbox" id="vitamin" name="source[]" value="http://feeds.feedburner.com/vitaminmasterfeed"/><label for="vitamin">Think Vitamin</label></li>
  </ul>

  <!-- Setting the submit name to "btn" -->
  <input type="submit" value="submit" name="btn" id="btn-submit"/>
  </form>
  </div><!--/#selectnews-->
```

The only real thing worth noting in the form code are the names of the checkboxes. We use all the same name to group them together and the \[ \] helps create the array on submit. I just chose to use `source[]` because it made sense to me, but you can use anything as long as the names are consistent and the brackets are there. Just adjust your PHP accordingly.

##### SimplePie PHP

```
<?php
/* Get the SimplePie library */
require_once ('inc/simplepie.inc');

/* Create a new instance of SimplePie */
$feed = new SimplePie();

/* Get array */
// If the form has been submitted and the user selected news sources
if (isset ($_POST['btn']) && isset($_POST['source'])) {

    // Save the array of news sources to a variable $checked
    $checked = $_POST['source'];

    // Pass the array of news sources through the SimplePie set_feed_url() function
    $feed->set_feed_url($checked);

    // Also, save this data to a cookie called "feedurls" that will expire when the browser closes
    setcookie('feedurls', serialize($checked));

// If the form wasn't submitted look for the "feedurls" cookie
} else if (isset ($_COOKIE['feedurls'])) {

	// If the cookie was found, pass the data through set_feed_urls()
	$feed->set_feed_url(unserialize($_COOKIE['feedurls']));
}

/* Set item limit */
$feed->set_item_limit(3);

/* Enable caching */
$feed->enable_cache(true);

/* Provide the caching folder */
$feed->set_cache_location('cache');

/* Set the amount of seconds you want to cache the feed */
$feed->set_cache_duration(1800);

/* I don't know what "init" means */
$feed->init();

/* Handle the content type (atom, RSS...) */
$feed->handle_content_type();
?>
```

This is nothing that can't be read in the comments, but the guts of the PHP comes in right under the "Get Array" comment. We're checking to see if the form was submitted and the user selected news sources; if so, dump the values into SimplePie and save them to a cookie we can refer to later. The initial idea was for this to live at a pretty open place (a computer lab or something), that's why the cookie expires on browser close.

I limited the per-feed output to 3 to keep it a little clean, but you can set that to whatever you want. It'd be pretty easy to let the user choose this as well with a select menu:

```
<select name="displayNumber">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
</select>
```

And replace `$feed->set_item_limit(3);` with `$feed->set_item_limit($_POST['displayNumber']);`. There may be some extra tweaking beyond that, but the general idea is to pass the submitted value into SimplePie.

##### jQuery

Now that we have the form fully functional we can layer some JavaScript on top of it to make it a little more _nifty_. This is using the [jQuery Form Plugin](http://malsup.com/jquery/form/). It's the first time I've really used this plugin, but it's actually pretty nice and easy to use. I had some little quirks with it, but nothing too major.

```
$(function() {
	
/* If JavaScript is active create a link to slide the form out */
$('#getform a').click(function(){
	$('#selection').slideToggle('slow');
	return false;
});//
	
/* make it look like something happened */
$('#selection, #reader').hide(); //
$('#reader').fadeIn('slow'); //
 
 /* bind form using 'ajaxForm' */
$('#selection').ajaxForm(options); 

/* Submit form via Ajax */
var options = { 
    target:       '#rssloader',
}; //

});// End jQuery
```

[View demo](http://www.csskarma.com/articles/examples/simplepieloader/)

[Download demo files](http://www.csskarma.com/articles/examples/simplepieloader/simplepieloader.zip)

Anyway, that's all I have for today. It's a pretty unpolished demo so let me know what you think, where I screwed up and if you can build on it and make it better. I'll try to write some more soon.

##### Ingredient list

- [SimplePie](http://simplepie.org/downloads/)
- [Starter files from CSS-Tricks](http://css-tricks.com/video-screencasts/55-adding-rss-content-with-simplepie/)
- [jQuery](http://code.google.com/p/jqueryjs/downloads/detail?name=jquery-1.3.2.min.js&downloadBtn=)
- [jQuery Form Plugin](http://malsup.com/jquery/form/)
- [Hill's Brain](http://sharkcool.net)
- Coffee
