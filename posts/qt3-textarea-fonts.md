---
title: "Quick Tip #3 - Textarea Fonts"
date: "2009-09-01"
categories: 
  - "engineering"
tags: 
  - "beginner"
  - "forms"
  - "quick-tip"
---

![article banner](images/textarea-fonts.jpg)

#### The Problem

The font family in this text area default to Courier New, but that's pretty ugly.

#### The Goal

Look at the nice font in this textarea!

#### The Solution

You have to redefine the font-family for a `textarea`. Just a weird quirk.

```
textarea{
font-family:Verdana, Arial, Sans-Serif;
}
```
