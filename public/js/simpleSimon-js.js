console.log("linked");
// Randomly select a square and fade that color in then out.

$(function(){
 
  var divColors = ["#red", "#green", "#yellow", "#blue"];
  var elemLength = divColors.length;
  var randomNum = Math.floor(Math.random()*elemLength);
  var randomDiv = divColors[randomNum];
  $(randomDiv).css("opacity", "1");
 
});	
// 


// Allow the user to click on the square that was selected.


// Continue randomly selecting colored square/shapes 
// adding the new random selection to be added to the previous selection. 
// Eventually you will end up with a random sequence of selected colors.


// Each time a new color is added to the sequence allow the user to enter 
// (click) the sequence in the order as it was played.


// If the user continues to get the order correct then proceed to adding 
// another color to the collection until the user gets the order incorrectly.


// Keep track of how many rounds the user is able to go.