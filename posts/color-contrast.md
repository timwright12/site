---
title: "WCAG 2.0 Accessibility and Color Contrast in a Design"
date: "2016-12-17"
tags:
  - "accessibility"
layout: layouts/post.njk
---

"Let the Dev team deal with it." Accessibility on the Web is mostly seen as an implementation problem, but some of the most prominent and problematic accessibility issues happen in design. Whether it's [iconography](http://www.blonde.net/blog/2015/06/22/accessibility-101-8-tips-better-user-experience), [typography](https://www.webaccessibility.com/best_practices.php?technology_platform_id=12), [color contrast](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html), or any of the other accessible design components that we really can't control once we get into development. In this write up, I'm going to talk about the most common one I've seen over the years: **color contrast**. It's something you're going to want to keep an eye on for all clients who are required to adhere to Web content accessibility guidelines, WCAG (but, really it's just a good idea anyway).

### Creating Contrast in a Design

There's a general rule in design that if your design doesn't work in black and white, it won't work in color. This is a statement about creating clear hierarchy and contrast in a mockup. It's thought that you should be able to convert a design to grayscale, and it will still, "work" in the same way it did with color - kind of like [graceful degradation](http://searchnetworking.techtarget.com/definition/graceful-degradation) for your eyes. The same information is communicated to the user and everything retains its meaning.

This is more than a design principle, it's actually an accessibility standard.

#### WCAG 2.0

In the WCAG 2.0 guidelines there 3 levels of support: Level A, Level AA, and Level AAA (A is low, AAA is high, just like baseball). With each support level there are requirements around the level of contrast you can use when using two colors together:

- **Level A**: 3:1 minimum contrast ratio
- **Level AA**: 4.5:1 minimum contrast ratio
- **Level AAA**: 7:1 minimum contrast ratio

These ratios are relevant when you put one color on top of another (like gray text on a white background). The two colors need to be far enough apart to provide sufficient contrast for people with moderately low visual acuity, congenital or acquired color deficiencies, or the loss of contrast sensitivity that typically accompanies aging. The most common of these issues is color blindness, which affects 10% of males (that's more people that use IE on some projects).

It's not only the color contrast we need to worry about, but also the **font size**, which affects compliance as well. From [WebAIM](http://webaim.org/resources/contrastchecker/):

> [WCAG 2.0](http://www.w3.org/TR/WCAG20/) level AA requires a contrast ratio of 4.5:1 for normal text and 3:1 for large text. Level AAA requires a contrast ratio of 7:1 for normal text and 4.5:1 for large text. Large text is defined as 14 point (typically 18.66px) and bold or larger, or 18 point (typically 24px) or larger.

As you can see, there are combinations of color and size that will correlate to a certain level of accessibility support. And we can modify that within a design.

#### Testing Your Colors

Great, so what does that mean? Most people can't eyeball a design and tell if two colors have the proper contrast ratio.  Luckily there are a number of contrast testing tools available. My personal favorite is one built by the good folks at [WebAIM](http://webaim.org/resources/contrastchecker/). It has a simple UI and tells you exactly what you need to be compliant.

What you _won't_ find is much information about Level A contrast support. I'm not sure why, but most resources talk about AA being a good baseline balance between getting accessible ratios and having it not be overly obtrusive to your look and feel. AAA support is pretty aggressive, I'd _almost_ call it high-contrast mode and I don't see it very often.

Offering up a secondary color palette is a great way to help clients who have a well-establish brand, but don't quite meet accessibility standards.

### Resources and Further Reading

- [Understanding SC 1.4.3 and Minimum Contrast](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)
- [WCAG 2.0 Principle 1: Perceivable](https://www.w3.org/TR/WCAG20/#perceivable)
- [Web AIM Color Contrast Checker](http://webaim.org/resources/contrastchecker/)
- [Accessibility at Penn](http://accessibility.psu.edu/color/contrasthtml/)
- [Easy Color Contrast Testing](http://alistapart.com/blog/post/easy-color-contrast-testing)
- [Color Contrast Checker by Jonathan Snook](https://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=333333)
