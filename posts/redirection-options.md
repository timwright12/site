---
title: "Redirection Options"
date: "2010-01-27"
categories: 
  - "engineering"
tags: 
  - "beginner"
  - "htaccess"
  - "javascript"
  - "meta"
  - "php"
---

![article banner](images/banner_redirection.png)

Lately, I've been having to work with a lot of redirects and I was going through different redirection options with a client. So I thought I would do a quick write up about the **different types of redirection**.

I also haven't seen a collection of these in one place, so I thought I would put this together.

There are a few different types that are commonly use when redirecting users:

- .htaccess / apache
- php header
- javascript
- meta refresh

The top two are the one's you'll be using most often, I don't really recommend the last two. But they _are_ available, so I think they're worth noting. So here they are in the order I would recommend:

### .htaccess / apache redirects

```
Redirect /old_directory http://example.com/newdirectory
```

This redirection is most efficient at the apache level, but if you're like me and are on shared hosting, getting into the apache installation probably isn't an option. In that case you can put this in an [.htaccess file](http://www.csskarma.com/blog/creating-an-htaccess-template/) in the root directory of your site.

Using an .htaccess redirection is great for moving entire sites because you can not only redirect a page, but you can redirect entire sites and subdirectories with one line of code.

### PHP header redirects

```
<?php header('Location: http://example.com/newdirectory/'); ?>
```

PHP header redirects are good for single page redirects and if you're not comfortable working with the .htaccess file. This code goes at the very top of the page you're trying to redirect. If it's not there you may get a "headers already sent" error.

If you're publishing out static HTML files, you can still use this by adding this code into your .htaccess file:

```
AddType application/x-httpd-php .php .html .htm
```

This will let you **execute PHP in an HTML file**.

### JavaScript redirects

```
<script type="text/javascript">
<!--
window.location = "http://example.com/newdirectory"
//-->
</script>
```

JavaScript redirects are generally not used unless you've exhausted the other two options. If you don't have access to the .htaccess file AND you can't run server-side script on your page, this is an OK fallback option, but you have to make sure to provide a link to the forwarding page incase a user is browsing without JavaScript.

### Meta redirects

```
<meta http-equiv="refresh" content="0;URL=http://example.com/newdirectory">
```

As your last option, I don't see this in the wild anymore, but it's worth mentioning that it does exist and does technically work (I'm not sure about it's validity in HTML 5). You would place this in the document HEAD with the rest of the meta elements.

content=0 is a second timer for the redirect, I have this one set to 0 so it will redirect immediately.

**Those are the options I've used in the past; did I miss anything? Maybe an ASP redirect? Let me know!**
