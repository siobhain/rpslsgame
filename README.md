![amiresponsive](docs/amir.PNG)


![logo](favoicon.ico)
image.png

https://siobhain.github.io/rpslsgame/

# RPSLSGame
RPSLSGame is a  Rock Paper Scissors Lizard Spock Game by Siobhan O'Brien as part of PP2 for CI

#Introduction

As part of PP2 for CI I chose to create a RPSLS game.  The game starts when the user clicks on one of the hand icons/buttons.  
https://ui.dev/amiresponsive


##About RPS
Rock paper scissors is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V).

The game has three possible outcomes: a draw, a win or a loss. A player who decides to play rock will beat another player who has chosen scissors ("rock crushes scissors" or "breaks scissors" or sometimes "blunts scissors"[4]), but will lose to one who has played paper ("paper covers rock"); a play of paper will lose to a play of scissors ("scissors cuts paper"). If both players choose the same shape, the game is tied and is usually immediately replayed to break the tie. The game spread from China while developing different variants in signs over time.

Rock paper scissors is often used as a fair choosing method between two people, similar to coin flipping, drawing straws, or throwing dice in order to settle a dispute or make an unbiased group decision. 

![RPS Diagram](docs/rps.png)

![RPSLS Diagram](docs/rpsls.jpeg)


## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)



## UX/UI Section
### Intention of this game, explain goal of game
### design choices font colors
It a pretty simple game so I decided for very simple lines in presentation of this game,  I wanted to spend the majority of time and effort on javascript (js).  I started with basic html/css layout with placeholder div/spans etc for the data js exchanges with the DOM I used gaudy colors in the development/test stage to make it easier to identify counters etc but all these removed once js finished & before final deployment. 

I chose the google font Robtot for its clear lines and east of readability
I chose small palette of pale colors so as not to distract user from the game.

INSERT PALETTE MOSS GREEN AND THE 2 YELLOWS BALCK AND WHITE AND ONE RED

Inkeeping with the simplicity of the game I chose to use fontawesome icons for the game hand gestures.  Here is an legend from the Help section of the game :


<!-- <div style="text-align:center;"> -->
![RPSLS Legend](docs/rpsls-icons.PNG "Legend")
<!-- </div> -->

<img style="text-align:center;" src="docs/rpsls-icons.PNG">

I made a simple favicon from the Rock Paper Scissors hand gesture, I decided against adding the Lizard & Spock hand gestures as it got too crowded & difficult to distunguish each icon. Here is the favicon : 

<!-- <p style="background-color: palegoldenrod;","font-color: black">here we go -->
![RPSLS favicon](favicon.ico)
<!-- </p> -->

As I could not ascertain how long the javascript would take I started with the simplier Rock Paper Scissors game with the intention to get that working before I added the complications of Lizard & Spock. This worked out well - in fact adding Lizard & Spock resulted in additions only to the Switch statement in findWinners function. Naming the functions that were needed before starting any code was also great advice from the LMS(Mark).

Before coding I thought that the RPS game logic would be an good use case for Switch/Case statements so that was always in my head when deciding what js functions were needed. Initally I created the following empty functions 

 * runGame
 * findWinner
 * incrementDeviceWins
 * incrementUserWins
 * incrementDraw
 * displayResults

I did not know at that early stage what parameters (&return) each function would use. During development I added another function 

 * playAgain

 The playAgain is used to give user option replay the game.

#### runGame(userHand)
This is the main function of the RPSLS game, It is fired whenever the user clicks on one of the gameButtons (ie Rock, Paper... etc) It takes in the name of the game Button clicked by the user (named userHand) & does the following

  1. Randomly assign a device option to variable named deviceHand
  1. Compare both values via === and if matching then its a draw
  1. Otherwise findWinner() is called to determine the winner
  1. The winner is returned from findWinner in resultText
  1. Get the nummebr of turns from the dom in a span with Id= turn 
  1. increment the number of turns & write back to the Dom
  1. check if it is 5th turn & if so the round is finished so call displayResults()

 #### findWinner(userHand, deviceHand) 
 This function is called by runGame when user and device choices are different options. It is not called if matching options are chosen (ie Rock & Rock are chosen).  Each player has 5 options so with 2 players there are 25 permutations,  subtract the 5 matching options and that leaves 20 unique options that need to be catered for in this functions switch.case statement. 
 
 The function takes 2 parameters, the user chosen option (userHand) and the randomly assigned device option (deviceHand) & does the following

 1. Both parameters are concatenated into one string called result
 1. A switch statment with the 20 options is presented and js will match with the chosen result
 1. Its either a win for the user or win for device so appropriate increment function is called & appropriate feedback to the user is created
 1. The function returns the user feedback in string format
1.  There is a default case to cater for problems.


#### incrementXXXX
There are 3 increment functions whose code is mainly taken from the Code institute Love Maths incrementScore() function.

 1. incrementDeviceWins
 1. incrementUserWins
 1. incrementDraw

 An interesting fact is that increment needs to be BEFORE the variable as javascript  will increment oldScore before writing to dom, if its oldScore++ then js writes oldScore to dom and then increments it.

#### displayResults()
This function is called by runGame once 5 turns have been taken
The aim is 3 fold
    1. Let the user know the round is finished
    1. Let the user know the results of the round
    1. Give the user the option to play again

It is necessary to disable the 5 gameButtons while the user decides to play again,  the results are taken from the dom & Template literals (backquotes) provide a way to interpolate ${result} into string for output to the div  id=roundResult.

#### playAgain()

This function is fired once the user hits the "Play Again" button
The "Play Again" button is presented to the user by displayResults() function once the round of 5 turns is finished.
This function does the following :
  1. re-enable the 5 Game buttons : Rock Paper Scissors Lizard & Spock
  1. Reset dom counters : turn, draw, user, device
  1. Reset dom text : winorloseTurn roundResults


#### EventListeners
Once the Dom is loaded the following are setup



### wireframes 

![rpsls wireframe](docs/rpsls-wireframe.PNG)

User Stories & Acceptance Criteria
A US is an informal general explanation of a software feature written from the prespective of an end use, its purpose is to articulate how a how s/w feature will provide value to the customer
as per Daisy McGitt in S/W test webinar
Format of a user story
As a <who> I want to <what> so that I can <why>
Acceptance Criteris - happy path is way it normally works and alternative sometime referred to as sad path ...ie user put in incorrect data 

As a first time user
I want to find out about this game so I can have a go at it
I want to play the game so i can see if I can beat the computer
I want to know each time i take a turn who wins the turn and what did the computer pick

#

As a returning user 
I want to just get on and play the game

As an owner
I want to make the game intresting and simple for others to play

user feedback
I want users to knwo the result at the end of each turn and end of each round.


Type of tests
unit test
systems test - evaluate the entire application
regression test - rerun non functional test, like when new functionality added it caused side effects and broke something else  
consider person looking at this after u ahs no idea baout the applicaiton


No value to be gained by adding a navbar so decided not to include, I have on the advice of my mentor included a footer which contains social media icons and the line that the game is for educational purposes.
## CREDITS

RPS rules & diagram courtesy of : https://en.wikipedia.org/wiki/Rock_paper_scissors
RPSLS rules & diagram courtesy of : https://www.instructables.com/How-to-Play-Rock-Paper-Scissors-Lizard-Spock


How To Create a Modal Box : https://www.w3schools.com/howto/howto_css_modals.asp

===============================================================================================================

## Features should incl Name, Description, how it works, screenshot, value to the user

#### Game footprint

Please take game footprint to mean both the header and body sections of html, both have the same background-color of pale yellow. The area outside of the game footprint is coloured a pale moss green.

WIDTH
RPSLS is a small game, it does not need much screen space. However, concerning the screen width, I did not want to have to use several media queries to cater for different screen widths. On mobile for example I want to make use of most of the width but once width get to approx 500px that plenty size for the game so I want to cap game width at 500px.  I used the width: min(500px, 90%).  I did succumb to one media query for screens > 1000px and increased the width to 800px.  

POSITION
The game is centered horizontally.I set padding at the top of the game footprint to be 5vh, which will be 5% of the viewport height, this is adequate for small screen devices but on larger screen it would be better to center the game in the screen but given time constraints I settled with 20% viewport padding (20vh) on screens wider than 1000px.


#### Header

The header section is made up of a H1 Name & H2 tagline.  H1 contains shorthand for the name of the game using the 1st letter of each hand gesture Rock Paper Scissors Lizard Spock, so RPSLS Game.  The subheader in H2 is considered the tag line, It contains the icon & name, both are contained in a span with {white-space: nowrap} so they are presented as a pair when the browser needs to render the H2 tagline onto 2nd/3rd line. Also made use of two &nbsp to ensure adequate separation from next/previous item.  These efforts are an attempt to get user used to the icons used for each hand gesture.


![RPSLS Header](docs/header.PNG)

#### Game Buttons
These are the 5 hand gestures that are central to the game, below is a screenshot from desktop 

![RPSLS Desktop gameButtons](docs/gameButtonsDesktop.PNG)

& from a mobile 320px screen

![RPSLS Mobile gameButtons](docs/gameButtonsMobile.PNG)

The 5 buttons are displayed on a grid with automatic column sizes for each button, The 5 buttons fit on screen from 300px 


All 5 gameButtons are white background with black font detailing both the icon and the name of the hand gesture.  The icon is double the font-size (at 2em) than the name underneath. The button corners are rounded slightly with a border-radius of 0.5em. On hover the background changes to a soft yellow color (a shade darker than the game background color) & alerts the user that it can be clicked. Once the Dom is loaded js adds a 'click' eventListener to each of these ganeButtons.  




how did u make favicon
### Existing Features

- __The Footer__ 

### Future Features
center game box on screen
## Testing 
show that u ahve conducted enough test to believe that game works well
go over features and ebsure they all work as intended
how does project work on different brpowsers and screen sizes

### Validator Testing
html W3C validator
css jigsaw
js


### Unfixed Bugs

wanted to hide the scoreboard at game start but could not get it wokring as get NaN when tried n ran outta time to investigate
## Deployment


## Credits 



RPS rules & diagram courtesy of : https://en.wikipedia.org/wiki/Rock_paper_scissors
RPSLS rules & diagram courtesy of : https://www.instructables.com/How-to-Play-Rock-Paper-Scissors-Lizard-Spock


How To Create a Modal Box : https://www.w3schools.com/howto/howto_css_modals.asp

===============================================================================================================

### Content 

### Media


## Other General Project Advice
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)


# List of features
# UX/UI
# Testing
# Deployment & Local Development

### Deployment

The game is deployed using GitHub Pages - 

###### Steps to deploy using github pages 
Login to Github
Navigate to the github repo https://github.com/siobhain/rpslsgame
In the repo, click on the Settings wheel
Om the left hand side click on Pages 
From the source dropdown elect the main branch and save, the game is now being deployed & may take a few minutes to eb fully loaded
The live link can be found here - https://siobhain.github.io/rpslsgame/

### Local Development

##### How to fork

To fork the repo

Login to Github
Navigate to the github repo https://github.com/siobhain/rpslsgame
Click on the fork dropdown on top righthand side
Click on the +(plus) Create a new repo

##### How to clone

To clone the repo

Login to Github
Navigate to the github repo https://github.com/siobhain/rpslsgame
Click on the Code dropdown, In the Local tab Choose one of  HTTPS SSH or GitHub CLI
Copy the link shown 
Open the terminal in your code editor and navigate to the location you want to use for the clone
Type git clone and paste the link/command you copied from GitHub 



# Citation of ALL sources(code, images, text)
# Future features 
