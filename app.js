/*
This game is about two players named "Mitch" and "Adam" who fight
until there is one winner. They both have 100 health points and take 
random hits between 1-10 hit points until one dies, and then the
other is declared the winner.

This is also linked to index.js
*/

"use strict"; 

// both players starting with 100 points

  const randomDamage = _ => { 
    return Math.floor(Math.random() * Math.floor(10)) + 1;
  }

// this decides randomly between the two players who will make the first attack

  const chooseOption = (opt1, opt2) => { let randNum = Math.round(Math.random());
    return (randNum == 0) ? opt1 : opt2;
  }
    
// this takes the attack points, subtracts it from the players health,
// and returns it back to their health score

  function attackPlayer(health) {
    health -= randomDamage();
    return health;
  }
  
// declares the isDead variable to either user, depending on whose 
// health score falls under zero first. function is called in
// while loop below

  const isDead = (health) => {
    if (health <= 0) {
      return true;
    } else (health >= 0) ; {
      return false;
    }
  }
  
  // starts a while loop which repeats attacks until one user
  // is declared dead, and the other wins.
  
  function fight (player1, player2, player1Health, player2Health) {
  // fight function's parameters are in index.js file 
     while (true) {
      // this while(true) statement runs until one of the player's
      // health is less than zero
      let attacker = chooseOption(player1, player2);
      // chooseOption is declared at beginnning of script
      if (attacker === player1) {
        player2Health = attackPlayer(player2Health);
        logHealth(player2, player2Health);
        if (isDead(player2Health)){
            logDeath(player1, player2); 
          break;
          }
        } 
        
        else {
        player1Health = attackPlayer(player1Health);
        logHealth(player1, player1Health);
        if (isDead(player1Health)) {
          logDeath(player2, player1); 
          break;
        }
    }
  }
}  
// logs winner to the console. the variables are assigned values in index.js file
const logHealth = (player, health) => console.log(`${player} health: ${health}`); 
const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

// links to index.js file
window.fight=fight;


  