# Testing JavaScript Web Application with Jasmine's TDD Framework

## Description

This is a simulation of a Test-Driven Development (TDD) method or Red-Green Refactor Process. In this project we are given a web-based application that reads RSS feeds. Although the application has already been written, we were expected to write suites and specs with Jasmine’s testing framework. We were provided hints in the skeleton (feedreader.js) of what specs we need to write to test against the application’s JavaScript source (app.js).

### How to Run
Load index.html on a browser. It shows an initial list of articles from Udacity Blog. It has a hamburger icon which when clicked will show either a selection of other feeds or, if there are errors on the page, a menu of error view options. It is not a regular page in that this site also presents the Jasmine test results at the bottom of the page — specifically the test suites for content validity and UI event results.

## Tests Performed
* RSS feeds are defined in `allFeeds` array and one or more exist in the array.
* Each feed in `allFeeds` has a defined, string-type, non-empty and valid `url`.
* Each feed has a defined, string-type, non-empty `name`.
* The off-canvas menu is hidden by default on load.
* The menu toggles visibility upon clicking the hamburger icon.
* The initial feed has at least one item.
* The feed changes content upon selecting a different feed in the menu.

## Some of the Ways to Make App Fail

#### in `app.js`
1. delete `allFeeds` array
1. delete either `name` or `url` field in allFeeds
1. put a non-string type in `name` or `url` field
1. put an empty-string in `name` or `url` property
1. put a non-valid URL in `url`. localhost and IP addresses will also be considered non-valid for this test.

#### in `style.css`
The application and and hence the specs rely heavily on DOM access through classes and IDs defined in a CSS file. Through handlebarsjs templating app, DOM is manipulated through population of bound values with html tags.
1. deleting the `style.css` file will render the page improperly but will not register unit testing errors
1. deleting `menu-hidden` or `menu` classes will render elements improperly but will not register errors

#### in `index.html`
1. delete references to `menu-hidden`, `menu-icon-link`, `feed`, `entry` ID and classes

#### in `feedreader.js` (Only feeds 0, 1, 2, and 3 are defined in `app.js`.)
1. in suite “Initial Entries”, change `feedId` to anything but 0 to 3
1. in same suite, change references to style classes in `feedItems`, namely `.feed` and `.entry`
1. in suite "New Feed", change `initialFeedId` and `compareFeedId` to anything but 0 to 3

## Where are the Relevant Files
* index.html
* css/style.css
* js/app.js
* jasmine/spec/feedreader.js

## Dependencies
* jQuery
* Handlebars
* Jasmine-2.1.2
* Google Fonts
* icomoon.css and fonts
* normalize.css

## Resources
* [Jasmine documentation](http://jasmine.github.io/2.2/introduction.html)
* [Google Feed API](https://developers.google.com/feed/)
* Udacity's JavaScript Testing course with Mike Wales
* [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
