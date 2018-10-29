function Letter(charString, guessVerify){
    this.charString=charString;
    this.guessVerify=guessVerify|| false;
    this.letterGuess=()=>{return this.guessVerify ? this.charString: ' _ ';}
    this.letterCheck=(userChar)=>{userChar===this.charString ? this.guessVerify=true: this.guessVerify=false;}
}
module.exports=Letter;

