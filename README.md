# Emojipedia
This is an exercise foccusing on the useState hook in react, creating a site that shows the current time. 

## The problem
I used the starter code from a Udemy challenge, the goal is that you can fetch the latest time and displaying it by pressing a button. Part two of the challenge was to get the time to be automatically updated every second. I chose to create another button to be able to use both functions on the site. 

## How I did it
* I created a const = useState to be able to hold the time, and set the starting value to 00:00:00
* Wrote a function (updateTime) that fetches current time with new Date. and updates the state of time, connected it to the "Get time"-button with onClick. 
* Set the h1 to display current state of time. 

* Wrote a function that called the updateTime-function every second with setinterval(1000)
* Created another button: "start clock"
* Added some styling.

## What I learned
Gained some muscle memory regarding using the useState-hook, and appreciated the repetition of destructuring arrays. It would be nice to add some conditions to the buttons, and being able to stop and reset the clock.  

## View it live
https://kriss-real-time-clock.netlify.app/
