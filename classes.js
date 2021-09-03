"use strict"
const prompt = require('prompt-sync')();

class Human extends Player {

    constructor(rock, paper, scissors, lizard, Spock) {
        super(1,2,3,4,5);
        this.roll = null;
    }
    takesTurn() {
        parseInt(prompt(`Make your choice:\n1) Rock\n2)Paper\n3) Scissors\n4 Lizard\5) Spock`));
           return roll;
       }
}

class AI extends Player {

    constructor(rock, paper, scissors, lizard, Spock) {
        super(1,2,3,4,5);
        this.roll = null;
    }
    takesTurn() {
       roll= (Math.floor(Math.random()*5));
           return roll;
       }
}