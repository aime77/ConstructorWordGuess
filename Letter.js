function Letter(charString, letterGuess){
    this.charString=charString;
    this.letterGuess=letterGuess|| false;
    }
    Letter.prototype.letterGuess=()=>{
        console.log("wors");
    return true ? this.charString: '_';
    }
    Letter.prototype.letterCheck=(character)=>{
    character===this.charString ? this.letterGuess=true: this.letterGuess=false;
    }

prototype.letterGuess();
