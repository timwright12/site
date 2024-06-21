---
title: "Accessibile Media: Audio"
date: "2019-12-22"
categories: 
  - "accessibility"
---

Audio is a kind of media we don’t often think about when going over common types of media we encounter on the Web, but it’s critically important to many experiences, particularly podcasts and music.

The rules around creating accessible audio are actually pretty straightforward and focus on two main areas: making sure your audio player is accessible and offering up an alternative version of the media

## Audio Player Accesibility

The accessibility of an audio player is almost identical to that of a video player (minus the video and captions). You need to make sure the buttons (pause/play/volume) exists, and are all keyboard accessible (used without a mouse – so no clickable `div` elements, and don’t bother with `tabindex` — [Keyboard, Level A](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=121#keyboard)). Ideally the player should also support a transcript, but this isn’t a hard requirement, because you can just output it on the page. If you’re uploading to a podcasting or music service you’ll want to be sure that service supports the addition of text-based content or gives you the ability to link off to a transcript.

The same rules of autoplaying that apply to video, also apply to audio. Try not to do it, but if you do, and it’s longer than three seconds you have to let the user pause or reduce the volume ([Audio control, Level A](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=121#audio-control)). It also helps to give users a sort of skip link to jump straight to the audio player in case they have trouble finding it on the page ([Bypass Blocks, Level A](https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks)).

And, of course the player itself must pass contrast rules ([Contrast (Minimum), Level AA](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=121#contrast-minimum))).

## Alternative Media

For audio-only content you need to provide a transcript or media alternative to communicate the content to users ([Audio-only and Video-only (Prerecorded), Level A](https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded)). Just like with video, there’s no hard requirement around how to make this, you can type it out yourself or get a service, I recommend getting a service. Personally, I’ve had great luck with [SpeechPad](https://www.speechpad.com/), but there are a lot of great options that don’t cost much money out there.

**That’s it**, pretty easy, right? Creating accessible audio is very important and ultimately pretty low effort and cost so we don’t have many excuses for not doing it.
