// Vardo funkcija
// Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.
// function anyName (name){
//     alert (name);
// }

// anyName("August");

// Random
// Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.
// function randomNumber(){
//     let x = Math.floor((Math.random() * 5) + 1);
//     return x;
// }

// console.log(randomNumber());

// Raidžių skaičius
// Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

// function fullNameLength (string1, string2){
//     return string1.length + string2.length;
// }

// console.log(fullNameLength("August", "B"));

// Abėcėlė
// Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 

// function alphabetLetter(number){
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     if (number >= 0 && number < alphabet.length){
//         return alphabet[number];
//     } else {
//         return null;
//     }
// }

// console.log(alphabetLetter(2));

// OR

// function getLetterByIndex(index) {
//     const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     return alphabet[index];
//   }
//   getLetterByIndex(0);

// Matematika
// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9 ir t.t.).

