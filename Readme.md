# Google Tag Manger Tricks

I work as the analytics implementation lead for a marketing agency. As such I get tons of requests for "add these pixels here and there" which tend to bloat the GTM interface and slow it down. For instance we inherited one container from a client that had **60** tags set to fire on all pages. This created a race condition on mobile devices that caused the site to freeze for a good 30 seconds until all tags were created.

We solved this by migrating all these `img`, `iframe`, `script` tags into one custom html tag where we call `document.createElement` a bunch of times. This adds them all sequentially rather than at the same time and has no noticeable performance implications (Shouout to GTM's automatic minifying and uglytfing).

This repository will contain a number of tricks we use to take care of the most common issues. Hopefully it will help you out there.

* [Creating Floodlight Tags](https://github.com/maxfwerner/google_tag_manager_tricks/tree/master/doubleclick_for_publishers_dfp/floodlight_tags.js)
* [Making sure you have Jquery](https://github.com/maxfwerner/google_tag_manager_tricks/tree/master/jQuery/ScriptLoaderInit.html). This is a GTM tag intended to ensure jQuery availability on the site. It will scan the page source to see if jQuery is loaded and if not will add it in, wait until jQuery is available and then push a GTM event for you to use, knowing jQuery is ready to use.
