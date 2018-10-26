function Letter(charString, letterVerify){
    this.charString=charString;
    this.letterVerify=letterVerify|| false;
    }
    Letter.prototype.letterGuess=()=>{
    return true ? this.charString: '_';
    }
    Letter.prototype.letterCheck=(character)=>{
    character===this.charString ? this.letterGuess=true: this.letterGuess=false;
    }



