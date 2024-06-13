// console.log("This is before setTimeout");

// setTimeout(() => {
//     console.log("This is a callback function");
// }, 2000)

// console.log("This is after setTimeout");

// function logSomething(){
//     console.log("Cia yra paprasta funkcija");
// }

// setTimeout(logSomething, 2000);

// setInterval(() => console.log("Praejo dar viena sekunde"), 1000);

// const numbers = [1, 2, 3, 5];

// for(i = 0; i < numbers.length ; i++){
//     console.log(numbers[i] * 2);
// }

// forEach vykdysis tiek karty kiek numbers turi elementu
// forEach ima callback function kaip argumenta kad ji ivykdytu kas karta
// 1. (1) => vidus for each callbacko 1
// ...

numbers.forEach((num) => {
    console.log(num * 2);
})

// function myForEach(arr, callback) {
//     for(i = 0; i < numbers.length ; i++){
//         callback(arr[i])
//     }
// }

// myForEach(numbers, (num) => {
//     console.log("vidus for each callbacko" + num);
// })

// const strings = ["labas", "krabas", "bananas"];

// for(let i = 0; i < strings.length ;i++){
//     let newString = strings[i][0].toUpperCase();
//     newString += strings[i].slice(1, strings[i].length);

//     console.log(newString);
// }

// strings.forEach((str) => {
//     let newString = str[0].toUpperCase();
//     newString += str.slice(1, str.length);

//     console.log(newString);
// })

// 1. num = 1 return 1 * 2 doubleNumbersArray = [2]
// 2. num = 2 return 2 * 2 doubleNumbersArray = [2, 4]

// const doubleNumbersArray = numbers.map((num) => num * 2);

// console.log(doubleNumbersArray);

// const doubleNumbersArray2 = [];
// for(let i = 0; i < numbers.length; i++){
//     doubleNumbersArray2.push(numbers[i] * 2);
// }
// console.log(doubleNumbersArray2);

// const strings2 = ["lala", "lalalalal", "ajsfkasfhk", "asd"];

// const shortStrings = [];

// for(let i =0; i < strings2.length; i++){
//     if(strings2[i].length < 5){
//         shortStrings.push(strings2[i])
//     }
// }

// console.log(shortStrings);

// const shortStrings2 = strings2.filter((str) => {
//     return str.length < 5 ? true : false;

//     if (str.length < 5){
//         return true;
//     } else {
//         return false;
//     }
// })

// const shortStrings2 = strings2.filter((str) => str.length < 5);

// console.log(shortStrings2);

// pakelti visus skaicius kvadraty ir gauti nauja arr su tik skaiciais kurie yra mazesni nei 20

// const numbers3 = [2, 8, 9, 6]

// const res = numbers3.map((x) => x * x).filter((x) => x < 20);

// console.log(res);

// forEach - naudojam kai nereikia gauti naujo arr rezultato
// map - kai reikia gauti nauja

// UZDUOTYS

// Callbacks: Užduotys
// Vardas

/*Sukurkite dvi funkcijas: 

alertName

consoleName

Abi funkcijos turės vieną parametrą – vardą. Jos bus callback funkcijos. Pirmoji funkcija vardą alertins, antroji – console.log'ins. 

Susikurkite pagrindę funkciją (coreFunction). Ši funkcija – paims pirmą raidę, ją padarys didžiąja ir prijungs kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"), tada iškviečia vieną iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti). */

// function alertName(text) {
//     alert(text)
//   }
  
//   function consoleName(text) {
//     console.log(text)
//   }
  
//   function coreFunction(name, callback) {
//     const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     callback(capitalizedName)
//   }
  
//   coreFunction("august", consoleName)



