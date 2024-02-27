// let skaicius = 10;

// skaicius += 5;

// skaicius -=10;

// skaicius *=10;

// skaicius /= 5;

// skaicius %= 3;

// skaicius **=8;

// console.log(skaicius);

// const skaicius1 = 15;
// const skaicius2 = 9;

// const sum = skaicius1 + skaicius2;

// console.log(sum);

// let skaicius3 = 10;

// skaicius3++;

// console.log(skaicius3);

// console.log(5 < 8);
// console.log(8 == "8", "8 == 8");
// console.log(7 != 8);
// console.log(8 === "8", "8 == 8");

// const userInput = prompt("Iveskite skaiciu");

// typeof grazina kinatmojo tipa
// +userInput pakeicia ivesta teksta i skaiciu
// NaN - not a number type - number

// console.log(+userInput);

// let balance = 300;

// const moneyToTransfer = prompt("Iveskite suma");

// balance -= +moneyToTransfer;

// console.log(balance);

// let balance = 500;

// const interestRate = prompt("Iveskite palukanu norma");

// balance += balance * (interestRate / 100);

// console.log(balance);

// const word = "bananas";

// const guess = prompt("Bandykite atspeti zodi");

// console.log("spejimo rezultatas:", word === guess);

// Uzduotys/Palyginimai
// Amzius - Sukurkite kodą, kuris palygina du tekstus ir išspausdina rezultatą, ar jie yra lygūs.

// const text1 = prompt("Write a sentence");
// const text2 = prompt("Write another sentence");

// console.log("Ar tekstai lygus?", text1 === text2);

// Skaicius vs eilute 
/*Turite du kintamuosius number ir text, jų reikšmės atitinkamai yra 10 ir "10". Sukurkite tris skirtingus palygimus iš išveskite juos į konsolę.

Rezultatas turėtų būti:
false
true 
false */

// const number = 10;
// const text = "10";

// const false1 = number === text;
// const true1 = number == text;
// const false2 = number != text;

// console.log(false1);
// console.log(true1);
// console.log(false2);

// Balansas 
/* Sukurkite du kintamuosius - currentBalance ir transaction. Palyginkite juos ir išveskite ar užtenka balanso atlikti operacijai.

currentBalance  - 50, transaction - -50, rezultatas - true

currentBalance  - 50, transaction - 50, rezultatas - true

currentBalance  - 50, transaction - -51, rezultatas - false

currentBalance  - 50, transaction - 51, rezultatas - true */

// const currentBalance = 50;
// 1.
// const transaction = -50;
// const balance = currentBalance - (transaction * (-1));
// console.log(balance == 0);
// 2.
// const transaction = 50;
// const balance = currentBalance - transaction;
// console.log(balance == 0);
// 3.
// const transaction = -51;
// const balance = currentBalance - (transaction * (-1));
// console.log(balance > 0);
// 4.
// const transaction = 51;
// const balance = currentBalance - transaction;
// console.log(balance < 0);

// Skaicius su liekana
// Patikrinkite ar du pasirinkti skaičiai dalinasi be liekanos. Rezultatą išveskite ekrane.

// const number1 = 10;
// const number2 = 5;
// const result = number1 % number2 === 0;
// console.log(result);

// Operatoriai, matematika ir palyginimai
// Paprasta sudėtis
// Sukurkite du kintamuosius. Vieną kintamąjį a, kuris būtų lygus 10, antrą kintamąjį b su bet kokiu skaičiumi. Pasirašykite JavaScript kodą, kuris sumuoja du skaičius ir išspausdina rezultatą.

// const a = 10;
// const b = 8;
// console.log(a + b);

// Amzius
// Sukurkite kitamajį year ir iš jo atimkite savo amžių. Nenaudokite jokių papildomų kintamųjų, rezultatas turi būti išvestas naudojant console.log(year).
// let year = 2024;
// year -= 29;
// console.log(year);

// Eilučių sujungimas
// Sukurkite du kintamuosius - vieną su savo vardu, kitą su pavarde. Parašykite kodą, kuris sujungs jūsų vardą ir pavardę bei išves rezultatą į konsolę.
// const name = "August";
// const lastName = "Bal";
// const fullName = name + " " + lastName;
// console.log(fullName);

// Temperatūros konvertavimas
// Sukurkite kintamąjį, kuriame bus nurodyta tempetarūra. Parašykite matematinę operaciją, kuri convertuos Celsijus į Farenheitus.
// const temperatureCelsius = 20;
// const toFarenheit = (temperatureCelsius * 9/5) + 32;
// console.log("Fareneheit Temperature is: " + toFarenheit);

// Finansinė operacijas konvertavimas
/*Parašykite JavaScript kodą, kuris atlieka finansinę operaciją, remdamasis esamu banko balansu. Operacija yra tokia:

Pradinis banko balansas yra 999.99 eurų.

Prie balanso pridedama 9% nuo dabartinio balanso.

Po to balansas padauginamas iš 2.

Iš rezultato atimama 50 eurų.

Išveskite visus tarpinius balansus po kiekvienos operacijos, suapvalinkite rezultatus iki 2 skaičių po kablelio. */

let currentBalance = 999.999;
currentBalance = (9 * currentBalance) / 100;
console.log(currentBalance.toFixed(2));
currentBalance *= 2;
console.log(currentBalance.toFixed(2));
currentBalance -= 50;
console.log(currentBalance.toFixed(2));