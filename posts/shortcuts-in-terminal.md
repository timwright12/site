---
title: "Setting up shortcuts in Terminal"
date: "2011-05-20"
tags:
  - "engineering"
layout: layouts/post.njk
---

Let me just start off my saying **I hate using the command line**.

That being said, I'm all for making the experience tolerable with a few tweaks. Today I set up some aliases in Terminal so I don't have to remember some of the weirder commands I use often.

I thought I'd share the process for my fella command line haters / mac users.

### The process

In your home directory, there's a file name .profile. It's hidden from the finder by default so you can get to it a few different ways:

- use a program that displays hidden files (like [Houdini](http://www.macupdate.com/app/mac/26729/houdini))
- Navigate to it through a text editor (I use [coda](http://www.panic.com/coda/))
- Open terminal and type cd ~, then press enter

Once you find it, open the file, it's probably blank. If you're in terminal you'd type vi .profile, then i to being editing.

Alias syntax goes like this: "alias \[alias name\]='\[really long normal command\]'"

And you'd put one per line. For example, my .profile file currently looks like this:

```
alias ..= 'cd ..'
alias ll='ls -al'
alias ls='ls -l'
alias home='cd ~
```

So if I want to navigate to my home directory I type "home" rather than "cd ~". A small addition (and actually the same character count), but as you use these more and more to customize your environment you'll see how much time and frustration you can save.

Anyway, save that file, restart terminal, and you're good to go. If you're doing all this in terminal first hit \[esc\] to exit edit mode, then type :wq to save your changes.

Hope that helps some folks, I know it helps me, and I like posting stuff like this if for nothing else but having a place I can remember to go to find it.
