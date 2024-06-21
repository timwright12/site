---
title: "ARIA Orientation"
date: "2019-07-12"
categories: 
  - "accessibility"
---

I ran into the little-known [`aria-orientation`](https://www.w3.org/TR/wai-aria/#aria-orientation) attribute today and wanted to make quick post about it since it really isn’t popularize and can add some nice touches to the accessibility of a site.

## What is ARIA Orientation?

The `aria-orientation` is a way to communicate the orientation of a certain subset of UI components when you’re custom-building things like: scrollbars, select menus, separators, sliders (range sliders), tabs, and toolbars ([read about more components you can use ARIA orientation on](https://www.w3.org/TR/wai-aria/#aria-orientation)). All components that can go up-and-down or right-to-left. It shouldn’t be used on any oriented element, but the ones listed in the [W3C documentation](https://www.w3.org/TR/wai-aria/#aria-orientation) are all fair game.

The attribute can take a value of `horizontal` or `vertical`. Default values are a little ambiguous right now, for example, scrollbar defaults to `vertical` and slider defaults to `horizontal` – whatever the natural state for the component if you where using a native HTML element might be. For elements that don’t really have a “default” orientation, like a `radiogroup`(very commonly seen vertically and horizontally), the default value is `undefined`. Something to be aware of when you’re creating a UI that might need this attribute.

## When Should I Use It?

If you’re building with normal native HTML elements like `<input type="range" />` there’s no need to set the orientation manually unless you’re physically spinning the element on the page (ARIA roles overwrite HTML semantics, so if the default is correct, you don’t change it). This attribute is primarily for the times where we’re having to rebuild HTML functionality with `div`elements like: `<div class="range-slider role="slider>`.

## Where Can I Read More?

There isn’t much out there, but this is what I found:

- [W3C ARIA documentation](https://www.w3.org/TR/wai-aria/#aria-orientation)
- [MDN Documentation on aria-orientation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute)
