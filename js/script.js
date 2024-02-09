/*

Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno? 24
Da quanti minuti è composta un'ora? 60
Da quanti secondi è composto un minuto? 60
Da quanti millisecondi è composto un secondo? 1000
Quanti millisecondi mi separano da domani alle 9:30? 
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?

*/

// Dichiaro Output
const timerElement = document.getElementById("output");

// Dichiaro BOTTONE
const buttonElement = document.querySelector("input");

// Metto setInterval
const countdownTime = setInterval(countdown, 1000);

// Metto data attuale
const currentDate = new Date();
console.log(currentDate);

// Metto data lezione
const dateLecture = new Date('February 12, 2024 09:30:00');
console.log(dateLecture);

// Differenza tra le due date
let timeDifference = dateLecture - currentDate;
console.log(timeDifference);

// Mi chiamo la funzione
function countdown() {
    // converto i millesecondi
    let hours = (timeDifference / Math.floor((1000 * 60 * 60)));
    let minutes = (timeDifference / Math.floor((1000 * 60 * 60)) / (1000 * 60));
    let seconds = (timeDifference / Math.floor((1000 * 60) / 1000));
}


// Metto botone per interrompere il countdown
buttonElement.addEventListener("click", function() {
    clearInterval(countdown);
});
