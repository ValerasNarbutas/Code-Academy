// Didžiosios raidės
// Parašykite funkciją convertToUpperCase, kuri pakeičia visus teksto simbolius į didžiąsias raides (pvz. labas pakeitų į LABAS).

// const convertToUpperCase = (str) => str.toUpperCase();

// console.log(convertToUpperCase("hello"));

// Teksto iškarpa
// Sukurkite funkciją extractSubstring, kuri grąžina iškarpos, pradedant nuo 3 iki 7 simbolio, tekstą.

// const extractSubstring = (text) => text.slice(2, 7);

// console.log(extractSubstring("Sveikas pasauli"));

// Iš didžiosios raidės
// Sukurkite funkciją capitalizeFirstLetter, kuri pavertimas pirmąją kiekvieno žodžio raidę tekste į didžiąją.

// const capitalizeFirstLetter = (text) => {
//     text = text.split(" ");

//     for (let i = 0; i < text.length; i++) {
//         text[i] = text[i][0].toUpperCase() + text[i].substring(1);
//     }
//     return text.join(" ")
// }

// console.log(capitalizeFirstLetter("good morning world"));

// Nepadorių žodžių cenzūra
// Parašykite funkciją censorCurseWords, kuri tekste pakeičia nurodytus nepadorius žodžius į "****". Sprendimas turi nenaudoti reguliariųjų išraiškų (angl. Regular expression).

// const badWords = ["fuck", "shit", "wanker"];
// const text = "fuck this shit";

// const censorCurseWords = (text, curseWords) => {
//     let censoredText = text;
//     for (let i = 0; i < curseWords.length; i++) {
//         const curseWord = curseWords[i];
//         while (censoredText.includes(curseWord)) {
//             censoredText = censoredText.replace(curseWord, '****');
//         }
//     }
//     return censoredText;
// };

// console.log(censorCurseWords(text, badWords));

// Number metodai: Užduotys

// Milk price
// Sukurkite kintamąjį milkPrice. Su JS patikrinkite ir išveskite vartotojui alert() ar jam reikės pasiimti smulkių centų, ar nereikės (t.y. ar skaičius sveikas ar ne).

// const milkPrice = 3.49; // Vėliau pakeisti kainą į 3

// if (Number.isInteger(milkPrice)) {
//   alert("Centų nereikia")
// } else{
//   alert("Centų prireiks...")
// }

// Skaičiai po kablelio
// Papildykite pirmą pratimą, kad alert() taip pat išvestų kainą su dviem skaičias po kablelio (t.y. 3.49, 3.00).

// const milkPrice = 3.49; // Vėliau pakeisti kainą į 3

// if (Number.isInteger(milkPrice)) {
//   alert("Centų nereikia")
// } else{
//   alert("Centų prireiks...")
// }

// alert(milkPrice.toFixed(2))

// Maksimalus skaičius
// Sukurkite funkciją findMax, kuri grąžina didžiausią skaičių iš pateiktų argumentų naudojant Math.max().

// const findMax = (...numbers) => Math.max(...numbers);

// console.log(findMax(6, 8, 4));


// Boolean metodai: Užduotys

// Legal age
/*Pasirašykite kintamąjį isLegalAge, kurį priskirkite true arba false. 

Console.log'e atvaizduokite šį kintamąjį. 

Sukurkite antrą console.log, kuriame atvaizduokite šį kintamąjį su toString() metodu. Turėtų skirtis spalva teksto. */

// const isLegalAge = true;

// console.log(isLegalAge);
// console.log(isLegalAge.toString());