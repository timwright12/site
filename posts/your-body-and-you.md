---
title: "Your Body and You"
date: "2008-06-25"
tags:
  - "engineering"
layout: layouts/post.njk
---

About couple weeks ago I wrote a post called "[Styling your body](/blog/styling-your-body/)" which attempted to break the convention of using a "container" or "wrap" `div` when building a new site. I showed how to cut out a (usually) unnecessary `div` element and clean up your code. In this post I hope to show you how to cut down on your `HTML` even more by integrating a body class.

First off, let's look at the value of adding a `body` ID.

#### The Body ID

The `body` ID of _this_ site is "www-csskarma-com" (you can view source and check that out if you'd like). I picked up that method from a talk [Eric Meyer](http://meyerweb.com) gave at [An Event Apart - Boston in 2007](http://www.aneventapart.com/events/boston07/). He mentioned that to help users create custom style sheets, you can add a body ID to your site, so the user could add something like:

```
body#www-csskarma-com{
     font-size:5em;
}
```

To customize their experience with your site. This can help with accessibility and user experience. I know I use custom style sheets from time to time, so it _does_ help from a user standpoint. You can also see this same body ID technique on [Meyerweb](http://meyerweb.com/) & [SimpleBits](http://www.simplebits.com/) (SimpleBits actually uses a wrapper `div` with an ID of "simplebits", but it's the same principle).

For some reason, using this hasn't really taken off yet, but I think it's useful... so I always add it into any site I build.

There are a fair amount of sites using the `body` ID to tag individual pages, which essentially is the same thing, but I like to leave the ID for the site URL (www–csskarma–com).

#### The Body Class

Using a class on the `body` element is extremely helpful in cutting down on the number of classes used on a page, especially with a large site that has many different styles. And (IMO) the benefit of keeping clean, semantic HTML far outweighs the extra long CSS rules you have to use to reference an individual element.

**As an Example**: When building a site you may want to use an unordered list in the main content area of your homepage, but also in the main content area of your contact page. And to get them styled differently you might do something like this for the contact page:

**HTML:**

```
<ul class="contact-page-list">
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
```

**CSS:**

```
ul.contact-page-list{
	color:red;
}
```

But, if you use a `body` class your markup would look like this:

**HTML:**

```
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
```

**CSS:**

```
body.contact #content-main ul{
	color:red;
}
```

I know this may see like just taking a class from one element and adding it to another, but the `body` class can be applied to any element on the page, whereas the `UL` class only applies to itself and anything inside of it. Using a `body` class will ultimately cut down on the total number of characters in your CSS and speed up your load time (ever so slightly, but every little bit counts).

#### Generating the body class with PHP

When managing a large (or any) web site, you don't want to have to go into every single `body` element and put in a different class. So, to help with that, I created this PHP function:

```
<?php
//defining some global variables, change the SITEURL to your site
define(SITEID, "www-csskarma-com")
define(SITEURL, "http://www.example.com/");
define(DOMAIN, $_SERVER['HTTP_HOST']);
define(CURRENTURL, "http://" . DOMAIN . $_SERVER['REQUEST_URI']);

function myDir(){
	//removing index.php from the URL so it matches the one we set
    $clean_siteURL = str_replace("index.php", "", CURRENTURL);

    if(trim(SITEURL) == trim($clean_siteURL)){
        return "home";
    } else {
        return end(explode('/', dirname(!empty($_SERVER['REQUEST_URI']) ?
        	$_SERVER['REQUEST_URI'] : !empty($_SERVER['PHP_SELF']) ?
            $_SERVER['PHP_SELF'] : str_replace('\\','/',__FILE__))));
    }
}

//saving the function output to a variable
$dir = myDir();
?>
```

Then in your `body` you'd to this:

```
<body id="<?php echo SITEID; ?>" class="<?php echo $dir; ?>">
```

**So, what's happening here?**

We set global variables so we can use them in any function we create – not just this one. You could even make the clean URL a global variable if you wanted; I just chose not to in this example. It's important that you update the `SITEURL` variable to your web site URL. I also set the SITEID to www-csskarma-com in the `body` so it will generate both attribute values (and I can re-use the function/variables with minimal editing).

The function is checking to see if the current URL matches what you set as the home page. If it does, then it will return a value of "home." If not, it will return whatever directory your in. For example, if the current page is http://www.example.com/contact, it will return "contact." Your output will look like this:

```
<body id="www-csskarma-com" class="contact">
```

#### Closing it out

In a nutshell, I got into this habit by managing a fairly large department web site and it carried over into all the sites I do. I really like keeping my HTML as clean and as slimmed down as possible, so this method works well for me. And besides that... who decided that a class wasn't presentational markup? I'm not condemning it at all, just some food for thought.

Special thanks to [Akira\_x](http://twitter.com/akira_x "twitter") from [TSN](http://www.sportingnews.com "Sporting News") for helping me clean up the function.
