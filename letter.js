//Letter.js: 
//Contains a constructor, Letter. This constructor should be able to either 
//display an underlying character or a blank placeholder (such as an underscore), 
//depending on whether or not the user has guessed the letter. That means the constructor should define:


//A function that takes a character as an argument and 
//checks it against the underlying character, 
//updating the stored boolean value to true if it was guessed correctly


/*
1) initialization - need to send a letter to the new object 
2) .guess (method) - it will take a letter, and return a bool if it right letter or not, if yes - it will call showTheLetter
3) .showTheLetter (method) - it will replace underscore symbol to the actual letter
*/

var Letter = function (actualLetter) {

  this.char = "_ "; //A string value to store the underlying character for the letter
  this.state = false; //A boolean value that stores whether that letter has been guessed yet
  this.letter = actualLetter;
  this.matchedLetters = (guess) => {
    if (guess == this.letter ) {
      this.state = true;
      return this.letter
    } else {
      return "_";
    }
  }
};

module.exports = Letter;