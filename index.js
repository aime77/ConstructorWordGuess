const Word = require("./Word.js");
const inquirer = require("inquirer");

const game = {
    arrWords: ['quark', 'electron', 'tau', 'proton', 'neutron', 'lambda', 'omega', 'boson', 'muon', 'fermions', 'leptons', 'pion'],
    guessNumber: 15,
    chosenWord: '',
    guessedLetters: []
}

function startGame() {
    console.log(`===========================================================\n PARTICLES ARE FUN TO LEARN! ARE YOU READY FOR A CHALLENGE?!\n===========================================================`);
    getRandomWord();
    game.guessNumber = 12;
}

function getRandomWord() {
    game.guessedLetters = [];
    game.chosenWord = Math.floor(Math.random() * game.arrWords.length);
    game.chosenWord = new Word(game.arrWords[game.chosenWord]);
    game.chosenWord.makeWord();
    game.chosenWord.returnWord();
    askUser();
}

function askUser() {
    inquirer.prompt({
        name: 'guess',
        message: 'Guess a letter: ',
        type: 'input',
        validate: function validateInput(name) {
            return name !== '' || 'Try another letter!';
        }
    }).then(answer => {
        let checkDuplicate = false;
        for (let letter of game.guessedLetters) {
            if (letter === answer.guess) {
                console.log(`You already guessed ${answer.guess}. Try another letter!\n`);
                checkDuplicate = true;
                askUser();
                break;
            }
        }
        game.guessedLetters.push(answer.guess);
        if (!checkDuplicate) {
            game.chosenWord.addLetters(answer.guess);
            scoreTally();
        }

    })
};

function scoreTally() {
    if (!game.chosenWord.feedbackCheck) {
        game.guessNumber--;
        console.log(`Guesses left: ${game.guessNumber}\n`);
    }

    if (game.chosenWord.chosenWord.join('') === game.chosenWord.compWord) {
        console.log(`Good job on guessing the word ${game.chosenWord.chosenWord.join('')}!\n Now try another one :D.`);
        getRandomWord();
    }
    else if (game.guessNumber <= 0) {
        console.log(`YOU RAN OUT OF GUESSES!\n The word was: ${game.chosenWord.chosenWord.join('')}`);
        continueGame();
    } else {
        askUser();
    }
}

function continueGame() {
    inquirer.prompt({
        name: 'continue',
        message: 'Would you like to restart game?',
        type: 'confirm',
    }).then(answer => {
        return answer.continue ? startGame(): false;
    })
}

startGame();
