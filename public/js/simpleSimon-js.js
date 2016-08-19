console.log("linked");
// Randomly select a square and fade that color in then out.
var divColors = ["#red", "#green", "#yellow", "#blue"]; //# grabs id and lets the function change the css all in one go
var randomDiv;
var clickedDiv = '';
$( "#start" ).click(function() {  


  	function flashColor(){
		  var elemLength = divColors.length;
		  var randomNum = Math.floor(Math.random()*elemLength);
		  var randomDiv = divColors[randomNum];
		  $(randomDiv).animate({
		  	opacity:'1'
		  	},200).animate({
		  	opacity:'0.5'
		  	},800)
		  	console.log(randomDiv);
	};
	flashColor();	
// Allow the user to click on the square that was selected.

var clickedDiv = $( ".color" ).click
	(function() {
	var thisId = "#" + this.id;	
	console.log(thisId);
	});
	if (condition) {
    // code here gets executed if condition evaluates to true
	} else {
	    // code here gets executed if condition evaluates to false
	}



	

	
});


// Continue randomly selecting colored square/shapes 
// adding the new random selection to be added to the previous selection. 
// Eventually you will end up with a random sequence of selected colors.


// Each time a new color is added to the sequence allow the user to enter 
// (click) the sequence in the order as it was played.


// If the user continues to get the order correct then proceed to adding 
// another color to the collection until the user gets the order incorrectly.


// Keep track of how many rounds the user is able to go.