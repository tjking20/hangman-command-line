var Word = require ("./word.js");
var inquirer = require('inquirer');


//runGame executes the game by choosing a random word and initiating inquirer
function runGame (){
	var guessesLeft = 10;
	var words = ["terminator", "cyborg", "ill be back"];
	var randomWord = words[Math.floor(Math.random() * words.length)];
	var chosenWord = new Word(randomWord);

	chosenWord.init();//this loops over the chosen word and creates letter objects
	
	//inquirer provides readable text on the client
	inquirer.prompt([
	  {
	    type: "input",
	    name: "play_game",
	    message: "Hello, would you like to play hangman? (Y/N)"
	  }

	]).then(function(data) {
		
		// when user chooses whether or not to play 
		// the conditional will launch the game interface.
	  	if (data.play_game == "Y"){

			function runInterface(){
			    inquirer.prompt([
			    {
			    	type:"input",
			    	name: "guess",
			    	message: "guess a letter! If you are done, type 'quit'//-->"
			    }
			    ]).then(function(data){

			    	// allows user to enter information 
			    	if(data.guess != 'quit'){
						chosenWord.updateLetter(data.guess);
						console.log(chosenWord.display());
						runInterface();
			    	} else{
			    		return false;
			    	};

			    	// for (var i = 0; i < chosenWord.length; i++){
			    	// 	if (chosenWord.letters[i].found == false){
			    	// 		// runInterface();
			    	// 		console.log("woot")
			    	// 	} else{
			    	// 	console.log("Congratulations!");
			    	// 	} ;

			    });
		    };

	    	runInterface();

		}else{
			return "Sorry, maybe next time!";
		};

	});

};

runGame();


	

		