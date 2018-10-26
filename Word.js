const Letter=require("/.Letter.js");

function Word(){
    //An array of new Letter objects representing the letters of the underlying word
    this.addLettersArr=[];
    this.wordLetter=(charString)=>{
    this.addLettersArr.push(new Letter(charString));
    }
    }
    //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    Word.prototype.returnWord=(chosenWord)=>{
    Letter.call(charString);
    return this.addLetterArr.splice().join(","); 
    }
    //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    Word.prototype.addLetters=(charString)=>{
        this.addLetterArr.forEach()
        Letter.letterCheck(call(this, charString));
    }
    
    module.exports=Word;

    var test=new Word();
    test.addLetters();