# Heap Analytics

At my new job I got to play with a new toy: [Heap Analytics](https://heapanalytics.com/).

It has a number of cool features including pretty good user tracking capabilties but what drew my eye is that they capture everything a user does and then give you the ability to retroactively go back and use queries or define actions and get historical data for events you hadn't set up yet.

One of the main ways they do this is by storing the entire click DOM tree as well as some other information.

So naturally I asked myself the quesition: Can you replicate this on Google Analytics for free?

Short Answer: No.
Long Answer: Kind of. One step would be to at least grab some of the information which will help you. So here is part of it.

## Click Tracking

[Click Tracker](https://github.com/maxfwerner/google_tag_manager_tricks/tree/master/heapAnalytics/heapClickTracker.js)
[Click Tracker Minified](https://github.com/maxfwerner/google_tag_manager_tricks/tree/master/heapAnalytics/heapClickTracker.min.js)

Pros:

* It grabs a click element's entire dom tree including all `IDs` and `Classes`
* It doesn't rely on jQuery
* It is compiled down to ES2015 compatibility
* It uses `document` and `mouseup` which makes it a bit more robust in case there is other JS interfering with the click event.

Cons:
* It doesn't grab any other attributes like `data-name`, `data-target`, etc. 