// Dichiaro Output
const timerElement = document.getElementById("output");

// Metto data a caso 'Feb 12, 2024 09:30:00'
const dateLecture = new Date(2024, 1, 12, 9, 30, 0, 0);

// Mi chiamo la funzione
function countdown() {

    // Differenza tra le due date
    let timeDifference = dateLecture - new Date();

    // converto i millesecondi
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

     
    timerElement.innerText = `${hours} ore, ${minutes} minuti, ${seconds} secondi. `;

    if (timeDifference < 0) {
        timerElement.innerText = "Tempo scaduto!";
    }

}

// Metto setInterval
const countdownTime = setInterval(countdown, 1000);

// Metto botone per interrompere il countdown
document.querySelector("input").addEventListener("click", function() {
    clearInterval(countdownTime);
});
