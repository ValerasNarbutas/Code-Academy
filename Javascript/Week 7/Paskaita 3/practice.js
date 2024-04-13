// Sąlygos: Užduotys 1 dalis

// if (a string with zero)
// Ar bus rodomas alert?
// if ("0") {
//     alert( 'Hello' );
//   }

//Mažiausia šalis
/*Naudodami if..else konstrukciją, parašykite kodą, kuris klausia: „Kokia yra mažiausia pasaulyje šalis?“
Jei lankytojas įveda „Vatikanas“, išveskite „Teisingai!“, kitu atveju – išveskite: „Rimtai? Taigi Vatikanas!”. */

// const smallestCountry = prompt("Kokia yra maziausia pasaulyje salis?");

// if (smallestCountry === "Vatikanas") {
//     console.log("Teisingai!");
// } else {
//     console.log("Rimtai? Taigi Vatikanas!");
// }

//Perrašykite „if“ į „?”

// let result;
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// let result = (a + b < 4) ? "Below" : "Over";

// Perrašykite „if… else“ į „?“
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// const message = (login == 'Employee') ? 'Hello' :
//     (login == 'Director') ? 'Greetings' :
//     (login == '') ? 'No login' :
//     '';

// Sąlygos: Užduotys 2 dalis

// Pilnamečiai
/*Sukurkite du kintamuosius. Vieną kintamąjį legalAge, kuris būtų lygus 20, antrą kintamąjį clientAge su bet kokiu skaičiumi. Pasirašykite if...else sąlygą, kuri alert išvestų ar klientas jau pasiekęs 20 šį legalAge, ar dar ne. */

// const legalAge = 20;
// const clientAge = 8;

// if (clientAge >= legalAge) {
//     alert(`Pasiekęs ${legalAge}`)
// } else {
//     alert(`Nepasiekęs ${legalAge}`)
// }

// Ilgas vardas
/*Pasirašykite kintamąjį su savo vardu. Sukurkite if...else sąlygą, kuri pasakys "Ilgas vardas", jei jūsų vardas ilgesnis nei 6 raidės. Kitu atveju, nieko neišves. String ilgį galite susižinoti prirašant length savybę (pvz.: "Gedas".length arba su kintamuoju: name.length). Daugiau rasite čia. */
// const myName = "August";
// const nameLength = myName.length;

// if (nameLength > 6) {
//     console.log("Ilgas vardas");
// } 
// Atsakymas:
// const name = 'Gedas';
// if (name.length > 6) {
//   console.log('Ilgas vardas');
// }

// Ar didesnis
/*Sukurkite kintamąjį su savo amžiumi. Patikrinkite: jei amžius didesnis nei 100, arba mažesnis nei 0 - tegul išmeta "Invalid age"; jei amžius tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult". */
// const myAge = 8;
// if (myAge > 100 || myAge < 0) {
//     console.log("Invalid age");
// } else if (myAge >= 1 && myAge <= 18) {
//     console.log("Child");
// } else if (myAge >= 19 && myAge <= 99) {
//     console.log("Adult");
// }
// Atsakymas:
// const age = 30;
// if (age > 100 || age < 0) {
//   console.log('Invalid age');
// } else if (age < 18) {
//   console.log('Child');
// } else {
//   console.log('Adult')
// }

// Automobiliai
/*Sukurkite kintamąjį car, kuris bus lygus automobilio prekės ženklui. Parašykite if...else sąlygą, kuri pasakys ar prekės ženklas priklauso VW Group, BMW Group, ar nei vienam.
VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
BMW group priklauso: BMW, Mini, Rolls-Royce. */
// const car = prompt("Enter a car brand name");
// if (["VW", "Audi", "Bentley", "Bugatti", "Lamborghini", "Porsche"].includes(car)) {
//     console.log("The car belongs to VW Group");
// } else if (["BMW", "Mini", "Rolls-Royce"].includes(car)) {
//     console.log("The car belongs to BMW Group");
// } else {
//     console.log("The car doesn't belong to VW and BMW groups");
// }
// Atsakymas:
// const car = "BMW";
// if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
//   console.log('VW Group');
// } else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
//   console.log('BMW Group');
// } else {
//   console.log('Nei vienam');
// }

// Sąlygos: Užduotys Ternary '?' operatorius

// Short or Long
/*Susikurkite kintamąjį su jūsų vardu. Pasiklauskite, ar vardo ilgis trumpesnis nei 5 simboliai – jei taip, tegul išveda konsolėje "Short Name", kitu atveju – "Long Name". */
// const name = "August"
// if (name.length < 5){
//     console.log("Short Name");
// } else {
//     console.log("Long Name");
// }
// const name = "August";
// console.log(name.length < 5 ? "Short Name" : "Long Name");

// Ar galima vairuoti?
/*Sukurkite du kintamuosius clientAge ir legalAge. Patikriname ar vartotojas gali vairuoti automobilį – t.y. clientAge didesnis arba lygus legalAge. Jei taip – išveda Can Drive, kitu atveju Can't drive. */
// const clientAge = 17;
// const legalAge = 18;
// console.log(clientAge > legalAge ? "Can drive" : "Can't drive");

// -1 amžius
/*Hmm, o jeigu antrame pratime įvesti -1 kaip amžių? Darom double ternary operator – t.y. operatorius operatoriuje. Pirma paklausiame – ar amžius mažesnis nei 0; arba didesnis nei 120 – išvedame "Invalid Age". Jei vis tik ne – tada false statement'e bus dar vienas operatorius su antro pratimo klausimu. */
// const clientAge = 22;
// const legalAge = 18;
// console.log(clientAge < 0 || clientAge > 120 ? "Invalid Age" : clientAge > legalAge ? "Can drive" : "Can't drive");

// Phone
// Sukurkite kintamąjį phone, kuris būtų lygus iPhone. Taip pat sukurkite kintamąjį isIphoneUser, kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false) priklausomai ar phone yra iPhone ar bet koks kitas.
// const phone = "iPhone";
// const isIphoneUser = true;
// console.log(phone === isIphoneUser ? "iPhone user" : "Not iPhone user");

// Atsakymas
// const phone = "Samsung";
// const isIphoneUser = phone === "iPhone";
// console.log(isIphoneUser);

// Loginiai operatoriai: Užduotys
// Koks rezultatas?
// alert( null || 2 || undefined );
// Atsakymas yra 2, tai yra pirmoji teisinga vertė.

// Ką išveda alert?
// alert( alert(1) || 2 || alert(3) );
/*Atsakymas: iš pradžių 1, paskui 2.

alert iškvietimas negrąžina reikšmės. Arba, kitaip tariant, jis grįžta undefined.

Pirmasis ARBA || įvertina kairiojo operando alert(1). Tai rodo pirmąjį pranešimą su 1.

alert grąžinamas undefined, todėl ARBA pereina prie antrojo operando, ieškančio teisingos reikšmės.

Antrasis operandas 2 yra teisingas, todėl vykdymas sustabdomas, 2 yra grąžinamas ir tada rodomas išoriniu alert.

3 nebus, nes tikrinimas nepasiekia alert(3). */

// Patikrinkite diapazoną
/*Parašykite if sąlygą, kad patikrintumėte, ar amžius yra nuo 14 iki 90 metų imtinai.
Reiškia, kad amžius gali būti lygus tiek 14, tiek 90 metų ir viskas tarp jų. */
// const age = 13;
// if (age >= 14 && age <= 90) {
//     console.log("Age is between 14 and 90");
// } else {
//     console.log("Age is less than 14 or more than 90");
// }

//Patikrinkite už diapazono
/*Parašykite if sąlygą, kad patikrintumėte, ar amžius NĖRA nuo 14 iki 90 metų imtinai.
Parašykite du variantus: pirmąjį naudodami NOT !, antrąjį be jo. */
// const age = 13;
// if (!(age >= 14 && age <=90)) {
//     console.log("age is not 14-90");
// } else {
//     console.log("age is 14-90");
// }
// if (age < 14 || age > 90) {
//     console.log("age is not 14-90");
// } else {
//     console.log("age is 14-90");
// }

// Perrašykite ‘switch’ į ‘if’
// Parašykite kodą naudodami if..else, pagal šį switch:
// switch (browser) {
//     case 'Edge':
//       alert( "RIP Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Šios naršykles palaikomos' );
//       break;
  
//     default:
//       alert( 'Tikimės, kad šis puslapis atrodys puikiai!' );
// }

// let browser = "Chrome";
// if (browser == "Edge") {
//     console.log("RIP Edge!");
// } else if (browser == "Chrome" 
//         || browser == "Firefox" 
//         || browser == "Safari" 
//         || browser == "Opera") {
//     console.log("Sios narsykles palaikomos");
// } else {
//     console.log("Tikimes, kad sis puslapis atrodys puikiai!");
// }

// Perrašykite if į switch
// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// let a = +prompt('a?', '');

// switch(a) {
//     case 0 :
//         alert (0);
//         break;
//     case 1 :
//         alert (1);
//         break;
//     case 2:
//     case 3:
//         alert ( '2,3' );
//         break;        
// }

// Switch: Užduotys 2 dalis
// Automobiliai
/*Ar atsimenate paskutinį if...else pratimą? Būtent jį efektyviau apsirašyti su switch.
Sukurkite kintamąjį car, kuris bus lygus automobilio prekės ženklui. Aprašykite switch sąlygą, kuri pasakys ar prekės ženklas priklauso VW Group, BMW Group, ar nei vienam.
VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
BMW group priklauso: BMW, Mini, Rolls-Royce. */

// let car = "Kia";

// switch (car) {
//     case "VW":
//     case "Audi":
//     case "Bentley":
//     case "Bugatti":
//     case "Lamborghini":
//     case "Porsche":
//         alert("Priklauso VW Group");
//         break;

//     case "BMW":
//     case "Mini":
//     case "Rolls-Royce":
//         alert("Priklauso BMW group");
//         break;

//     default:
//         alert("Priklauso nei vienam");
// }

// Vaisius ar daržovė
/*Sukurkite kintamąjį userInput ir pradžioje prilyginkite Obuolys. Su switch sąlyga apsirašykite, kad userInput reikšmė yra – vaisius ar daržovė. Pridėkite bent 5 kiekvienos kategorijos */
// const userInput = "Duona";
// switch (userInput) {
//     case "Obuolys":
//     case "Bananas":
//     case "Vysnia":
//     case "Apelsinas":
//     case "Abrikosas":
//         console.log("Tai yra vaisius");
//         break;
//     case "Agurkas":
//     case "Pomidoras":
//     case "Bulve":
//     case "Cesnakas":
//     case "Salota":
//         console.log("Tai yra darzove");
//         break;
//     default:
//         console.log("Tai nei darzove nei vaisius");
// }

// Kokia šiandien diena?
// Sukurkite variable weekDay, kuris būtų lygus skaičiui – savaitės dienai, skaičiuojant nuo 0 (t.y. pirmadienis - 0; antradienis - 1; trečiadienis - 2 ir t.t.). Parašykite switch sąlygą, kuri paimtų skaičių ir jį pakeistų (ne sukurtų naują kintamąjį, o pakeistų weekDay reikšmę) į savaitės dieną žodžiu. Vėliau kintamąjį išveskite.
// const weekDay = 0;
// switch (weekDay) {
//     case 0 :
//         console.log("Pirmadienis");
//         break;
//     case 1 :
//         console.log("Antradienis");
//         break;
//     case 2 :
//         console.log("Treciadienis");
//         break;
//     case 3 :
//         console.log("Ketvirtadienis");
//         break;
//     case 4 :
//         console.log("Penktadienis");
//         break;
//     case 5 :
//         console.log("Sestadienis");
//         break;
//     case 6 :
//         console.log("Sekmadienis");
//         break;
//     default:
//         console.log("Tai nera savaites diena");
// }


// PRACTICE AGAIN


// const smallestCountry = prompt("Koia yra maziausia pasaulyje salis?");

// if (smallestCountry === "Vatikanas") {
//     alert("Teisingai!")
// } else {
//     alert("Rimtai? Taigi, Vatikanas!")
// }

// let result = (a + b < 4) ? "Below" : "Over";


// const message = (login == "Employee") ? "Hello" :
//     (login == "Director") ? "Greetings" :
//     (login == "") ? "No login" :
//     "";

// const legalAge = 20;
// const clientAge = 18;

// if (clientAge >= legalAge) {
//     alert("Client is legal age")
// } else {
//     alert("Client is a baby")
// }

