function Letter(letter){
	this.letter = letter;
	this.found = false;
	this.display = function(){
		if (this.found) return " " + this.letter + " ";
		else return " _ ";
	};
};


// var d = new Letter(d);
// var o = new Letter(o);
// var g = new Letter(g);


module.exports = Letter;