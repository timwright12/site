---
title: "Accessible Media: Images"
date: "2019-12-07"
tags:
  - "accessibility"
layout: layouts/post.njk
---

Most of the time, when we think of difficult accessibility situations we default to UI interactions like: tabs, accordions, menus opening and closing, modals, focus trapping, and maybe even that nervous, “radical candor” moment when we ask a designer if it’s OK to [darken gray text a little](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum). Because image accessibility is seen as being as basic as putting ALT text on an image, it’s often pushed aside as simple. For that reason, I wanted to create a quick write up to expand on some of the basics in creating accessible media; specifically: [images](https://10up.github.io/Engineering-Best-Practices/markup/#media).

Images can generally be broken down into one of seven catagories, each of which we deal with in slightly different ways:

- Informational images
- Decorative images
- Functional images
- Images of text
- Complex images
- Groups of images
- Image maps

If you’re unclear about which category your image falls under, the W3C has created an [ALT decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) to help out. Let’s take a look at each type (as quickly as we can, I promise).

## Informational Images

This is the most common type of image you’ll encounter, it’s a standard content image that graphically represents something, usually pictures, photos, illustrations, and the like. Creating ALT text for this should be short and to the point, but really you should use as much as you need to properly convey the content of the image. If you use the ALT decision tree and are still unsure of what type of image you’re dealing with, this is a good fallback.

When creating ALT text for an informational image, I find it helpful to imagine you’re sitting next to someone who can’t see the image. However you would describe it to them in the context of the content is usually a good starting point for the alternative text.

[Read more about informational images](https://www.w3.org/WAI/tutorials/images/informative/).

## Decorative Images

Decorative image in HTML are images that really serve no purpose and convey no added information to a page. For these images, it’s best to leave the ALT text empty, not blank/missing, but empty: \`alt=””\`. This way a screenreader will pass right over it. If the ALT text is removed completely assistive technology will try and read the URL to give context to the image.

[Read more about decorative images](https://www.w3.org/WAI/tutorials/images/decorative/).

## Functional Images

Functional images are images that you would interact with, a common version of this is a form submit button: \`<input type=”image” alt=”submit” />\`. In the case of a functional image like this you would describe the action (submit) rather than whatever button image is being used.

This also holds true when images are inside links. For instance, a logo that’s linked to a homepage wouldn’t just describe the logo, but it would also let the user know the destination of the link like: \`<a href=”/”><img src=”logo.png alt=”Company Name Home Page”/></a>\`.

Another instance of a functional image is a link that contains an icon. If an icon is representing that the link opens in a new window, the ALT should reflect that with the alternative text of: “Opens in a new window”.

[Read more about functional images.](https://www.w3.org/WAI/tutorials/images/functional/)

## Images of Text

Working with images of text is generally pretty straightforward. It’s best to avoid putting text inside an image for a lot of read, and scalability reasons, but if you find yourself in a situation where it’s needed, the ALT text should contain the same text as the image.

[Read more about images of text.](https://www.w3.org/WAI/tutorials/images/textual/)

## Complex Images

Complex images include charts, graphs, and (for the most part), maps. These are very hard to create accurate ALT text for. In these cases you need to use a two-part ALT text. The first part is a short description of the image (normal ALT) and the second is a longer description that is a text-based representation of the image’s content. This is often represented in a caption, but in some cases it will likely required a much larger output (like a data table for a chart). There is also a \`longdesc\` attribute in HTML that isn’t much used anymore since\` figure and figcaption were released in HTML5.

[Read more about complex images.](https://www.w3.org/WAI/tutorials/images/complex/)

## Groups of Images

If multiple images are present to convey the same information, the ALT text on one image should represent the entire group. A great example of this is a star rating system, you don’t need ALT on each star image to convey that something has ,”3 out of 5 stars.” You can also use the ARIA role “group” to… well, group… images and set a label for them all.

[Read more about groups of images](https://www.w3.org/WAI/tutorials/images/groups/).

## Image Maps

Image maps are not really used much anymore, but are still perfectly valid ways to provide hot-linking within an image (although legacy browser support is a little undesirable). When creating an image map, the parent image should contain ALT text as well as each \`area\` element present in the map.

[Read more about image maps](https://www.w3.org/WAI/tutorials/images/imagemap/).

## Further Reading about Accessibility in Images

- [Providing Accessible Images](https://accessibility.huit.harvard.edu/provide-accessible-images)
- [Image Concepts](https://www.w3.org/WAI/tutorials/images/)
