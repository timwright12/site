---
title: "Creating an .htaccess template"
date: "2008-09-11"
tags:
  - "engineering"
layout: layouts/post.njk
---

Recently I decided to finally sit down and organize some things on my site/server. I created dev server, and did some other things that I had been wanting to do for a while.

While I was putting together my usual .htaccess file I thought that maybe I could build it a little better and create a file template that I can use in the future when I'm doing something like this again (since, I know this will come up again). So I did a little research about things I knew I wanted to add in like the 404 error page rewrite rule (which many tutorials seem to omit) and denying a directory listing.

##### **This is the file template I came up with:**

For those who don't know, you create a file called .htaccess with the below code in it, and stick it in the root directory of your site. It does all sorts of neat stuff. It can also be used to password protecting directories, but that's for another day

```
DirectoryIndex index.php index.html index.htm

<IfModule mod_rewrite.c>
RewriteEngine On
ErrorDocument 404 /errors/404.php
ErrorDocument 403 /errors/403.php
ErrorDocument 500 /errors/500.php
</IfModule>

Options -Indexes
Options +FollowSymlinks

<Files .htaccess>
deny from all
</Files>
```

#### Breaking it down

This .htaccess file is in 4 basic parts: the directory index, the error documents, directory listing options and denying access to the .htaccess file itself.

##### DirectoryIndex

```
DirectoryIndex index.php index.html index.htm
```

DirectoryIndex is the first thing I learned in my .htaccess explorations, it's very simple. It tells the server which pages to display by default and in what order. In my example, if I have index.html in a directory along with index.php, the index.php file will be displayed by default, so you have [home]() pointing to index.php and if you want to get to index.html you'd have to type it in like [home](/). Many servers get this right without the DirectoryIndex, but it's like doing `body{background-color:#fff;}`, I put it in just in case.

##### ErrorDocument

```
<IfModule mod_rewrite.c>
RewriteEngine On
ErrorDocument 404 /errors/404.php
ErrorDocument 403 /errors/403.php
ErrorDocument 500 /errors/500.php
</IfModule>
```

This is the stuff that I dig. It gets the most press out of all the .htaccess elements; so I guess it's the rock star of the .htaccess file. [A List Apart](http://alistapart.com/articles/perfect404/) did an article on it in 2004, and it was a big usability issue building a good 404 error page. Now we all have our fancy 404 pages.

The mod\_rewrite module (as to my understanding of it) deals with rewriting the URL. In this cae, it's the thing that lets you have a 404 error without exposing the URL of the actual error page. 403 Error is a permission denied error and 500 is an internal server error. You can check out [all the error codes](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) if you'd like, but you shouldn't bog down your .htaccess file too much, so I keep it to these 3.

##### Index Options

```
Options -Indexes
Options +FollowSymlinks
```

`Options -Indexes` is what you use to deny a directory listing; inversely, you could use `Options Indexes` (no dash) to allow a directory listing. I use this for things like my images directory.

`Options +FollowSymlinks` tells the server to follow Symlinks (no kidding huh?). Some apache servers require this for mod\_rewrite to work. So if your mod\_rewrite is working fine, you may not need this, I include it just in case. In my experience Symlinks are generally abused and overused but it's still good to know how to [create them from the command line](http://kb.iu.edu/data/abbe.html).

##### .htaccess Access

```
<Files .htaccess>
deny from all
</Files>
```

This is very simple and (I think) very necessary. It prevents people from viewing your .htaccess file. There's really not any sensitive information in _my_ .htaccess file, but it's good practice to protect this file in case you do put things in it that you don't want exposed.

Fin

So, that's my .htaccess file starter template. I'd be interested to hear what others use in their files and if I missed anything in mine, I'm certainly no Apache expert.
