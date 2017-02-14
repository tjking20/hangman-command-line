var Letter = require("./letter.js");


function Word(word){
	this.word = word;
	this.letters = []
	this.init = function(){
		for(var i = 0; i < word.length; i++){
			var character = new Letter(this.word[i]);
			this.letters.push(character);

		};
	};
	this.display = function(){
		var str = "";
		for(var i = 0; i < this.letters.length; i++){
			str = str + this.letters[i].display();
		};
		return str;

	};
	this.updateLetter = function(guess){
		for(i = 0; i < this.letters.length; i++){
			if (guess == this.letters[i].letter) this.letters[i].found = true;
		};
		
	};
};

// var dog = new Word("dog");

// dog.init();
// dog.updateLetter(process.argv[2]);
// console.log(dog.display());


module.exports = Word;

