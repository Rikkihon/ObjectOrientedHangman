//Word.js: 
//Contains a constructor, Word that depends on the Letter constructor. 
//This is used to create an object representing the current word the user is attempting to guess.
// That means the constructor should define:

//An array of new Letter objects representing the letters of the underlying word
//A function that returns a string representing the word. 


//A function that takes a character as an argument and calls the guess function on each letter object 
//(the second function defined in Letter.js)
var index = require("./index.js");
var Letter = require("./letter.js");
var letterInWord = ""; //this is the same as "characters in the word"/

var DEBUG = false;

var Word = function (randomWord) {
    DEBUG && console.log("")
    this.randomWord = randomWord;
    var split = randomWord.split("");


    this.arrayOfObjects= []; // this will be an array of objects after we execute line 26
    for (i = 0; i < split.length; i++) {
        this.arrayOfLetters.push(new Letter(split[i])); //array of objects  with just one letter in it added to it passed by index
    }

    this.guess = function (userLetter) {
        let temp = ""; //setting a temporary empty string
        for (i = 0; i < randomWord.length - 1; i++) {
            temp += this.arrayOfObjects[i].matchedLetters(userLetter) + " ";
        }
        console.log(temp);

    }

    this.concatenate = function (concatenate) {
        // We start with an empty string.
        var wordView = "";
        //Loop through the letters of the word we are trying to guess..
        for (var i = 0; i < this.letterInWord.length; i++) {
            // If the current letter has been guessed, display that letter.
            if (this.matchedLetters.indexOf(this.letterInWord[i]) !== -1) {
                wordView += this.lettersOfTheWord[i];
            }
            // If it hasn't been guessed, display a "_" instead.
            else {
                wordView += "&nbsp;_&nbsp;";
            }
        }
        //This should call the function on each letter object (
        //the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    }
}
console.log(Word.randomWord);

//this.rebuildWordView();
//rebuildWordView: function() {
// We start with an empty string.
//var wordView = "";

// Loop through the letters of the word we are trying to guess..
//for (var i = 0; i < this.lettersOfTheWord.length; i++) {
// If the current letter has been guessed, display that letter.
//if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
// wordView += this.lettersOfTheWord[i];
// }
// If it hasn't been guessed, display a "_" instead.
//  else {
// wordView += "&nbsp;_&nbsp;";
// }
// }

module.exports = Word;