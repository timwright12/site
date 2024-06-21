---
title: "Quick Tip #1 - Image Replacement"
date: "2009-05-28"
categories: 
  - "engineering"
tags: 
  - "css"
---

![article banner](images/image-replacement.jpg)

#### Problem

Image replacement can be easily [abused](http://www.csszengarden.com); but when used properly (like replacing logo text) it's a great resource.

Image replacement without extra markup usually means setting `text-indent:-9999px` on your link. And this works great great. But in a lot of browsers it leaves a focus outline that runs way off the page to the left on click.

![welovebeans.com logo with a :focus outline the runs off the page](images/logo_beans_error.jpg)

We need to keep the outline there for accessibility reasons, so most developers just leave it alone. But there's a way to make, both, designers and accessibility gurus happy.

[view demo](http://www.csskarma.com/articles/examples/image-replacement/)

##### Problem CSS

```

#branding h1 a{
display:block;
height:70px;
width:289px;
background:url(../images/logo.png) no-repeat 0 0;
text-indent:-9999px;
}
```

#### Goal

![welovebeans.com logo with proper :focus outline](images/logo_beans_clean.jpg)

#### Solution

By adding `overflow:hidden` to the link we can cut off the extended :focus outline.

##### Solution CSS

```

#branding h1 a{
display:block;
height:70px;
width:289px;
background:url(../images/logo.png) no-repeat 0 0;
text-indent:-9999px;
overflow:hidden;
}
```

[view demo](http://www.csskarma.com/articles/examples/image-replacement/)
