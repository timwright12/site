---
title: "Using .htaccess to Prevent Bandwidth Theft"
date: "2009-04-02"
categories: 
  - "security"
tags: 
  - "htaccess"
  - "http"
---

![article banner](images/bandwidth-theft.jpg)

Every once in a while Google Analytics will turn up a peculiar behavior where you can tell someone is linking directly to an image hosted on your Web server. Sometimes it can be for good reasons like giving you credit for a project, or make sure files are synced up (cross-domain projects); but it's usually just out of ignorance or laziness (or myspace).

Either way, hotlinking images like that steals your bandwidth and can effect the performance of your server. So you want to stop it.

There are a few ways you can do this; some people output a special image to a bandwidth thief that says something like "Stop stealing my images". I don't like that mainly because you're intentionally degrading your bandwidth to teach someone a lesson about hotlinking? Bleh.

I prefer using a 403 error, it works just as well in my opinion, and gets the point accross.

##### .htaccess code

```
RewriteEngine On
RewriteCond %{HTTP_REFERER} !^http://(.+\.)?csskarma\.com/ [NC]
RewriteCond %{HTTP_REFERER} !^$
RewriteRule .*\.(jpe?g|gif|bmp|png)$ - [F]
```

`   Put that in your .htaccess file (in your root directory). If you don't have an .htaccess file, just create an empty file in the root and name it ".htaccess". Then put this code in there and you'll be good to go.  Don't forget to change out "csskarma" for your web site. You'll definitely notice if you forget that bit.  #### What's going on  Turn on the rewrite condition:  ``` RewriteEngine On ```  Match any request for csskarma.com (NC means "no case" it will match upper or lower case requests):  ``` RewriteCond %{HTTP_REFERER} !^http://(.+\.)?csskarma\.com/ [NC] ```  Allow empty requests, these are harmless and often 404 errors anyway  ``` RewriteCond %{HTTP_REFERER} !^$ ```  Replace the stolen image with a 403 "forbidden" error  ``` RewriteRule .*\.(jpe?g|gif|bmp|png)$ - [F] ```   `
