function Letter(charString, guessVerify){
    this.charString=charString;
    this.guessVerify=guessVerify|| false;
    this.letterGuess=()=>{return this.guessVerify ? console.log(this.charString): console.log(' _ ');}
    this.letterCheck=(userChar)=>{userChar===this.charString ? this.guessVerify=true: this.guessVerify=false;}
    }
   // Letter.prototype.letterGuess=()=>{
    //console.log(charString);
    //return this.userLetter===this.charString ? console.log(this.charString): console.log(' _ ');
    //}
    //Letter.prototype.letterCheck=(character)=>{
   // this.userLetter===this.charString ? this.letterGuess=true: this.letterGuess=false;
    //}


var test=new Letter('y');
test.letterGuess();
test.letterCheck('y');
var test2=new Letter('z');
test.letterCheck('z');
