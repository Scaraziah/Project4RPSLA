"use strict"
const prompt = require('prompt-sync')();

class Player {
    constructor(name) {
       this.name= name;
       this.w=0;
       this.l=0;
       this.t=0;
       this.roll=0;
    
    }
   // takesTurn() {
   //     var roll = parseInt(prompt(this.name+`: Make your choice:\n1) Rock\n2)Paper\n3) Scissors\n4 Lizard\n5) Spock\n`));
   //    return roll;
   // }
       
}

class Human extends Player {

    constructor(name) {
        super(name);
       
    }
    takesTurn() {
        var roll = parseInt(prompt(this.name+`: Make your choice:\n1) Rock\n2)Paper\n3) Scissors\n4 Lizard\n5) Spock\n`));
        console.log (this.name+' your roll is:'+ roll);
        return this.roll=roll;
    }
    winningGesture(){ 'That is GREAT!!';
    }
}

class AI extends Player {

    constructor(name) {
        super(name);
    }
   takesTurn() {
        var roll= (Math.floor(Math.random()*5));
        console.log (this.name+' your roll is:'+ roll);
        return this.roll=roll;
    }
    winningGesture(){
        '01000001 01010111 01000101 01010011 01001111 01001101 01000101 00100001 00100001 00001101 00001010';

    }
} 
module.exports =  AI;Human; Player.roll;
//hi==