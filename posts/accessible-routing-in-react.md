---
title: "Accessible Routing in React"
date: "2019-03-23"
categories: 
  - "accessibility"
  - "javascript"
tags: 
  - "react"
---

Routing in an application allows for navigation between different views or components, whether that's in a PHP framework, WordPress, React, Angular, Vue, whatever. It's been around for a long time and has become an essential addition to a large portion of our React projects. Whether you're using React Navigation, React Router, Reach Router, Next, the History API, or some other router, you've likely encountered some of the common patterns and this code:

```
<Link to='/about'>About</Link>
```

A simple code snippet that can immobilize anyone using assistive technology if not properly implemented.

## The Problem

For the purpose of this post, I'm going to pick at React, but these concepts can be applied to any JavaScript framework in an SPA environment.

Routing, at its core is really nothing more than an Ajax call to load a page and a URL update. "Execute this code when the URL matches XYZ." The problem arises because there's no natural page reload to reset the DOM, focus state, and allow assistive technology (like screen readers) to catch the change - similar things happen with **all** Ajax calls. It's like, if you're standing in a room and a horse appears behind you - you won't notice it unless it makes a noise. This is the concept with Routing. If you don't tell anyone the page changed, there's no way to know unless you're looking right at the horse.

Luckily, there are some things we can do to ensure routing in a React app doesn't violate accessibility compliance.

## Setting the Document Title

Since a normal application with routing doesn't leave the main content area, it's important to explicitly update the document title. This is the first thing screen readers look at when a page loads. Mostly, this hasn't been a problem on our projects, but it's still important to note and make sure we're managing this successfully.

React gives us lifecycle methods we can hook into when a component loads, this would we a point where you can update the document title:

```
componentDidMount() {
  document.title = 'About';
}
```

Hooking into **componentDidMount** will ensure your document title is updated once a new page or component loads. You may be doing this in a slightly different way, but the important thing is that the title gets updated on each route change.

## Managing Focus

Making sure the title is set is a good step in the right direction, but still leaves users stuck in the middle of a document if all the content around them changes without letting them know. For this, we need to manage focus when a route is updated. If focus is not managed properly, when a user clicks a link, the cursor will sit right where it was before (probably on a navigation link) and they will never know the page changed.

This is where refs come in. A ref is an, "escape hatch," React has for when you genuinely need to work in the DOM - mostly in situations for accessibility. We can use a ref in React to programmatically move focus around the page for a user. Anyone who has build a modal, tab, or accordion component should be familiar with refs, for all others, [read up on refs in the React documentation](https://reactjs.org/docs/refs-and-the-dom.html).

Refs are used with Routing so when a new page loads, you can move focus from the link that was clicked to the main area of the new loaded page. The code below will show a basic ref you can set up to catch focus when a route changes.

```
componentDidMount() {
  // Still setting the document title
  document.title = 'About | Site Name';
  // Set focus to the content ref
  this.content.focus();
}

render() {
  return (
    <div>
      <h1 tabIndex="-1" ref={( content ) => { this.content = content; }}>Hello, About page</h1>
    </div>
  );
}
```

Inside our render method we're returning a heading with a **ref** for the content area where we want focus sent upon the route change. This also has a **tabindex** value of -1 which allows programmatic focus to be set on an element that is not natively focusable.

We also updated the **componentDidMount** method to use the ref and set focus when the page loads. All-in, what happens here is that, when a user clicks a link that affects the application routing, focus will be moved to the new loaded content letting them continue to use the page instead of trapping them on the navigation link.

## Communicating to the User

So far we've done some great stuff for making our routing more accessible. The title updates and focus moves to the new loaded content. Now all we need to do is let the user know they're on a new page. We can do this with a simple messaging component that can talk to screen readers to let users know what's going on with a page, routes, or anything they can't see. Let's create a simple component that can take props and display a message.

```
const Message = ( props ) => (
  <div aria-live="polite" aria-atomic="true">
    {props.text}
  </div>
);
```

This component uses the [ARIA states live and atomic](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) to push asynchronous information to the user. It can be used in any situation, but for routing, we're going to want to get back into our **componentDidMount** lifecycle method (or use [hooks](https://reactjs.org/docs/hooks-intro.html), it's doesn't matter, just that something fires when a component is loaded).

```
componentDidMount() {
  // Still setting the document title
  document.title = 'About | Site Name';
  // Set focus to the content ref
  this.content.focus();
  // Set the message content
  this.setState( { text: 'The about page has loaded'} );
}

render() {
  return (
    <div>
      <h1 tabIndex="-1" ref={( content ) => { this.content = content; }}>Hello, About page</h1>
      <Message text={this.state.text} />
    </div>
  );
}
```

In the code block above you can see the message content being set in **componentDidMount** and also the Message component taking in the prop to display.

What's happening here now is:

1. The page title is updated
2. Focus is set to the new loaded content
3. The user is told that a new page has loaded

And there you have, accessible routing in a React app. Not that bad, right? Just a few lines of code and you can help millions of people.

## Staying Accessible

Updating your projects to use accessible routing is great, but we can also take steps to ensure our React work maintains a certain level of accessibility as a build matures. For this, I recommend using the [jsx-a11y eslint plugin](https://github.com/evcohen/eslint-plugin-jsx-a11y), it's super-easy to add to a project that's already using eslint and it will help keep an eye on your JSX. Your .eslintrc file should look something like this:

```
{
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

Well that's it! You should be good to go!

## Further Reading

- [Accessible React Navigation](https://almerosteyn.com/2017/03/accessible-react-navigation)
- [Creating Accessible React Apps](http://simplyaccessible.com/article/react-a11y/)
- [JSX-A11y eslint plugin](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
- [React Accessibility](https://reactjs.org/docs/accessibility.html)
