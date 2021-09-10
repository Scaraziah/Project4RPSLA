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
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, Draw`)
        }
        else if(this.player1.myGest === "Rock" && this.player2.myGest === "Scissors"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player1.name} Wins this Round!`)
            this.player1.win++
        }
        else if(this.player1.myGest === "Rock" && this.player2.myGest === "Paper"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player2.name} Wins this Round!`)
            this.player2.win++
        }
        else if(this.player1.myGest === "Rock" && this.player2.myGest === "Lizard"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player1.name} Wins this Round!`)
            this.player1.win++
        }
        else if(this.player1.myGest === "Rock" && this.player2.myGest === "Spock"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player2.name} Wins this Round!`)
            this.player2.win++
        }
        else if(this.player1.myGest === "Paper" && this.player2.myGest === "Paper"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, Draw`)
        }
        else if(this.player1.myGest === "Paper" && this.player2.myGest === "Scissors"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player2.name} Wins this Round!`)
            this.player2.win++
        }
        else if(this.player1.myGest === "Paper" && this.player2.myGest === "Rock"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player1.name} Wins this Round!`)
            this.player1.win++
        }
        else if(this.player1.myGest === "Paper" && this.player2.myGest === "Lizard"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player2.name} Wins this Round!`)
            this.player2.win++
        }
        else if(this.player1.myGest === "Paper" && this.player2.myGest === "Spock"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player1.name} Wins this Round!`)
            this.player1.win++
        }
        else if(this.player1.myGest === "Scissors" && this.player2.myGest === "Scissors"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, Draw`)
        }
        else if(this.player1.myGest === "Scissors" && this.player2.myGest === "Rock"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player2.name} Wins this Round!`)
            this.player2.win++
        }
        else if(this.player1.myGest === "Scissors" && this.player2.myGest === "Paper"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player1.name} Wins this Round!`)
            this.player1.win++
        }
        else if(this.player1.myGest === "Scissors" && this.player2.myGest === "Lizard"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player1.name} Wins this Round!`)
            this.player1.win++
        }
        else if(this.player1.myGest === "Scissors" && this.player2.myGest === "Spock"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player2.name} Wins this Round!`)
            this.player2.win++
        }
        else if(this.player1.myGest === "Lizard" && this.player2.myGest === "Lizard"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, Draw`)
        }
        else if(this.player1.myGest === "Lizard" && this.player2.myGest === "Scissors"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player2.name} Wins this Round!`)
            this.player2.win++
            
        }
        else if(this.player1.myGest === "Lizard" && this.player2.myGest === "Rock"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player2.name} Wins this Round!`)
            this.player2.win++
        }
        else if(this.player1.myGest === "Lizard" && this.player2.myGest === "Paper"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player1.name} Wins this Round!`)
            this.player1.win++
        }
        else if(this.player1.myGest === "Lizard" && this.player2.myGest === "Spock"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player1.name} Wins this Round!`)
            this.player1.win++
        }
        else if(this.player1.myGest === "Spock" && this.player2.myGest === "Spock"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, Draw`)
        }
        else if(this.player1.myGest === "Spock" && this.player2.myGest === "Scissors"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player1.name} Wins this Round!`)
            this.player1.win++
        }
        else if(this.player1.myGest === "Spock" && this.player2.myGest === "Rock"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player1.name} Wins this Round!`)
            this.player1.win++
        }
        else if(this.player1.myGest === "Spock" && this.player2.myGest === "Lizard"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player2.name} Wins this Round!`)
            this.player2.win++
        }
        else if(this.player1.myGest === "Spock" && this.player2.myGest === "Paper"){
            console.log(`${this.player1.myGest} vs ${this.player2.myGest}, ${this.player2.name} Wins this Round!`)
            this.player2.win++
        }
        else{
            console.log("Invalid entry NO!!!!")
        }
       }

    Winner(){
        if(this.player1.win === 3 ){
            return true;
        }
        else if(this.player2.win === 3 ){
            return true;
        }
        else{
            return false
        }
    }

    battleOn(){
        this.whosPlaying()
        do{
            this.player1.selectGesture()
            this.player2.selectGesture()
            this.ruleGame()
        }while(!this.Winner());
        if(this.player1.win === 3){
            console.log(`Congrats ${this.player1.name} You Won the Game!!!\n${this.player1.win} vs ${this.player2.win}`)
        }
        else if(this.player2.win === 3){
            console.log(`Congrats ${this.player2.name} You Won the Game!!!\n${this.player1.win} vs ${this.player2.win}`)
        }
        this.wantYouContinue()
    }   
    
    wantYouContinue(){
        console.log("Do you want to play again?\n 1. Yes\n2. No");
        let yOrN = prompt();
        if(yOrN === "1"){
        this.battleOn();
        }
        else{
            console.log("Had a great game come back soon!");
        }
    }
}    

module.exports = Game
