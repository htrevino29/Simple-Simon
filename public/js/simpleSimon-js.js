console.log("linked");
(function(){
	'use strict';
	// Randomly select a square and fade that color in then out.
	var divColors = ["#red", "#green", "#yellow", "#blue"]; 
	//# grabs id and lets the function change the css all in one go
	var randomDiv;
	var clickedDiv = '';
	var thisId;
	var randomSequence =[];
	var currentIndex = 0;
	var i = 0;


	function simonsPick(){
		var randomNum = Math.floor(Math.random()*divColors.length);
		randomDiv = divColors[randomNum];
		randomSequence.push(randomDiv);
		i=0;
		playBack();
	}

	function flashColor(idSelector){   
	  $(idSelector).animate({
	  	opacity:'1'
	  	},300).animate({
	  	opacity:'0.5'
	  	},300)
	  	
	};

	function playBack(){
	console.log(randomSequence);

		setTimeout(function(){
			var currentDiv = randomSequence[i];
			flashColor(currentDiv); 
	
			i++;
			
			if (i < randomSequence.length){
				playBack();
			} else {
				clicks();
			} 
		},1000);

	};

	$( "#start" ).click(function() {
		simonsPick(); 
			
	});
	// Allow the user to click on the square that was selected.
	var clicks = function() {
		$( ".color" ).on("click", function() {
			thisId = "#" + this.id;	
			// console.log(thisId);
			flashColor(thisId);
				
			// correct,
			// is there more,
			// incorrect

			if (thisId == randomSequence[currentIndex] ) {

			
				currentIndex++;

				if ( currentIndex == randomSequence.length ) {
					console.log('keep going');
					currentIndex = 0;
					$('.color').off('click');					
					simonsPick();
				} else {
					$('.color').off('click');
					clicks();
				}
			} else {
				$('.color').off('click');
				alert('GAME OVER!')
				location.reload();

			} 

		});	
	}

})();

// Continue randomly selecting colored square/shapes 
// adding the new random selection to be added to the previous selection. 
// Eventually you will end up with a random sequence of selected colors.


// Each time a new color is added to the sequence allow the user to enter 
// (click) the sequence in the order as it was played.


// If the user continues to get the order correct then proceed to adding 
// another color to the collection until the user gets the order incorrectly.


// Keep track of how many rounds the user is able to go.