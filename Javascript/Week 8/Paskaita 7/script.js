// const person = "August";

// function sayHello(name){
//     console.log("Hello from a function, " + name);
// }

// sum(10, 20);

// sayHello("August");
// sayHello("July");
// sayHello(person);

// function sum(number1, number2){
//     if (typeof number1 === "number" && typeof number2 === "number"){
//         console.log(number1, number2);
//         const result = number1 + number2;
//         console.log(result);
//     } else {
//         console.log("Pateikti argumentai negeri");
//     }
// }

// sum("Hello", 2);
// sum(0, -2);
// sum(1);

// console.log(typeof undefined);

// const myFunction = function (){
//     console.log("Hello from an anonymous function");
// }

// myFunction();

// function doStuff(arg1){
//     arg1()
// }

// function sayBye(){
//     console.log("goodbye");
// }

// doStuff(sayBye);

// function divide(num1, num2){
//     return num1 / num2; //Kai parasom return, musu kodas jau nebevyks, sustabdo funkcijos veikima.
//     console.log("Kazkas kas vyksta uz return");
// }

// const divideResult = divide(6, 3);
// console.log(divideResult);

// function returnLargerNumber(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } 

//     if (num2 > num1) {
//         return num2;
//     }

//     if (num2 = num1) {
//         return "Skaiciai yra lygus";
//     }

//     console.log("This will never be reached");
// }

// // Kas yra funkcijos viduje, galima TIK pasiekti funkcijos viduje. Negalima pasiekti visokiu const ir pan uz funkcijos ribu. 

// console.log(returnLargerNumber(1, 8));
// console.log(returnLargerNumber(9, 8));
// console.log(returnLargerNumber(8, 8));

// Create a function called isEven that takes a single number parameter and returns true if the number is even, otherwise false.

// function isEven(number){
//     console.log(number % 2);
//     // number - 5
//     // number % 2 - grazina likuti = 1
//     // if(1) - true
//     if (number % 2){
//         return false;
//     } else {
//         return true;
//     }
// }

// console.log(isEven(5));
// console.log(isEven(6));

// Write a function named truncateString that takes a string and a number as parameters. If the length of the string exceeds the specified number, truncate the string and append "..." to the end. Otherwise, return the original string.

// function truncateString(string, maxLength){
//     if (string.length > maxLength){
//         let result = string.slice(0, maxLength);
//         // result = "Labas"
//         result += "..."
//         // result = "Labas..."
//         return result;
//         //OR sutrumpinti koda: return string.slice(0, maxLength) + "...";
//     } else {
//         return string;
//     }
// }

// console.log(truncateString("Labas labas", 5));
// console.log(truncateString("Labas labas", 50));

// Create a function called findLongestWord that takes a string parameter consisting of words separated by spaces and returns the length of the longest word.

// function findLongestWord(string){
//     const words = string.split(" ");
    
//     let longestWord = words[0]; //priskyrem 0, tai reiskia kad priskyrem pati pirma zodi kaip longest, tai nera prasmes lyginti pati pirma zodi vel, todel i prasideda nuo 1, o ne 0. 

//     for ( let i = 1; i < words.length; i++){
//         if(longestWord.length < words[i].length){
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// console.log(findLongestWord("Hello what day is it today is it the 4th or Wednesday"));