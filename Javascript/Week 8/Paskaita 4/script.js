// const fruits = ["apple", "orange", "pear", "Strawberry"];

// const amountOfFruit = fruits.length;
// // mes susikureme amountofFruit, tai jis kaip ir po to neveikia, reikia ji vel parasyti, nes siaip splice turetu pakeisti originala.
// fruits[1] = "Banana";

// fruits.splice(2, 2, "cherry", "Watermelon", "Kiwi", "Banana");

// console.log(fruits);
// console.log(amountOfFruit, fruits.length);
// console.log(fruits[amountOfFruit-1]);
// // SPLICE pakoreguoja originala, bet SLICE nekoreguoja originalo
// const cars = ["Audi", "BMW", "Volvo", "Citroen"];

// const smallerArray = cars.slice(1, 3);

// // concat nekeicia originalo
// const additionalCars = smallerArray.concat("Toyota", 8, cars.slice(0));

// console.log(smallerArray);
// console.log(cars);
// console.log(additionalCars);

// // PUSH noredami prideti kazka pire array

// const arr1 = [1, 5, 634, 354, 345, 56];
// // Prie originalo galo prideda reiksme
// arr1.push(22);
// // Prie originalo priekio prideda reiksme
// arr1.unshift("Rieksme pradzioje");

// console.log(arr1);
// // POP isiema paskutine reiksme
// const arr2 = [1, 4, 5, 66, 54, 67];
// // is originalo paima pakutini elementa
// const lastNumberOfArray = arr2.pop();
// //  is originalo paima pirma elementa
// const firstNumberOfArray  = arr2.shift();

// console.log(lastNumberOfArray);
// console.log(firstNumberOfArray);
// console.log(arr2);

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// nors ir const, bet galima priskirti nauja raiksme VIDUJE
// const myArray = [1, 2, 3, 4, 5, 6];
// // ne kopijuoja, o issaugo adresa(pointer) - my array 2 issaugojo adresa kur gyvena my array
// const myArray2 = myArray;

// myArray2[0] = "kazkas kito";
// // spread operator (...) iskleidzia array i palaidas reiksmes
// console.log(...myArray);

// // Padaro kopija
// const myArrayCopy = [...myArray];
// // Padaro kopija
// const myArrayCopy2 = JSON.parse(JSON.stringify(myArray));
// console.log(myArrayCopy2);
// myArrayCopy[2] = "vel kazkoks pakeitimas"
// console.log(myArrayCopy);
// console.log(myArray);

// UZDUOTYS

// iskonsolinti kiekviena array reiksme

// const testArray1 = [true, "hello", 8, [1, 5]];

// for (let index = 0; index < testArray1.length; index++){
//     console.log(testArray1[index]);
// }

// surasti visu array elementu suma
// const testArray2 = [1, 5, -5, 22];

// let sum = 0;

// for (let i = 0; i < testArray2.length; i++){
//     sum += testArray2[i];
// }

// console.log(sum);

// isfiltruoti neigiamas reiksmes is array(originalo nepakeisti)

// const testArray3 = [5, -5, 7, 0];
// const positiveArray = [];

// for (let i = 0; i < testArray3.length; i++) {
//     // testArray3[index] - paima atskira reiksme kiekviena karta vykdant for cikla is testArray3
//     // testArray3[index] >= 0, 1. 5 >= 0, 2. -5 >= 0 t.t.
//     if (testArray3[i] >= 0) {
//         // positiveArray.push prie rezultato array galo prideda katik ife patikrinta reiksme
//         positiveArray.push(testArray3[i])
//     } 
// }

// console.log(positiveArray);

// reverse an array

// const testArray4 = [1, 2, 3];
// const reversed = [];

// for (let i = testArray4.length -1; i >= 0; i--) {
//     console.log(i);
//     reversed.push(testArray4[i])
// }

// console.log(reversed);

// const reversed2 = testArray4.reverse();
// console.log(reversed2);
