const Word= require("./Word.js");

const game={
arrWords:['quark','electron','proton','neurtrino','Higgs boson','muon','positro','pion'],
score:0,
startGame:false,
guessNumber:10,
chosenWord:'',
}


function startGame(){
game.chosenWord=Math.floor(Math.random()*arrWords.length);
Word.addLetters(guess.answer);

}


function askUser(){
inquirer.prompt({
name:'guess',
message:'Guess a letter: ',
type:'input',
}).then(answer=>{

Word.returnWord(chosenWord);
game.guessNumber--;
}
)};

askUser();
