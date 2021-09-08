"use strict"
const prompt = require('prompt-sync')();
var Human = require('./player');
var AI = require('./player');
var {play} = require ('./game');
begin();
function begin() {
    //Player name and type selection
   // while (Player1.w<3 || Player2.w<3) {
    var name1 = prompt('What is the name of the first player?');
    var lifeForm1 = parseInt(prompt('Will Player 1 be human or A.I?\n1) Human\n2)A.I\n'));
    if (lifeForm1==1) {
        var Player1 =  new Human(name1);
        console.log(Player1.name +' is a human');
}
else if (lifeForm1==2) {
        var Player1 = new AI (name1);
        console.log(Player1.name +' is an AI');
}       
else    {
        console.log('That was an incorrect entry.. Please try again');
        //begin();
}

    var name2 = prompt('What is the name of the second player?');
    var lifeForm2 = parseInt(prompt('Will Player 2 be human or A.I?\n1) Human\n2)A.I\n'));
    
    if (lifeForm2==1)   {
        var Player2 =  new Human(name2);
        console.log(Player2.name +' is a human');
    }
    else if (lifeForm2==2)   {
            var Player2 = new AI (name2);
            console.log(Player2.name +' is an AI');
    }
    else{
            console.log('That was an incorrect entry.. Please try again');
            //begin();
    }
   //Determines Player Choices
   console.log(Player1.name, Player2.name);
    Player1.takesTurn();
    console.log(Player1.roll);
    Player2.takesTurn();
    console.log(Player2.roll);
    play();

    }
   


   /* else    {console.log('That was an incorrect entry.. Please try again');
        begin();
        }
    
    if (lifeForm2=1) { 
      let Player2 =  new Human(name2);
        this.Human.takesTurn();
        Player2.roll=roll;
    } 
    else if (lifeForm2=2)   {
        let Player2 =  new AI(name2);
        this.AI.takesTurn();
        Player2.roll=roll;
    }  
    else    {console.log('That was an incorrect entry.. Please try again');
    begin();
    }
   console.log('P1: '+Player1.w+'P2: '+Player2.w);   
 

    //name2 = prompt('What is the name of the second player?');
    //var lifeForm2 = parseInt(prompt('Will Player 2 be human or A.I?\n1) Human\nA.I')); 
   // }   
    if (Player1.w>Player2.w){
        console.log ('That was a great match!! \n' + Player1.name+'takes it!!');
        
}
replayRequest();
function replayRequest() {}
let reload = (prompt("Play another game? 'y' or 'n'")).toLowerCase;
    if (reload = 'y'){
        begin();
    }   else if (reload = 'n'){
        console.log('Thanks for playing!  See you later!');
        return;
    }   else { console.log ("That's not 'y' or 'n'!");
                replayRequest();
        }
*/
module.exports = {Player1, Player2};
