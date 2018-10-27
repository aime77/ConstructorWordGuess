const Letter = require("./Letter.js");

function Word() {
    //An array of new Letter objects representing the letters of the underlying word
    this.underlyingWordArr = [];
    //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.returnWord = () => {
        console.log('test');
        this.wordLetter = () => {
            for (let i=0; i<this.underlyingWordArr.length; i++){
            this.underlyingWordArr.push(new Letter[i]);
        }
        return this.underlyingWordArr.toString().join("");
    }}

    //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.addLetters = () => {
        this.underlyingWordArr.forEach((charUser) => {
            Letter.letterCheck(call(this, charUser));
        });
    }
}

module.exports = Word;

//var test=new Word();
//test.returnWord();
