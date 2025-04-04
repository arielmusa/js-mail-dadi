// Gioco dei dadi
/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// 1- var per contenere il numero random del giocatore
const playerDiceValue = Math.floor(Math.random() * 6 + 1);
console.log(playerDiceValue, "playerDiceValue");
// 2- var per contenere il numero random del computer
const cpuDiceValue = Math.floor(Math.random() * 6 + 1);
console.log(cpuDiceValue, "cpuDiceValue");
// 3- if statement per verificare chi ha vinto
if (playerDiceValue > cpuDiceValue) {
  alert(
    `Il giocatore batte il computer!
punteggio giocatore: ${playerDiceValue}
punteggio computer: ${cpuDiceValue}`
  );
} else if (playerDiceValue < cpuDiceValue) {
  alert(
    `Il computer batte il giocatore!
punteggio giocatore: ${playerDiceValue}
punteggio computer: ${cpuDiceValue}`
  );
} else {
  alert(
    `Un pareggio tra computer e giocatore!
punteggio giocatore: ${playerDiceValue}
punteggio computer: ${cpuDiceValue}`
  );
}

// 4- il numero random lo genero con Math.random() * 6 + 1; rimuovo da subito i decimali con Math.floor().
