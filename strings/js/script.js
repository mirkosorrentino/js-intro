// Esempio 1: +5
// Chiedere all'utente un numero
// const userNumberAsString = prompt("Ciao utente! Dimmi un numero");
// console.log(userNumberAsString, typeof userNumberAsString)

// // trasformarlo da stringa a numero
// const userNumber = parseInt(userNumberAsString);
// console.log(userNumber, typeof userNumber);

// // aggiungo 5 al numero dell'utente
// const result = userNumber + 5;
// console.log("risultato finale: ", result);

// // stampo output

// document.getElementById("user-number").innerHTML = `numero dell'utente: ${userNumber}`
// document.getElementById("user-result").innerHTML = `il risultato è ${result}`;


// Esempio 2: greeting
// chiedere all'utente il suo nome e salutarlo con il suo nome

// const userName = prompt("Come ti chiami?");
// console.log(userName, typeof userName)

// const message = `Ciao ${userName}`

// document.getElementById("user-name").innerHTML =`${message}`

// Esempio 3: anno di nascita

// Info acquisition
const userAgeAsString = prompt("Ciao utente! quanti anni hai?");
console.log(userAgeAsString, typeof userAgeAsString);


// elaboration
const userAge = parseInt(userAgeAsString);
console.log(userAge, typeof userAge);

const currentYear = 2023
const userYearOfBirth = currentYear - userAge;
console.log (userYearOfBirth);

const message = `Il tuo anno di nascità è ${userYearOfBirth}`;

// output
document.getElementById("message").innerHTML = `${message}`;