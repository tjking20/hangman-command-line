var Word = require ("./word.js");
var inquirer = require('inquirer');


//runGame executes the game by choosing a random word and initiating inquirer
function runGame (){
	var guessesLeft = 10;
	var words = ["cyborg", "terminator", "arnold", "ill be back"];
	var randomWord = words[Math.floor(Math.random() * words.length)];
	var chosenWord = new Word(randomWord);

	chosenWord.init();//this loops over the chosen word and creates letter objects
	
	//inquirer provides readable text on the client
	inquirer.prompt([
	  {
	    type: "input",
	    name: "play_game",
	    message: "Welcome to the year 2029, would you like to play terminal terminator hangman? PLEASE ENTER (Y/N)"
	  }

	]).then(function(data) {
		data.play_game.toLowerCase();
		
		// when user chooses whether or not to play 
		// the conditional will launch the game interface.
	  	if (data.play_game == "y"){

			function runInterface(){
			    inquirer.prompt([
			    {
			    	type:"input",
			    	name: "guess",
			    	message: "Guess a letter! If you are done, type 'quit'---->"
			    }
			    ]).then(function(data){
			    	data.guess.toLowerCase();

			    	// allows user to enter information 
			    	if(data.guess != 'quit'){
						chosenWord.updateLetter(data.guess);
						console.log(chosenWord.display());
						runInterface();
			    	} else{
			    		return false;
			    	};

			    // 	for (var i = 0; i < chosenWord.letters.length; i++){
			    // 		if (chosenWord.letters[i].found == false){
			    // 			chosenWord.updateLetter(data.guess);
							// console.log(chosenWord.display());
			    // 			runInterface();		
			    // 		} else{
			    // 		console.log("Congratulations!");
			    // 		};
			    // 	};

			    });
		    };

	    	runInterface();

		}else{
			return "Sorry, maybe next time!";
		};

	});

};

runGame();


	

		