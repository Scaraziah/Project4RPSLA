"use strict"
const prompt = require('prompt-sync')();
class Player {
    constructor(rock, paper, scissors, lizard, Spock) {
        this.rock = rock;
        this.paper = paper;
        this.scissors = scissors;
        this.lizard = lizard;
        this.Spock = Spock;
        this.roll = null;
    }

    takesTurn() {
        parseInt(prompt(`Make your choice:\n1) Rock\n2)Paper\n3) Scissors\n4 Lizard\5) Spock`));
           return roll;
       }
       

}
 