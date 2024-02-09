// Dichiaro Output
const timerElement = document.getElementById("output");

// Dichiaro BOTTONE
const buttonElement = document.querySelector("input");

// Metto data lezione
const dateLecture = new Date('February 12, 2024 09:30:00');

// Mi chiamo la funzione
function countdown() {

    // Differenza tra le due date
    let timeDifference = dateLecture - new Date();
    console.log(timeDifference);

    // converto i millesecondi
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor(timeDifference % ((1000 * 60) / 1000));
     
    timerElement.innerText = `${hours} ore, ${minutes} minuti, ${seconds} secondi.`;

}

// Metto setInterval
const countdownTime = setInterval(countdown, 1000);

// Metto botone per interrompere il countdown
buttonElement.addEventListener("click", function() {
    clearInterval(countdownTime);
});
