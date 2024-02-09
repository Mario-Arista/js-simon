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

const clock = setInterval(countEverySecond, 1000);

let seconds = 0;
timerElement.innerText = seconds + " secondi";

function countEverySecond() {
    seconds++;

    timerElement.innerText = seconds + " secondi";


    if(seconds > 60) {
        seconds = 0;
    }

}


buttonElement.addEventListener("click", function() {
    clearInterval(clock);
});
