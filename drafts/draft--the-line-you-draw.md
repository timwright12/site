---
title: "The line you draw"
date: "2026-08-10"
tags:
  - "engineering"
layout: layouts/post.njk
---

On August 1, 2012, Knight Capital turned on new trading software and lost $460 million in 45 minutes. The proximate cause was a dormant chunk of code called Power Peg, left over from a feature that had been retired years earlier and never fully removed. A deployment error meant one server didn't get the update everyone else got, and that old code path, still technically present, still technically live, started firing live trades nobody intended. By the time anyone diagnosed what was happening, the firm had nearly ceased to exist.

Nobody had written bad code that morning. The code that misfired had been sitting there, unchanged, for years. The failure was that when it woke up, nobody currently at the company could say with confidence what it would do. The people who'd written it, understood it, and could have caught the deployment gap were gone, promoted, or had simply moved on to other systems. The map to that part of the building still existed. Nobody was holding it anymore.

That's worth sitting with, because it isn't really a story about legacy code. It's a story about what happens when nobody currently in the room still holds the model of something everyone depends on.

The prior essay in this series ended on the question of who holds the map. But the map was never total — not in 2012, not in 2005, not now. Every engineer has always stood on layers they didn't fully understand: the compiler, the OS scheduler, whatever the silicon is actually doing. That was never going away, and it's not a new failure of this moment. What's actually different, moment to moment, is whether the edge of what you personally understand is something you chose, or something that just happened to you because nobody assigned it and nobody removed it.

There are two easy ways to get this wrong. One is trying to hold the entire stack yourself — which either burns you out, or worse, convinces you that you understand layer six when you actually don't, which is its own quiet denial. The other is holding none of it on purpose — treating everything as someone else's problem, including the parts you personally shipped. That second failure is closer to what happened at Knight. Power Peg was somebody's responsibility once. By 2012 it was no one's, and nobody had noticed the handoff never happened.

The alternative to both isn't heroism or surrender. It's choosing the boundary on purpose. Know the layer you actually write in, and the layer directly beneath it that your code leans on, well enough to debug it yourself without looking anything up. Past that line, you don't need fluency. You need to know the dependency exists, roughly what it does, and where it would page someone if it broke. One is a skill. The other is bookkeeping. Both are necessary, and they are not the same thing, and confusing them is how you end up with a team full of people who assume someone else is holding a map that nobody is actually holding.

AI-generated code moves that line again, and not gently. The layer directly beneath what you write used to be the one thing you built by hand, and so the one thing you understood by construction, whether you meant to or not. Now that layer can arrive finished, without you ever having built it, which means without you ever having been forced to understand it. That's a new gap, and it opens exactly where your debugging fluency used to live automatically.

The answer isn't to stop. It's that the line has to move to cover what just went missing: you need to hold a real model of what you asked for, and verify closely that what came back actually matches it. Skip that, and you haven't gained a layer. You've lost your one guaranteed foothold and put nothing in its place.

The map was never going to be complete. It never was. The only thing anyone ever really controlled was which part of it they committed to holding — and that's the choice being taken from people who don't make it on purpose.
