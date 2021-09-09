"use strict"
const prompt = require('prompt-sync')();

const Player = require("./Player");


class AI extends Player{
    constructor(){
        super();
        this.name = "Jonny#5";
    }

    selectGesture(){
        let rand = Math.floor(Math.random()* this.gestures.length);
        this.myGest = this.gestures[rand];
    }
}

module.exports = AI;
