
//Randomly selects a word and uses the Word constructor to store it
//Prompts the user for each guess and keeps track of the user's remaining guesses
let inquirer = require("inquirer");
var fs = require("fs");
let wordArray = ["Onomatopoeia", "Hamburger", "Heartbreak", "Harvest", "Honey", "Homestead", "Helium", "Harlot", "Humpback Whale" ]
let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var Word = require("./Word.js");
var Letter = require("./letter.js");
console.log("The word you picked is: " + randomWord); 

let word = new Word(randomWord.toLowerCase()); //creating an object of the Word-class

let guesses = randomWord.length; 
for ( i = 0; i in randomWord.length; i++){
inquirer.prompt([
  {
    type: "list",
    name: "letterGuessed",
    message: "Choose the letters from the list here",
    choices: ["a", "b", "c", "d" , "e", "f", "g", "h" ,"i" ,"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  },
  {
    type: "confirm",
    name: "verifyLetter",
    message: "is that the letter you want?"
  },
]).then(function(user) {
    let guess = user.letterGuessed;
    word.guess(guess);

  }).catch(error=>{
    console.log(error);
})
}

// restartGame: function() {
//   this.wordInPlay = null;
//   this.splitArray= [];
//   this.matchedLetters = [];
//   this.guessedLetters = [];
//   this.guessesLeft = 0;
//   this.totalGuesses = 0;
//   this.letterGuessed = null;
//   this.setupGame();
//   this.rebuildWordView();
// }
