---
title: VA Mobile App & Mobile Platform
description: The VA Mobile Health and Benefits app is a central digital location for Veteran healthcare
imagePath: screen__vam--full.png
thumbnail: screen__vam--half.png
imageCaption: A screenshots of the VA Health and Benefits application
url: https://mobile.va.gov
layout: layouts/project.njk
tags: ["project"]
date: "2024-01-02"
---

## Project Specifications

[Download the iOS app](https://apps.apple.com/us/app/va-health-and-benefits/id1559609596) | [Download the Android app](https://play.google.com/store/apps/details?id=gov.va.mobileapp)

- **Role**: Engineering Lead
- **Accessibility Compliance**: WCAG 2.2 Level AA
- **Application engineering**: React Native, fastlane, Swift, Kotlin
- **CI / CD**: Github Actions
- **Automated Testing**: Detox, Jest
- **Monitoring**: Datadog, Firebase
- **API**: Ruby on Rails

## Project Details

At Ad Hoc I helped develop and maintain the VA Health & Benefits mobile app, which leverages native mobile features to let Veterans quickly and easily check the status of their services and complete simple, transactional tasks across health and benefits. The app has been downloaded more than 2 million times, with ratings of 4.8 in the Apple App Store and 4.6 in the Android Play Store (as of 2024).

- [View the app code](https://github.com/department-of-veterans-affairs/va-mobile-app)
- [View the design system code](https://github.com/department-of-veterans-affairs/va-mobile-library)

### Establish goals, objectives, key performance metrics

In 2022, we began leading a strategic process with the VA Health & Benefits mobile app team and stakeholders at the Department of Veteran Affairs to develop program objectives and key results (OKRs) for the mobile app.

Objectives were broken down into key results and bets. Key results included tracking effectiveness, satisfaction, and efficiency. We also measured success with more traditional analytics like increasing monthly users by 20% and having 50% of users return in the first week. We tracked metrics in the flagship monthly reporting dashboard. Bets outlined in the 2023 OKR document center on iterative delivery, including a complete rebuild of the navigation system, Encouraged Update, haptic feedback, WCAG 2.2 compliance updates, Prescription Refill, Veteran Status Card, and documentation.

### Pushing new features and incremental improvements

As a team we implemented a “Sprint 0”process  to keep features and innovative ideas flowing into the app. Sprint 0 is a quick rundown for an idea, with limited discovery, that is presented to stakeholders for approval. The Sprint 0 agenda outlines all of the ideas, features, and projects that the team has generated.

The mobile app has matured from its initial MVP state to a feature-rich application that is now a cornerstone of digital health care for VA. One standout feature added to the app is the ability to refill prescriptions. This addition included a detailed research plan, report , and recommendations on how to improve the feature based on feedback from Veterans.

Through this process I also lead the creation of a distributed React Native-based design system that is now integrated into the mobile app. This separation of the components, colors, and tokens allows the work to happen in separate streams without overlapping priorities. The creation of a design system also opened up the start of a mobile platform and allowed the VA to govern and standardize across an ecosystem containing more than 70 mobile applications.

### Collecting user feedback

We used manual and automated methods of collecting customer feedback. Customer feedback comes via app/play store reviews and feedback from the central VA Mobile email address. These manual practices have coalesced into the “Reddit scraper,” a tool that was built to mimic the manual gathering of information from Reddit and App/Play stores, allowing us to bring social-listening feedback together in one place. This data is then fed into a Large Language Model for querying and further analysis.

We kept an eye on Veterans; experience with automated monitoring services including DataDog (monitoring API health), Sentry (tracking API errors), and Firebase (following up on app crashes). These services are connected to reporting systems to ensure that the engineer on call can respond quickly to any incidents.

If a monitored incident occurs, the team follows the incident reporting procedure; once the incident is resolved, a postmortem procedure is quickly followed.

### Leveraging cloud-based infrastructure and platforms

The Mobile API runs in the context of a larger veteran API service, the VA Platform’s shared API service hosted on EKS. Schema stability is especially important in the mobile environment because the team cannot control which app version is installed on a user’s device, which is a key difference between working on the Web and Mobile; if the data schema were to change, the experience would be broken without a way to repair it. On the Web, in contrast, frontend logic delivered to the user is highly controllable through a browser.

The Mobile API contains logic and processing for the app to consume the data it needs. This logic lives in the API (backend) rather than the app (frontend) because app stores take multiple days to update; this allows the API to respond more quickly if issues are identified, allows us to maintain and support older versions of the app, and is faster than relying on the device processor.

Upstream data services are migrated into an established schema in the Mobile API that meets the requirements of each app feature. This stabilizes the data if an upstream service changes and allows us to create custom error messaging for delivery into the app. The upstream services that the mobile API consumes are visualized in the upstream services map.

### Continuously integrating and releasing code

The mobile app works on a two-week release cycle to balance sprint work with approval timelines for the app/play stores, but we constantly merge code into the primary branch. The release process is highly automated and tied to stakeholder approval as well as the success of automated checks.
The codebase contains nearly 1,000 unit tests at around 85% code coverage that must successfully complete before code can be staged for release. We also set up a suite of end-to-end tests using Detox that mimic manual QA. Implementation of these tests in 2023 has reduced the amount of manual testing needed to provide a stable release candidate by roughly 75%.

### Monitoring infrastructure health

There is a monthly report for the app that brings together all relevant metrics.
Infrastructure health is monitored with DataDog, Sentry, and Crashlytics. DataDog is an API monitoring tool that reports upstream outages to Slack. Sentry is the automated error tracking tool. We audit existing errors when fixing tech debt or silencing expected errors.
Crashlytics allows the team to monitor and triage app crashes on a user’s device. It tracks the cause of crashes so we can quickly respond to any trends forming in the app. Crashlytics reports what the user was doing at the time of the crash so our QA team can replicate and evaluate problems. It also sends an email alert to the team in case of any growing stability issues.
