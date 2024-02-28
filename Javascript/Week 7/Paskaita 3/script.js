// const userInput = prompt ("Iveskite skaiciu");

// if (userInput > 10) {
//     console.log("Ivestas skaicius yra didesnis nei 10");
// } else {
//     console.log("Ivestas skaicius mazesnis nei 10");
// }

// const isRaining = true;

// if (isRaining) {
//     console.log("Pasiimkite sketi");
// }

// const temperature = prompt("Iveskite temperatura");

// if (temperature >= 30) {
//     console.log("Lauke labai karsta");
// } else if (temperature >= 20) {
//     console.log("Lauke silta");
// } else if (temperature >= 10) {
//     console.log("Lauke vesu");
// } else {
//     console.log("Lauke salta");
// }
// Prompt visada grazina string!!!!!!!!!!!! todel naudojamas + kad string pakeisti i number
// const temperature = +prompt ("Iveskite temperatura");

// if (temperature > 20) {
//     console.log("Galima gyvent");
// } else {
//     console.log("Nepatartina gyventi");
// }

// temperature > 20 ? console.log("Galima gyventi") : console.log("Nepatartina gyventi");

// const message = temperature > 20 ? "Karsta" : "Vesu";

// alert(message);
// switch yra gan grieztas, tai jis veiks su numbers, todel prompt dalyje geriau paversti stringa i skaiciu
// switch(temperature) {
//     case 20:
//         console.log("Lauke silta");
//         break;
//     case 30:
//         console.log("Lauke karsta");
//         break;
//     default:
//         console.log("Neturiu nuomones apie sita ora");
// } 

// const isRaining = true;

// if (temperature > 20 && !isRaining) {
//     console.log("Siandien grazi diena, nes nelyja ir silta");
// } 

// if (temperature > 20 || isRaining && 10 > 5) {
//     console.log("siandien grazi diena nes nelyja ARBA silta");
// }

// Age verification:
// Write a program that asks the user for their age. If the age is less than 18, display a message saying "You are not eligible for this service". Otherwise, display a message saying "Welcome".

// const age = prompt("Iveskite savo amziu");

// if (age >= 18) {
//     console.log("Welcome");
// } else {
//     console.log("You are not eligible for this service");
// }

// Username and Password Checker:
// Implement a basic username and password checker. Ask the user for their username and password. If the username is "admin" and the password is "password123", display a message saying "Login successful". Otherwise, display a message saying "Incorrect username or password".

// const username = "Admin";
// const password = "password123";

// const enteredUserName = prompt("Iveskite savo vartotojo varda");
// const enteredPassword = prompt("Iveskite savo slaptazodi");

// if (username === enteredUserName && password === enteredPassword) {
//     console.log("Login successful");
// } else {
//     console.log("Incorrect username or password");
// }

// Even or Odd Number Checker:
// Write a program that asks the user for a number and determines whether it's even or odd. Display a message indicating whether the number is even or odd.

// const userInput = prompt("iveskite skaiciu")

// if (userInput % 2 === 0) {
//     console.log("Ivestas skaicius yra lyginis");
// } else {
//     console.log("Ivestas skaicius yra nelyginis");
// }

// Divisibility Checker:
// Write a program that asks the user for a number and checks if it's divisible by both 3 and 5. Display a message indicating whether the number is divisible by both 3 and 5.

// const userInput = prompt("Iveskite skaiciu")

// if (userInput % 3 === 0 && userInput % 5 === 0) {
//     console.log("The number is divisible by both 3 and 5");
// } else {
//     console.log("the number is not divisble by 3 or 5");
// }


// Fizz Buzz problem
// divifes by 3 - FIZZ
// divides by 5 - BUZZ
// divides by 3 & 5 - FIZZBUZZ
// const userInput = prompt("Write a number")

// if (userInput % 15 === 0) {
//     console.log("FIZZ BUZZ");
// } else if (userInput % 5 === 0) {
//     console.log("BUZZ");
// } else if (userInput % 3 === 0) {
//     console.log("FIZZ");
// }

// Grading System:Create a program that asks the user for their test score. Based on the score, display a letter grade according to the following criteria:
// 90 or above: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

// const userGrade = +prompt("What's your test score?");

// let grade;

// if (userGrade >= 90) {
//     grade = "A"
// } else if (userGrade >= 80 && userGrade <= 89) {
//     grade = "B"
// } else if (userGrade >= 70 && userGrade <= 79) {
//     grade = "C"
// } else {
//     grade = "F"
// }

// console.log(grade);

// const userInput = prompt("Ivesk kazka")
// console.log(userInput);
// if(userInput) {
//     console.log("true");
// } else {
//     console.log("Prasau ivesti kazka validaus");
// }