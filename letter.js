function Letter(letter){
	this.letter = letter;
	this.found = false;
	this.display = function(){
		if (this.found == true) return " " + this.letter + " ";
		else return " _ ";
	};
};





module.exports = Letter;