const Letter = require("./Letter.js");
const chalk = require('chalk');

function Word(chosenWord, feedbackCheck) {
    this.chosenWord = chosenWord.split('');
    this.letterObjs = [];
    this.compWord = '';
    this.feedbackCheck = feedbackCheck || false;

    this.makeWord = () => {
        for (var i = 0; i < this.chosenWord.length; i++) {
            this.letterObjs.push(new Letter(this.chosenWord[i]));
        }
    }

    this.returnWord = () => {
        var mainWord = [];
        this.letterObjs.forEach(letter => {
            mainWord.push(letter.letterGuess());
            this.compWord = mainWord.join('');
        });
        return console.log(`${mainWord.join('')}\n`);
    }

    this.addLetters = (userChar) => {
        for (let letter of this.letterObjs) {
            if (letter.guessVerify === false) {
                letter.letterCheck(userChar);
            }
        }
        this.feedback(userChar);
        this.returnWord();
    }

    this.feedback = (userChar) => {
        this.feedbackCheck = false;
        for (let letter of this.letterObjs) {
            if (letter.charString === userChar) {
                this.feedbackCheck = true;
                return console.log(`${chalk.magenta.bold(`CORRECT LETTER!`)}`);
            }
        }
        if (!this.feedbackCheck) {
            console.log(`${chalk.blue.bold(`INCORRECT LETTER`)}`);
        }
    }
};

module.exports = Word;