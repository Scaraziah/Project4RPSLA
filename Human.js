"use strict"
const prompt = require('prompt-sync')();

const Player = require("./Player");

class Human extends Player{
    constructor(){
        super();
        this.nameSelect()
    }

    nameSelect(){
        console.log("Enter Code Name!")
        this.name = prompt()
    }

    selectGesture(){
        console.log("1. Rock\n2. Paper\n3. Scissors\n4.Lizard\n5.Spock")
        let rand = parseInt(prompt("") - 1);
        this.myGest = this.gestures[rand];
    }    
}

module.exports = Human;