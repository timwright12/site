---
title: "Securing your Development Space"
date: "2008-09-15"
categories: 
  - "engineering"
  - "security"
tags: 
  - "htaccess"
  - "htpasswd"
---

![article banner](images/securing-your-development-space.jpg)

You can hide your development space from the public many ways, a weird URL no one will find, use a local testing server (localhost), or set up a development server. Up until my last redesign I was just using a directory called **dev** under csskarma.com. And that was fine, but my file paths would all have to be adjusted when I went live (not a huge deal, but annoying none-the-less).

If you're a frequent reader, you might remember that in my last post I mentioned that I was coming out of laziness and cleaning up some stuff on my server. So I finally set up my dev server. It's just a sub-domain, but seems to work well so far.

Not that I have anything on it. but I felt like I should use some best practice stuff and password protect it. In password protecting a directory, you use an .htaccess file coupled with an .htpasswd file (to store the usernames and passwords)

The first thing you need is a list of users you want to grant access to. Let's say I want to set up a general account for people to access my directories. We'll make the username **guest** and the password **dontstaylong**.

Next, we have to go to a site that will encrypt the password for us, I use [htpasswd generator](http://www.htaccesstools.com/htpasswd-generator/). After plugging in the username and password, you'll come out with something like this:

##### Your full .htpasswd file

```
guest:ZGu8x2pjH62Pk
```

Take that code and place it in a file called .htpasswd (you'll need to create this). You can put that file anywhere on your server, but it's best to make sure it's not web accessible (so no one can steal your password). So, if you have a public\_html directory or a www, put the file one level higher than that.

Now that we have our .htpasswd file on our server, we can start cutting off access to various parts of our site using an .htaccess file. You can also add multiple users by following the same process as the first one, but put one user per line in the .htpasswd file.

Let's say I have a directory at [http://www.csskarma.com/articles/htpasswd/](http://www.csskarma.com/articles/htpasswd/) that I want to password protect. To do that I would put an .htaccess file in that directory with this code in it:

##### Your full .htaccess file

```
AuthType basic
AuthName "This directory is protected"
AuthUserFile /full_server_path_to_file/.htpasswd
Require valid-user
```

Important: the AuthUserFile must be an absolute server path to the file, relative will not work (at least it didn't for me).

Lastly, you visit your new [password protected directory](http://www.csskarma.com/articles/htpasswd/) (username: guest - password: dontstaylong) and marvel at your greatness. This password should apply to all sub directories as well.

In my experience, this is the easiest way to secure an area of your site. However, if you're passing sensitive information through, you may want something a little more secure than this. Yahoo! provides a good [best practices security](http://developer.yahoo.com/security/) write-up you can use as a reference.

Anyone have any thoughts/suggestions for beefing up the .htpasswd file?
