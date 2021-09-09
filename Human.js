"use strict"
const prompt = require('prompt-sync')();

const Player = require("./Player");

class Human extends Player{
    constructor(){
        super();
        this.name = prompt("Enter Code Name")
    }

    selectGesture(){
        console.log("1. Rock\n2. Paper\n3. Scissors\n4.Lizard\n5.Spock")
        let rand = parseInt(prompt(""));
        this.myGest = this.gestures[rand];
    }    
}

module.exports = Human;