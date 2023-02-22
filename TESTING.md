<h1> Testing For Boodle </h1>

![amiresponsive](docs/amir.png)

# Table of Contents
- [Table of Contents](#table-of-contents)
  - [Manual Testing](#manual-testing)
  - [Browser Testing](#browser-testing)
  - [Device Testing](#device-testing)
  - [Validator Testing](#validator-testing)
  - [Lighthouse Testing](#lighthouse-testing)
  - [Accessibility Testing](#accessibility-testing)

<hr>

## Manual Testing

Feature Tested | Expected Result | Actual Result | Pass/Fail
---------------|-----------------|---------------|----------

<hr>


## Browser Testing 
Browser Tested | Working Status
---------------|---------------
Chrome | Works as expected
Firefox | Works as expected
Microsoft Edge | Works as expected
Mac OS Safari | Works as expected

<hr>


## Device Testing
Device Tested | Working Status
--------------|---------------
iPhone 8 Plus | Works as expected
<hr>

## Validator Testing

Test Type | Result | Comment
----------|----------------|-----
W3C HTML Validator | ![W3C Result](docs/htmlvalidator.png) | I needed to change all `<section>` to `<div>` as I do not have any headers within the game body element
W3C CSS Validator | ![css-result](docs/w3ccssvalidator.png) | n/a
JShint JavaScript Validator | ![js-result](docs/jshint.png) | 1. There are 2 warnings wrt line 35 & line 43, these are both in the area where I am setting up listeners on page load  1. There is unused variable playAgain, This is a function that is called from the html, It would be better to have an eventListener for this button 'click' function but time does not allow me to adjust this before submission



## Lighthouse Testing

Device | Result
-------|-------
Desktop| ![desktop-lighthouse](docs/testing_images/desktop-lighthouse.png)
Mobile | ![mobile-lighthouse](docs/testing_images/mobile-lighthouse.png)

## Accessibility Testing

![wave-testing](docs/testing_images/wave-testing.png)
![wave-results](docs/testing_images/wave-results.png)

Although there were three alerts during WAVE testing, I was not too worried about them as the first two were irrelevant to the website because it is a game and not a traditional webpage, and then the last one was not an issue as the music had no lyrics to transcript.