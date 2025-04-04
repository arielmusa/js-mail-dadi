/* Crea una lista di email di invitati ad una festa. 
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo, 
utilizzando un ciclo for. 
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). 
Si può fare? Certo che si basta ragionare un po’. 
Nota: Non è necessario provvedere alla validazione delle email */

// 1- creare var array con email
const partyLeads = [
  "alice.smith@example.com",
  "bob.johnson@testmail.com",
  "charlie.wilson@random.org",
  "david.brown@fakemail.net",
  "emma.davis@mockmail.com",
  "frank.miller@demo.com",
  "grace.moore@trial.net",
  "henry.white@myemail.org",
  "isabella.jones@sample.com",
  "jack.thomas@placeholder.net",
];

// 2- chiedo all'utente la mail, var = prompt()
const userEmail = prompt("Inserisci la tua mail");
let emailFound = false;

// 3- controllo se l'utente è presente in lista
for (let i = 0; i < partyLeads.length; i++) {
  currentEmailLead = partyLeads[i];
  if (currentEmailLead === userEmail) emailFound = true;
}
//4- mostro messaggio di conferma/errore..
// fuori dal for, altrimenti si ripete ad ogni ciclo
if (emailFound) {
  alert("Congratulazioni! Sei in lista!");
} else {
  alert("Accesso negato");
}
