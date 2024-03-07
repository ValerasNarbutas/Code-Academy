// // Anonimine funkcija
// (function() {
//     console.log("Cia yra anonimine funkcija");
// })();

// // Pakeisti i anonimine funkcija. Normali funkcija: 
// function calculateSquare(num){
//     return num * num;
// }

// console.log(calculateSquare(8));

// // anonimine funkcija: 
// const result = (function(num){
//     return num * num;
// })(5);

// console.log(result);

// // Arrow funkcijos. Arrows neturi argumentu

// // Daznai naudojama sintakse. Paprasta funkcija
// function add(num1, num2){
//     return num1 + num2;
// }
// // Retai naudojama sintakse. Anonimine funkcija.
// const addFunction = function (num1, num2){
//     return num1 + num2;
// }
// // Arrow funkcija. Daznai naudojama. Anonimine arrow funkcija
// const addFunctionArrow = (num1, num2) => {
//     return num1 + num2;
// }
// // Automatiskai returnina ir galima taip rasyti tik kai turime viena kodo eilute
// const addFunctionArrowShorter = (num1, num2) => num1 + num2;

// const res = addFunctionArrow(2, 6);
// console.log(res);

// console.log(addFunctionArrowShorter(10, 10));

// // Jei yra tik vienas parametras, be skliausteliu. Nerekomenduojama naudoti
// const powerNumber = num => num * num;

// console.log(powerNumber(6));

// ////////

// function calculateSquare(num){
//     return num * num;
// }

// const calculateSquare = (num) => num * num;

// console.log(calculateSquare(4));

// Implement a function named removeFalsyValues that takes an array and removes all falsy values (e.g., false, null, 0, "", undefined, and NaN) from it.

// const testArray = [5, "heheh", [2], NaN, false, true, 0, null, undefined]

// const removeFalsyValues = (arr) => {
//     const res = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]){
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }

// console.log(removeFalsyValues(testArray));

// const someVar = "";

// if (someVar){
//     console.log(true);
// } else {
//     console.log(false);
// }

// const arr = [1, 2, 3]
// const arr2 = arr;

// const changeFirstArrayValue = (someArray) => {
//     someArray[0] = 0;
// }

// changeFirstArrayValue(arr);

// console.log(arr);

// Implement a function named countVowels that takes a string parameter and returns the number of vowels (a, e, i, o, u) in the string.

// const countVowels = (string) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;

//     for (let i = 0; i < string.length; i++){
//         for (let j = 0; j < vowels.length ; j++ ){
//             if (string[i] === vowels[j]){
//                 count++;
//             }  
//         }
//     }
//     return count;
// }

// const amountOfVowels = countVowels("labas a i o");

// console.log(amountOfVowels);
