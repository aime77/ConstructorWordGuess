const letter=require("/.Letter.js");

function Word(){
    //An array of new Letter objects representing the letters of the underlying word
    this.addLettersArr=[];
    this.wordLetter=()=>(){
    this.addLettersArr.push(new letter(characterString));
    }
    }
    //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    Word.prototype.returnWord=()=>(character){
        letter.letterGuess
    }
    //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    Word.prototype.addLetters=()=>(character){
        forEach(this.addLatterArr)
        letter.letterCheck(call(this, character));
    }
    