// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// FUNCTIONS

// genera numero random
function rndNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }



//  PROGRAMMA

// variabili principali
const randomNumbers = []
var userNumbers = []
var guessedNumbers = []

// genero numeri random
while(randomNumbers.length < 5 ){
    var rndNum = rndNumb(1, 100);
    // pusho nell'array solo quelli diversi tra loro
    if(!randomNumbers.includes(rndNum)){
        randomNumbers.push(rndNum)
    }
}
// mostro i numeri all'utente
alert('Memorizza questi numeri: ' + randomNumbers );



setTimeout(
    function() {
        var userNum;
        while(userNumbers.length < 5){
        userNum = parseInt(prompt('inserisci i numeri visti in precedenza')); 
        userNumbers.push(userNum)
        
        if(randomNumbers.includes(userNum)){
            guessedNumbers.push(userNum)
        }
    }
    console.log('numeri random ' + randomNumbers);

    console.log('numeri utente: ' + userNumbers);
    console.log('numeri indovinati: ' + guessedNumbers);

    alert('Ne hai indovinati ' + guessedNumbers.length + ' su 5 : ' + guessedNumbers);

    }, 30000); // viene eseguita dopo 30"


 






