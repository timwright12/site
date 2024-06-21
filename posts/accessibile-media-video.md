---
title: "Accessibile Media: Video"
date: "2019-12-14"
tags:
  - "accessibility"
layout: layouts/post.njk
---

Expanding on the **previous post about creating accessible images,** I wanted to jump into how we need to deal with video on the Web while ensuring that we make the content available to all who need to consume it. In some ways, creating accessibility around video is the same as it is for images. When we get right down to it, all we’re trying to do is convey the information to someone, sometimes we just need multiple ways of doing so.

Because Video is far more descriptive and complex, there are more applicable guidelines and interface challenges of which to be aware. We have to worry about the video player itself being accessible, the content of the video, captioning, as well as audio descriptions so we can fully hit our communication goals with the user.

We’re going to quickly walk through three main areas of accessible videos: the video player, captions, and audio descriptions/transcripts.

## Video Player & Content

The first step to making sure your video is accessible is making sure the player that’s serving it up is accessible. The player UI needs to support captioning and it should be keyboard accessible ([Keyboard, Level A](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=121#keyboard)). It also needs to have all the standard controls of play/pause, volume, and a captioning toggle. The UI should also contain a way to turn on a secondary audio track, but we’ll get to that later, as it’s more rare.

For the content of your video, it needs to pass all the standards we assign to normal HTML content. If there’s text on the screen, it should pass color contrast rules ([Contrast (Minimum), Level AA](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=121#contrast-minimum)). Your video should not contain flashing content, as it can cause seizures ([Three flashes or below threshold, Level A](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=121#three-flashes-or-below-threshold)). Finally, the video should really **never** autoplay ([Audio control, Level A](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=121#audio-control)), if you find yourself in a situation where a video is required to play automatically for more than three seconds you must provide a mechanism to pause or reduce the volume.

Having a focus on creating accessible video content is extremely important, because we can’t use an automated scanner to watch a video and flag issues.

## Captions

Captions are a representation of dialog and general sounds happening within a video. Providing captions for prerecorded video is a requirement of accessibility compliance ([Captions (Prerecorded), Level A](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=121#captions-prerecorded)). They are used by the deaf, hard of hearing, and are often used in situations of high-ambient noise (like a bar).

With captioning, you have two choices, you can do it yourself (bleh), or you can outsource it (yay!). There are many services available that offer captioning on a budget, YouTube even offers an auto-captioning service you can turn on ([YouTube Accessibility: How to Create Accessible Videos with Closed Captioning](https://medium.com/@krisrivenburgh/youtube-accessibility-how-to-make-accessible-videos-with-closed-captions-2208acf17eeb)). With all captioning services, it is important to review the content for accuracy.

**Note**: A transcript is not a replacement for captions, as it creates a disjointed experience for the user having to switch back and forth between the video and text.

Captioning for prerecorded content is a pretty hard requirement, but we also have requirements for live content. Live content, to meet Level AA compliance also must be captioned ([Captions (Live), Level AA](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=121#captions-live)). This is obviously much more difficult to achieve by yourself, but there are also many live captioning services available. Recently, I even tried out the [live captioning offered by Google Slides](https://zapier.com/blog/updates/1859/google-slides-closed-captions), it was super neat!

Captioning your videos is a great step in the right direction, but with a goal of offering the same content to all users you also need to provide audio descriptions, which we encounter with far less frequency.

## Audio Descriptions & Transcripts

Transcripts and audio descriptions are not the same thing, and they serve different purposes. A transcript is the output of the dialog in video, and an audio description is an extra audio track that is usually toggled on and off to help describe what’s happening in a video, where people are, facial expressions, reactions, etc.

Audio descriptions are not usually supported by a lot of video players. Even YouTube doesn’t, at this time, support the upload of multiple audio tracks to a video. To get around this limitation it’s not uncommon to offer the description in a standalone audio file or upload a second video with the audio description playing at all times.

In all instances it is advised to use a [track element to provide these descriptions](https://www.w3.org/WAI/WCAG21/Techniques/html/H96.html).

If you’re working with a video that has no audio, the preferred method is still adding an audio description to describe the video content, but it is also acceptable to offer an text-base description of the video content ([Audio-only and Video-only (Prerecorded), Level A](https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded)) if the content is simple enough to support it. This is different than a video with an audio track, because temporarily leaving the video to read is unlikely to degrade the experience.

Ideally we should be aiming for audio descriptions on all videos ([Audio Description (Prerecorded), Level AA](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=121#audio-description-prerecorded)), which would comply with all guidelines. However, in some instances it appears to be acceptable to just offer a media alternative ([Audio Description or Media Alternative, Level A](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=121#audio-description-or-media-alternative-prerecorded)), but isn’t ideal.

If you’re curious to hear a great example of audio descriptions, I encourage you to hop over to [Netflix and give Daredevil a listen](https://www.netflix.com/title/80018294); the descriptions are so good, that I found myself using them with every episode.

## Further Reading

- [Creating Accessible Videos](https://www.washington.edu/accessibility/videos/)
- [8 Steps to Creating Accessible Videos](https://www.sitepoint.com/accessible-video/)
- [W3C Multimedia FAQ](https://www.w3.org/2008/06/video-notes)
- [W3C Video Captions](https://www.w3.org/WAI/perspective-videos/captions/)
- [YouTube Accessibility: How to Create Accessible Videos with Closed Captioning](https://medium.com/@krisrivenburgh/youtube-accessibility-how-to-make-accessible-videos-with-closed-captions-2208acf17eeb)
- [How to Make Audio Descriptions](https://digital.gov/2014/06/30/508-accessible-videos-how-to-make-audio-descriptions/)
- [Why a Transcript is not Enough](https://www.3playmedia.com/2016/02/01/why-a-transcript-is-not-enough-to-make-your-videos-compliant-with-accessibility-law/)
