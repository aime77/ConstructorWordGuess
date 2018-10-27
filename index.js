const Word= require("./Word.js");
//const require=require("require");
const inquirer=require("inquirer");

const game={
arrWords:['quark','electron','proton','neurtrino','Higgs boson','muon','positro','pion'],
score:0,
startGame:false,
guessNumber:10,
chosenWord:"",
}

function startGame(){
game.startGame=true;
game.chosenWord=Math.floor(Math.random()*game.arrWords.length);
Word.underlyingWordArr.push(game.chosenWord);
askUser();
}

function askUser(){
inquirer.prompt({
name:'guess',
message:'Guess a letter: ',
type:'input',
}).then(answer=>{
Word.returnWord(answer.guess);
game.guessNumber--;
}
)};

startGame();
