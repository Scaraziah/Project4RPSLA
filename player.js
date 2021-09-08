"use strict"
const prompt = require('prompt-sync')();
class Player {
    constructor(rock, paper, scissors, lizard, Spock) {
        this.rock = 1;
        this.paper = 2;
        this.scissors = 3;
        this.lizard = 4;
        this.Spock = 5;
        this.roll = null;
    }

    takesTurn() {
        parseInt(prompt(`Make your choice:\n1) Rock\n2)Paper\n3) Scissors\n4 Lizard\5) Spock`));
           return roll;
       }
       

}
 