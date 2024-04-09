// PRAKTIKA

// m/s į km/s
// Parašykite funkciją convertMStoKMH, kuri konvertuoja greitį iš metrų per sekundę į kilometrus per valandą.

// function convertMStoKMH(number) {
//     return (number * 3600) / 1000;
// }

// OR

// const convertMStoKMH = (number) => number * 3.6;

// console.log(convertMStoKMH(10));

// Paprastas skaičių palyginimas
// Parašykite funkciją compareNumber, kuri palygina du skaičius ir grąžina didesnįjį iš jų. Jei skaičiai yra lygūs, funkcija turėtų grąžinti "lygūs". Įsitikinkite, kad abu argumentai yra skaičiai; jei ne, grąžinkite klaidos pranešimą.

// function compareNumber(x, y){
//     if (typeof x !== 'number' || typeof y !== 'number'){
//         return "Error, arguments must be numbers";
//     }

//     if ( x > y){
//         return x;
//     } else if (y > x){
//         return y;
//     } else {
//         return "Lygus"
//     }
// }

// const compareNumber = (x, y) => {
//     if (typeof x !== 'number' || typeof y !== 'number'){
//         return "Error, arguments must be numbers";
//     }

    // if (x > y) {
    //     return x;
    // } else if ( y > x) {
    //     return y;
    // } else {
    //     return "Lygus";
    // }

    // OR SHORTER CODE

//     if (x === y) {
//         return "Lygus";
//     }
//     return x > y ? x : y;
// }

// console.log(compareNumber(8, 4));

// Keliamieji metai?
// Parašykite funkciją isLeapYear, kuri priima year ir pasako ar metai yra keliamieji. Funkcija turi grąžinti true, jei metai keliamieji, ir false priešingu atveju.

// function isLeapYear(year){
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
//         return "Leap Year"
//     } else {
//         return "Not leap year"
//     }
// }

// const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// console.log(isLeapYear(2024));


// Didžiausias masvyo elementas

// Parašykite funkciją findMaxInArray, kuri ras ir grąžins didžiausią elementą masyve. Galime daryti prielaidą, kad visi array elementai yra skaičiai.

// let arr = [1, 5, 6, 30, 22];
// let arr = [-1, -3, -5, -6];
// let largest = arr[0];

// function findMaxInArray(){

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > largest){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// const findMaxInArray = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// console.log(findMaxInArray(arr));

// Masyvo elementų suma
// Parašykite funkciją sumArray, kuri suskaičiuoja ir grąžina visų elementų sumą masyve. Kaip ir užduotyje prieš tai, galime daryti prielaidą, kad visi array elementai yra skaičiai.

// let arr = [4, 55, 30, 49, 20];
// let sum = 0;

// function sumArray(){
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// const sumArray = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumArray(arr));


// Lygūs masyvai?
// Sukurkite funkciją arMasyvaiLygūs, kuri palygina du masyvus ir grąžina true, jei jie yra identiški, kitu atveju - false.

// arr1 = [1, 3, 5, 6, 7];
// arr2 = [1, 4, 5, 4, 9];
// arr3 = [1, 3, 5, 6, 7];

// function areArraysEqual(a, b){
//     if (a.length !== b.length){
//         return false;
//     }

//     for (let i = 0; i < a.length; i++){
//         if (a[i] !== b[i]){
//             return false;
//         }
//     }

//     return true;
// }

// const areArraysEqual = (a, b) => {
//     if (a.length !== b.length){
//         return false;
//     }

//     for (let i = 0; i < a.length; i++){
//         if (a[i] !== b[i]){
//             return false;
//         }
//     }

//     return true;
// }

// console.log(areArraysEqual(arr1, arr2));
// console.log(areArraysEqual(arr1, arr3));

// Eilutės apvertimas
// Sukurkite funkciją reverseString, kuri apverčia eilutę be jokių išorinių funkcijų ar metodų.

// function reverseString (str){
//     let newString = "";
//     for (let i = str.length -1; i >= 0 ; i--){
//         newString += str[i];
//     }
//     return newString;
// }

// const reverseString = (str) => {
//     let newString = "";
//     for (let i = str.length -1; i >= 0; i--){
//         newString +=str[i];
//     }
//     return newString
// }

// console.log(reverseString("Labas"));

// Palindromas
// Parašykite funkciją arPalindromas, kuri tikrina, ar žodis yra palindromas. Funkcija turi grąžinti true, jei žodis yra palindromas, priešingu ateju  - false.

// function isPalindrome (str){
//     let reversed = "";
//     for (let i = str.length -1; i >= 0; i--){
//         reversed += str[i];
//     }

//     if (reversed === str){
//         return true
//     } else {
//         return false;
//     }
// }

// OR

// const isPalindrome = (str) => {
//     for (let i = 0; i < str.length / 2; i++){
//         if (str[i] !== str[str.length -1 - i]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPalindrome("savas"));
// console.log(isPalindrome("svetimas"));
// console.log(isPalindrome("peaches"));
// console.log(isPalindrome("kayak"));

// Skaičių piramidė
// Sukurkite funkciją printPyramid, kuri spausdina skaičių piramidę iki nurodyto aukščio. Pavyzdžiui, 3 auktštų piramidė atrodo taip:

// function printPyramid (number){
//     let rows = number;
//     let char = "";

//     for (let i = 1; i <= rows; i++) {
//         for (let j = 1; j <= i; j++) {
//             char += i;
//         }
//         char += "\n";
//     }
//     return char;
// }

const printPyramid = (number) => {
    let rows = number;
    let char = "";

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            char += i;
        }
        char += "\n";
    }
    return char;
}
 
console.log(printPyramid(3));