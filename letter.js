//letter objects are created in word.js and stored in an array.
function Letter(letter){
	this.letter = letter;
	this.found = false;
	this.display = function(){
		if (this.found) return " " + this.letter + " ";
		else return " _ ";
	};
};



module.exports = Letter;