"use strict"
const prompt = require('prompt-sync')();

class Player {
    constructor() {
       this.name = "";
       this.win = 0;
       this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
       this.myGest = "";
    }
    selectGesture(){
        //put in code by player type
    }
}

module.exports = Player;
