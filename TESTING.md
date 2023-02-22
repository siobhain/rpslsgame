<h1> Testing For RPSLS Game </h1>

![amiresponsive](docs/amir.png)

# Table of Contents
- [Table of Contents](#table-of-contents)
  - [User Story Testing](#story-testing)
  - [Browser Testing](#browser-testing)
  - [Device Testing](#device-testing)
  - [Validator Testing](#validator-testing)
  - [Lighthouse Testing](#lighthouse-testing)
  - [Accessibility Testing](#accessibility-testing)

<hr>

Feature | Expected Result | Pass/Fail
### User Story Testing

#### First Time User

|User Story | Test | Expected Result| Actual|
|---------------|-----------------|---------------|---|
|I want to find out about this game so I can have a go at it|Click on the Help button| The help modal opens giving the user all the instructions needed to play the game|PASS|
|I want to play the game so I can see if I can beat the computer | Start clicking the game buttons to play a round & play 5 rounds| You win some rounds, You lose some rounds, You may draw|PASS|
|I want to know each time I take a turn who wins the turn and what did the computer pick|Click on a gameButton|Turn results are displayed on the screen telling user what the device placed & if they won or lsoe this turn, also note that the counters are updated|PASS|

#### Returning User
 
|User Story | Test | Expected Result|Actual|
|---------------|-----------------|---------------|----|
|I want to just get on and play the game|Start ckicking on the gameButtons and play 5 turns to complete a round|The turn results are displayed on screen as each turn is taken and the rouns results are displayed at the ned of the round wqith the option to Play Again|PASS|

#### Owner User Stories
 
|User Story | Test | Expected Result|Actual|
|---------------|-----------------|---------------|----|
|I want to make the game simple for others to play| Is the game easy to play|Load the game and click some buttons, You can see results of the game|PASS|
|I want user to know the result at the end of each turn and end of each round|Play a turn| The turn results are displayed on screen|PASS|
|I want user to know the result at the end of each round|Play a round|The round results are displayed on screen|PASS|

---
<hr>

#### Features not in user stories

|Feature | Expected Result | Actual|
|-----|-----|-----|
|gameButtons disabled when round finishes|Game Buttons not cluickable & visibly disabled when round results are displayed|PASS|
|gameButton disabled when Help modal invoked|Defunct Feature since helpModal now covers majority of game footprint & gameButtons are no longer visible when helpModal is displayed|n/a|




## Browser Testing 
|Browser  | Result
|---------------|---------------
|Chrome | Works as expected
|Firefox | Works as expected
|Microsoft Edge | Works as expected

<hr>

## Validator Testing

|Test Type | Result | Comment|
|----------|----------------|-----|
W3C HTML Validator | ![W3C Result](docs/htmlvalidator.png) | In order to clear errors/warnings I had to change all `<section>` elements to `<div>` I do not have any headers within the game body elements, I have meangingful class and Id names but did not require heaI know this will effect 
W3C CSS Validator | ![css-result](docs/w3ccssvalidator.png) | n/a
JShint JavaScript Validator | ![js-result](docs/jshint.png) **Warnings** at line 35 & line 43, these are both in the area where I am setting up listeners on page load In both cases I am setting up a function to be invoked on 'click' of a button, the variables used inside these function are used elsewhere within the "page load" setup hence the warning, Since the game itself is not too complicated as variables are defined just a couple of lines above being used I think in this case it is acceptable & will not lead to confusion 
|JsHint continued|"|There is **unused variable `playAgain`**, This is a function that is called from the html, It would be better to have an eventListener for this button 'click' function but time does not allow me to adjust this before submission
<hr>

## Lighthouse Testing

|From  | Result|
|-------|-------|
|Desktop| ![desktop-lighthouse](docs/lighthousedesktop.png)|

<hr>

## Accessibility Testing

|WAVE Results| 
|-------|
|![wave-testing](docs/wave.png)|

|Alert  | Comment|
|:-------:|-------|
|![wave-alert](docs/wavealerts.png) |Alert : `<noscript>`** but in the case of a browser not supporting js on this site the actual text content is accessible so I don't think there is need for an `aria label`.|
|"|Second alert is for the legend table in the helpModal as I do not ahve a `table head`. I purposely removed the `thead` several commits back as I did not see its value, its self explanatory what the table is in fact I probably should just have made this a `list` element!|
