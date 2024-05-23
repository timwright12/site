---
title: Identify Input Purpose – WCAG 2.1, Level AA
description:
date: 2020-09-02
tags:
  - accessibility
layout: layouts/post.njk
---

[WCAG 2.1 Guideline 1.3.5](https://www.w3.org/WAI/WCAG21/quickref/#identify-input-purpose) states:

The purpose of each input field collecting information about the user can be programmatically determined when:

The input field serves a purpose identified in the Input Purposes for User Interface Components section; and
The content is implemented using technologies with support for identifying the expected meaning for form input data.
This is a new guideline added in version 2.1 of the WCAG standards, but what exactly does this mean? **It means that browsers and assistive technology need to be able to identify the purpose of any given input field**.

When I first read through the specifications for this guideline I was thinking, “OK cool, this is just the input type attribute, we all already do that.” As it turns out, that’s not quite right, while the type attribute (e.g. `<input type=”date” />`) is a great indicator, it often doesn’t give enough inherent information about the actual purpose of the input and the type of information it’s trying to gather. As an example, type=”date” indicates that the user needs to add a date, but doesn’t specify if the date is today’s date, a birthday, an expiration date, or anything other than a generic date – not super helpful.

**Isn’t this what an input’s label is for**? Sure, that’s true, but the label is made to be human readable, not machine readable, so defining the purpose in a label won’t get us very far with assistive technologies or user agents (browsers). To make sure the purpose of an input is truly machine readable we lean on the [autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).

## Autocomplete

The HTML autocomplete attribute kind of works like schema markup or microformats in that it adds an extra layer of semantics into an input. There is a predefined set of values (over 50) that a user agent or assistive tech can use to deduce the purpose of a field. If you’ve ever seen your phone try to autocomplete an entire multi-field address, that’s what this is for.

To truly pass guideline 1.3.5 you might end up with some HTML like this:

```html
<label for="fn">First name</label>
<input type="text" id="fn" name="fn" autocomplete="given-name"/>

<label for="ln">Last name</label>
<input type="text" id="ln" name="ln" autocomplete="family-name"/>

<label for="bd">Birthday</label>
<input type="date" id="bd" name="bd" autocomplete="bday" />
```

In the above example you can see the added semantics in that we’re now expecting a first name, last name, and birthday.

Using the autocomplete attribute will ensure that the inputs you’re presenting to the user are also meaningful to any assistive technology or browser trying to read them. The user is relieved of having to type the information and can instead confirm or, if needed, change the value of the field, a significant benefit for users with memory issues, dyslexia, and other disabilities. Many user agents will also add iconography to identified inputs to ease the cognitive load of the user (chrome does this with type=”date”).

Next time you’re deep into writing form HTML, you can feel good about adding in these extra semantic and directly helping (via [W3C](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html):

- People with language and memory related disabilities or disabilities that affects executive function and decision-making.
- People with cerebral palsy, stroke, head injury, motor neuron disease or learning disability who sometimes prefer images for communication.
- People with motor impairments also benefit from reducing the need for manual input when filling out forms.
- Overall, I think this is a really easy thing to implement and it has a really high level of impact to users, so why not add some more semantics in, right?

## Further Reading

- [Understanding Success Criterion 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)
- [HTML autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
