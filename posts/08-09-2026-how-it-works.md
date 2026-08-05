---
title: "The day nobody remembers how it works"
date: "2026-08-09"
tags:
  - "engineering"
layout: layouts/post.njk
---

In 2016, a developer pulled an eleven-line package called left-pad from npm. It padded strings with spaces. That’s it. Within hours, thousands of sites and applications were unable to build, including projects at major companies, because so much of the JavaScript ecosystem depended on it several layers down without anyone realizing it (well, maybe we realized it but we either didn’t care or accepted it). Nobody had done anything wrong or written bad code. The failure wasn’t in any single piece. It was in how much sat on top of a piece nobody was watching. To be clear, I love the open source community and npm; Bower (pre-npm), I disliked a great deal, but npm hit well.

In 2024, someone spent years quietly contributing to a compression library called xz, gradually working their way toward commit access, and used it to plant a backdoor in the software that much of the internet’s infrastructure depended upon. It was caught when an engineer named Andres Freund, investigating unexpectedly high CPU usage and a roughly 500-millisecond delay during SSH authentication, noticed that something wasn’t right. Not because a scanner flagged it. Not because a process caught it. One engineer noticed an anomaly and followed it (pretty lucky).

Both of these happened in open source software, it’s the reason we know about them at all. A public repository means someone outside the company can eventually notice, investigate, and talk about what happened. Closed source has the same dependency depth, the same distance between what a team ships and what any one person actually understands. It just doesn’t come with a public paper trail, so the same incidents happen without anyone outside ever hearing about them outside of the Mural board retro.

These aren’t stories about bad tools, or about open source being uniquely fragile. They’re stories about depth and distance causing fragility.

Somewhere below the code you’re responsible for, there’s code you’ve never read, written by people you’ve never met (who you assume are better engineers than you), that you are nonetheless completely dependent on. That’s always been somewhat true and it’s becoming more true every year. For the most part, the trend matters more than the current position.

The conversation about AI-generated code (vibe, agentic, whatever) mostly focuses on whether it’s correct. In my opinion, that’s the wrong axis. The more important question is whether anyone understands it well enough to fix it quickly when something downstream breaks.

Those are different properties; correctness can be checked with enough tests, but how do we test for understanding?

Code can be entirely correct and still be code that nobody currently holds a working mental model of, because nobody had to build one to produce it. This is currently visible, but not isolated to, AI code. It hits all the way up and down the stack.

That’s the actual risk of stacking agents on top of frameworks on top of bundlers on top of runtimes. Not that any individual layer is unreliable. It’s that the number of people who could trace a failure from the browser back to its actual cause keeps shrinking, layer by layer, while the number of things that could break keeps growing.

So far, we’ve gotten away with this because every layer has had enough people who understood it deeply enough to build, maintain, and debug the next layer. That assumption gets weaker when you can generate a working component without reading a line of what it produces, and when that becomes faster and more common every quarter.

This doesn’t end in one dramatic collapse - it’s been happening slowly for decades. It ends in an increasing number of ordinary incidents that used to take an afternoon to fix and now take two weeks, because the person who gets paged has to first rebuild an understanding that used to already exist, distributed across a team that read and wrote the code themselves. And no, documentation alone does not solve this, at some point there’s too much.

The question worth sitting with isn’t whether the code is good, because honestly on person’s good code is someone else’s slop. There’s too much context at build time.

It’s who still holds the map, and what happens on the day they’re not the one who picks up the phone.
