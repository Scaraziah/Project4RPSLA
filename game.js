"use strict"
const prompt = require(`prompt-sync`)();

const Human = require("./Human");
const AI = require("./AI");

class Game{

    constructor(){
        this.player1 = new Human();
        this.player2 = "";
        
    }

    whosPlaying(){
        do{
            console.log("Type of Game\n1. Human vs Human\n2.Human vs AI")
        let gameType = prompt("");
        switch(gameType){
            case "1":
                this.player2 = new Human()
                break;
            case "2":
                this.player2 = new AI();
                break;
            default:
                console.log("Invalid Imput");
                break;
        }
        }while(this.player2 === "");
        // gameType != "1" ||
    }

    ply2SelectGest(){
        if(player2 === "Jonney#5"){
           let ply2Selects = this.player2.selectGesture();
        }
        else{
            let ply2Selects = this.player2.selectGesture()
        }
    }

    ruleGame(){
        if(this.player1.myGest === "Rock" && this.player2.myGest === "Rock"){
            console.log(this.player2.myGest)
            console.log("Draw")
        }
        else if(this.player1.myGest === "Rock" && this.player2.myGest === "Scissors"){
            console.log(this.player2.myGest)
            console.log(`${this.player2.name} Wins this Round!`)
            this.player2.win++
            
        }
        else if(this.player1.myGest === "Rock" && this.player2.myGest === "Paper"){
            console.log(this.player2.myGest)
            console.log(`${this.player1.name} Wins this Round!`)
            this.player1.win++
            
        }
        else if(this.player1.myGest === "Rock" && this.player2.myGest === "Lizard"){
            console.log(this.player2.myGest)
            console.log(`${this.player1.name} Wins this Round!`)
            this.player1.win++
        }
        else if(this.player1.myGest === "Rock" && this.player2.myGest === "Spock"){
            console.log(this.player2.myGest)
            console.log(`${this.player2.name} Wins this Round!`)
            this.player2.win++
        }
        else{

        }
       }

    
    battleOn(){
        this.whosPlaying()
        do{
            this.player1.selectGesture()
            this.player2.selectGesture()
            this.ruleGame()
        }while(this.player1.win <= 3 || this.player2.win <= 3 )
        if(this.player1.win = 3){
            console.log(`Congrats ${this.player1.name} You Won the Game!!!`)
        }
        else{
            console.log('Congrats ${this.player2.name} You Won the Game!!!')
        }
    }    
    //Battle- loop selectGesture, decide winner requirement met player1 or player2 get 2 win total
    
    //print winner
    
    //play again
    
    
    //rungame
}    

module.exports = Game
