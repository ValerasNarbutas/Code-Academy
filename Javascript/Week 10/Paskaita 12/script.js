// const numbers = [12, 8, -92, 0, 0];
// // a - 12, b - 8 = 4
// // a - 8, b - -92 = -84
// console.log(numbers.sort((a, b) => b - a));
// console.log(numbers.sort((a, b) => a - b));

// const words = ["labas", "adata", "absdf", "zebras"];

// console.log(words[0].localeCompare(words[1]));

// console.log(words.sort((a, b) => a.localeCompare(b)));
// console.log(words.sort((a, b) => b.localeCompare(a)));
// console.log(words.sort((a, b) => -a.localeCompare(b)));

// const arrayOfArrays = [
//     [1, 6], 
//     [2, 9], 
//     [-8, 7],
// ];

// console.log(arrayOfArrays.sort((a, b) => b[1] - a[1]));

// const numbers2 = [12, 8, -92, 0, 0, 8, 2];

// let sum = 0;

// for (let i = 0; i < numbers2.length; i++){
//     sum += numbers2[i]
// }

// console.log(sum);

// // 1. accumulated - 12, current - 8
// // 2. accumulated 20, current - -92
// const sum1 = numbers2.reduce((accumulated, current) => {
//     console.log(`accumulated - ${accumulated}, current - ${current}`);
//     return accumulated + current
// })

// console.log(sum1);

// const wordsCombined = words.reduce((acc, curr) => {
//     return acc + curr;
// }, "labas, ")

// console.log(wordsCombined);

// // sukurkite dvi funkcijas:
// // alertName
// // consoleName

// // abi funkcijos tures viena parametra - varda. jos bus callback funkcijos. pirmoji funkcija varda alertins, antroji - console.log'ins.

// // susikurkite pagrindine funkcija (coreFunction). Si funkcija - paims pirma raide, ja padarys didziaja ir prijunge kitas raides (t.y. uztrikrina, kad vardas prasideda is didziosios; pvz: "petras" => "Petras"), tada iskviecia viena is callback funkciju (nesvarbu, kuria, galima jas kaitalioti).

// function alertName(name) {
//     alert(name);
// }

// function consoleName(name) {
//     console.log(name);
// }

// function coreFunction(name, callback) {
//     const capitalisedName = name[0].toUpperCase() + name.slice(1, name.length);
//     callback(capitalisedName)
// }

// coreFunction("hello", consoleName);
// coreFunction("peaches", alertName);

// Automobiliai
// Nusikopijuokite array const cars = ["BMW", "VW", "Audi"] ir, naudojant forEach, atspausdinkite kiekvieną elementą (automobilio reikšmę). 

// cars = ["BMW", "VW", "Audi"];

// cars.forEach((car) => console.log(car))

// Automobiliai (papildymas)
// Pakoreguokite pirmą pratimą, kad atspausdintumėte index: value (pvz: 0: BMW, 1: VW ir t.t.).

// cars.forEach((car, i) => console.log(`${i}: ${car}`))

// Friends
// Sukurkite masyvą pavadinimu names su savo draugų vardais, raidžių kapitalizaciją pamiksuokite (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padarykite, kad susikurtų naujas array (ir jį atspausdinkite), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" -> "Petras").

// const names = ["daRyl", "Judah", "deNiSa"];

// const fixedNames = names.map((name) => name[0].toUpperCase() + name.slice(1, name.length).toLowerCase()
// );

// console.log(fixedNames);

// Pilnamečiai
// Sukurkite array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter – išveskite tik tuos skaičius, kurie yra didesni arba lygūs 18.

// const ages = [1, 8, 85, 47, 18];

// const adults = ages.filter((age) => age >= 18)

// console.log(adults);

// Prasideda iš K
// Sukurkite array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find – suraskite bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

const cities = ["Klaipeda", "Vilnius", "Kaunas", "kaunas"];

// const cityStartingWithK = cities.find((city) => city[0] === "K")

// console.log(cityStartingWithK);

// Miestai iš mažosios
// Penktame pratime esantį sprendimą pakoreguokite ir patikrinkite su some ar bent vienas miestas prasideda iš mažosios.

const areSomeCitiesStartingWithLowerCase = cities.some((city) => city[0] === city[0].toLowerCase())

console.log(areSomeCitiesStartingWithLowerCase);

// Visi iš didžiosios
// Pakoreguokite šeštą pratimą, kad patikrintų ar visi miestai prasideda iš didžiosios raidės.

const areAllCitiesStartingWithUpperCase = cities.every((city) => city[0] === city[0].toUpperCase())

console.log(areAllCitiesStartingWithUpperCase);