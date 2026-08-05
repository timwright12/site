# Plan: "The Line You Draw" (essay 3 of 3)

## Where this sits in the series
1. **Layers** — names the pattern: we keep adding layers, never removing one, and the distance between what we write and what runs keeps growing.
2. **How It Works** — names the risk: that distance is where fragility lives (left-pad, xz). Ends on: "It's who still holds the map, and what happens on the day they're not the one who picks up the phone."
3. **This essay** — moves from diagnosis to stance. Given you *can't* hold the whole map anymore, and pretending otherwise is denial rather than diligence, what do you actually do? Answer: you draw a deliberate line around what you commit to understanding, instead of letting that line get drawn for you by neglect.

Do **not** resolve into "therefore slow down" or "therefore reject AI tools" — that would contradict essay 1's own ending ("not a reason to stop"). The stance is about honesty and deliberateness, not retreat.

## Thesis
Nobody has ever held the whole map, even before any of this. The map was always partial. What's changed is whether people are *choosing* where their part of the map ends, or just letting it happen to them by default — and AI-generated code moves that boundary again, in a way that needs a deliberate response, not a passive one.

## Target length
~450–650 words as a guide, not a hard cap. Prioritize giving the point room over hitting a number — this is the closing essay, it's allowed to breathe slightly more than 1 and 2, but shouldn't feel padded.

## Concrete anchor: Knight Capital, Aug 1, 2012
- Facts to use (verify exact figures before publishing, these are well-documented but worth a final check): Knight Capital deployed new trading software; old, dormant code from a defunct test feature ("Power Peg," unused for years) was never fully removed and got triggered on one server that didn't get the update. Nobody still at the company fully understood what that dormant path would do if it fired.
- It took ~45 minutes of escalating, senior-level scrambling to even diagnose what was happening, by which point the firm had lost roughly $460 million and nearly collapsed.
- Why this example over left-pad/xz: those were about *external* dependency depth (a stranger's code, several layers down). This one is about *internal* depth — a company's own legacy code that its own current staff no longer held a model of. That's the sharper case for "the line you draw," because it shows the failure isn't unique to open source or to strangers' code — it's what happens whenever *nobody currently present* still holds the map, including to your own systems.
- Use it as the cold open or as the anchor after a short intro — either works; draft will try cold open since essays 1 and 2 both start concrete/personal before generalizing.

## Structural beats
1. **Open on Knight Capital.** Short, factual, not sensationalized (match essay 2's restrained tone with left-pad/xz — state what happened, not "can you imagine"). Land on: the failure wasn't that the code was wrong when it was written. It was that nobody currently in the room could say what it did.
2. **Reframe "who holds the map" from essay 2.** The map was never total — not in 2005, not now. Every engineer has always depended on layers below them they didn't fully understand (the OS, the compiler, physics). So "nobody can understand it all" isn't a new problem. What's actually different is whether the boundary of what *you* understand is a decision or an accident.
3. **Two failure modes, contrasted:**
   - The engineer/team that tries to hold the *entire* stack — burns out, or worse, lies to themselves about how well they actually know layer six, which is its own kind of denial.
   - The engineer/team that never draws a line at all — everything is "someone else's problem," including the parts they personally shipped. This is closer to what happened at Knight: the dormant code was technically someone's responsibility once, but by 2012 it was no one's.
   - The alternative to both: pick the boundary on purpose. Know the layer you actually write in, and the one directly below it that your code leans on, well enough to debug it yourself without looking anything up. Past that, you don't need deep fluency — you need to know the dependency exists, roughly what it's for, and where it would page you if it broke. (This is the distinction Tim asked about — debug-it-yourself vs. just-know-it's-there. Keep both named plainly, avoid the "know cold" shorthand that caused confusion in the earlier conversation.)
4. **The AI pivot.** AI-generated code collapses exactly the layer that used to be your one guaranteed foothold — the layer directly below what you write, that you used to have to build by hand and therefore understood by construction. Now that layer can arrive fully formed, without you having built a model of it. General industry voice here, not first-person anecdote (per Tim's answer) — describe this as a shift happening across the field, same register as essay 1's "we're adding agents and skills that generate code."
   - The response isn't to stop using it. It's that your line has to move to cover what you're now missing: you need to hold a model of what you *asked for* and verify the output actually matches it — otherwise you've given up your one guaranteed foothold and gained nothing to replace it.
5. **Close.** Callback to essay 2's closing line about who holds the map. Land the series on: the map was never going to be complete. The only thing you ever really controlled was which part of it you committed to holding — and that choice is the one AI-generated code is quietly taking away from people who don't make it on purpose.

## Voice notes (match essays 1 & 2)
- First person, declarative short sentences mixed with one or two longer build-up sentences per section.
- Occasional dry parenthetical aside (essay 2 has several: "(pretty lucky)", "(who you assume are better engineers than you)") — use sparingly, one or two max, don't overdo it.
- No hedging softeners ("I think," "maybe" used only once, deliberately, like essay 1 does with "Maybe this is just the next turn of a cycle").
- End on a single punchy standalone-line paragraph, like both prior essays do.

## Things to avoid
- Don't re-explain left-pad/xz — essay 2 already did that; this essay's anecdote should be new (Knight Capital) so the series doesn't repeat itself.
- Don't use "know cold" or similarly ambiguous shorthand for the debug-it-yourself standard — spell out the distinction plainly (per Tim's clarifying question earlier).
- Don't land on a call to slow down, reject AI tooling, or "go back to simpler stacks" — inconsistent with essay 1's own resolution.
- Don't turn the AI section into a personal anecdote — keep it in the general industry voice, per Tim's answer.
- Watch essay length creeping past ~650–700 words without a reason; the guide is loose but shouldn't become an excuse to sprawl.

## Open questions for Tim to weigh in on at draft review
- Does the Knight Capital anchor land, or would a different real incident fit better once drafted out?
- Is the two-failure-modes framing (over-holder vs. never-drew-a-line) doing enough work, or does it need a third case?
- Does the closing callback to essay 2's last line feel earned, or too neat/on-the-nose?
