console.log("linked");
// (function(){
	'use strict';
	// Randomly select a square and fade that color in then out.
	var divColors = ["#red", "#green", "#yellow", "#blue"]; 
	//# grabs id and lets the function change the css all in one go
	var randomDiv;
	var clickedDiv = '';
	var thisId;
	var randomSequence =[];
	var currentIndex = 0;


	function simonsPick(){
		var randomNum = Math.floor(Math.random()*divColors.length);
		randomDiv = divColors[randomNum];
		randomSequence.push(randomDiv);
	}

	function flashColor(idSelector){   
	  $(idSelector).animate({
	  	opacity:'1'
	  	},300).animate({
	  	opacity:'0.5'
	  	},300)
	  	// console.log(idSelector);
	};

	function playBack(){
		var i = 0;

		setInterval(function(){
			var currentDiv = randomSequence[i];
			flashColor(currentDiv); 
			i++;
		},1000);
		console.log(randomSequence);
	}

	$( "#start" ).click(function() {
		simonsPick(); 
		playBack();
			
	// Allow the user to click on the square that was selected.

		$( ".color" ).click(function() {
			thisId = "#" + this.id;	
			// console.log(thisId);
			flashColor(thisId);
				
			// incorrect
			// correct
			// is there more

			if (thisId == randomSequence[currentIndex] && thisId == randomSequence[randomSequence.length - 1] ) {	
				currentIndex = 0;
				simonsPick();
				playBack();
			} else if (randomSequence[currentIndex] == thisId && currentIndex < randomSequence.length ) {

				console.log('keep going');
				currentIndex++;


			} else {
				console.log('you lose!');
				currentIndex = 0;
				randomSequence = [];

			} 

		});	

	});

// })();

// Continue randomly selecting colored square/shapes 
// adding the new random selection to be added to the previous selection. 
// Eventually you will end up with a random sequence of selected colors.


// Each time a new color is added to the sequence allow the user to enter 
// (click) the sequence in the order as it was played.


// If the user continues to get the order correct then proceed to adding 
// another color to the collection until the user gets the order incorrectly.


// Keep track of how many rounds the user is able to go.