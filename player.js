"use strict"
const prompt = require('prompt-sync')();

class Player {
    constructor(name) {
       this.name = name;
       this.win = 0;
       this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
       this.selectGest = null;
    }
    chosenGest(){
        //put in code by player type
    }
}

module.export = Player;
