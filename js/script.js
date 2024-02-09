// Dichiaro Output
const timerElement = document.getElementById("output");


// Metto data lezione 'February 12, 2024 09:30:00'
const dateLecture = new Date(2024, 1, 12, 9, 30, 0, 0); 
console.log(dateLecture);

// Mi chiamo la funzione
function countdown() {

    // Differenza tra le due date
    let timeDifference = dateLecture - new Date();
    // console.log(timeDifference);

    // converto i millesecondi
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


     
    timerElement.innerText = `${hours} ore, ${minutes} minuti, ${seconds} secondi.`;

}

// Metto setInterval
const countdownTime = setInterval(countdown, 1000);

// Metto botone per interrompere il countdown
document.querySelector("input").addEventListener("click", function() {
    clearInterval(countdownTime);
});
