
// const person = {
//     name: "August",
//     age: 28,
//     "first-pet": "Cat",
// };

// person.name = "Austeja";
// person.lastName = "Pavarde";

// console.log(person["name"]);

// console.log(person["first-pet"]);

// const firstPet = "first-pet";
// console.log(person[firstPet]);

// delete person.name;

// console.log(person);
// console.log(person.name);
// console.log(person.age);

// const people = [
//     {
//         name: "Tadas",
//         age: 20,
//     },
//     {
//         name: "Juste",
//         age: 30,
//     },
//     {
//         name: "Antanas",
//         age: 25,
//     }
// ]

// const peopleSortedByAge = people.sort((a, b) => a.age - b.age);

// console.log(peopleSortedByAge);


// const recipe = {
//     title: "Pancakes",
//     serves: 2,
//     ingredients: ["milk", "flour", "sugar", "egg"]
// }

// console.log(recipe.title);
// console.log(`Serves: ${recipe.serves}`);
// console.log("Ingredients:");
// recipe.ingredients.forEach((item) => console.log(item));

// const august = {
//     name: "August",
//     age: 28,
//     isWorking: true,
//     pets: ["dog", "cat"],
//     mom: {
//         name: "mom",
//         age: 56,
//     },
//     sayHello: () => {
//         console.log("Hello");
//     }
// }

// console.log(august.mom.age);
// august.sayHello();

// function changeName(obj) {
//     const objCopy = {...obj}
//     objCopy.name = "kazkas kito"
// }

// console.log(august);

// changeName(august);

// console.log(august.name);

// console.log(Object.keys(august));
// console.log(Object.values(august));

// UZDUOTYS

// const people = [
//     {
//       name: "Petras",
//       age: "18"
//     },
//     {
//       name: "Jonas",
//       age: 15
//     },
//     {
//       name: "Antanas",
//       age: 20
//     },
//     {
//       name: "Urtė",
//       age: 10
//     },
//     {
//       name: "Diana",
//       age: 25
//     },
//     {
//       name: "Ieva",
//       age: 16
//     }
//   ];

//   Prafiltruokite masyvą, kad rodytų tik pilnamečius. 
// const adults = people.filter((p) => p.age >= 18)
// console.log(adults);

//  Tik pilnamečių vardai
// Pakoreguokite aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Rezultatas turi būti: ["Petras", "Antanas", "Diana"].

// const adults = people.filter((p) => p.age >= 18).map((p) => p.name);
// console.log(adults);

// Tvarka
// Antro pratimo array išrikiuokite A-Z tvarka. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.

// const adultNamesSorted = people.filter(p => p.age >= 18).map(p => p.name).sort((a, b) => a.localeCompare(b));

// console.log(adultNamesSorted);

// Prekės
/**Sukurkite funkciją. Ji priims vieną argumentą – array su objektais, kurie turės du parametrus:

name 

ir price. 

Grąžinkite – brangiausią ir pigiausią prekes.  */

// function findMinMaxProducts(products){
//     if (products.length === 0) {
//         return { brangiausias: undefined, pigiausias: undefined };
//     }

//     const sortedProducts = products.slice().sort((a, b) => a.price - b.price);

//     return {
//         pigiausias: sortedProducts[0].name,
//         brangiausias: sortedProducts[sortedProducts.length - 1].name
//     };
// }


// OR

// function findMinMaxProducts(products){
//     const sorted = products.sort((a, b) => a.price - b.price)
//     const cheapest = sorted[0].name;
//     const mostExpensive = sorted[sorted.length -1].name;

//     const result = {
//         brangiausias: mostExpensive,
//         pigiausias: cheapest
//     }
//     return result;
// }


// const products = [
//     { name: "lemonade", price: 50 },
//     { name: "lime", price: 10 },
//     { name: "orange", price: 25 }
// ];

// const result = findMinMaxProducts(products);
// console.log(result);

// Aptarnavimo eilės optimizavimas
// Jūs dirbate restorane ir turite optimizuoti užsakymų aptarnavimo eilę. Sukurkite funkciją optimizeQueue, kuri surikiuoja užsakymus pagal jų dydį (mažiausi pirmi). Kiekvienas užsakymas yra objektas, turintis id ir size savybes. Funkcija grąžina masyvą su surikiuotais užsakymų ID.

// const orders = [
//     {id: 1, size: 5},
//     {id: 2, size: 3},
//     {id: 3, size: 8},  
// ];

// const optimiseQueue = (arr) => arr.sort((a, b) => a.size - b.size).map((o) => o.id);

// console.log(optimiseQueue(orders));

// Dažniausiai pasikartojantis
// Sukurkite funkciją findMostFrequent, kuri nustato ir grąžina dažniausiai pasitaikantį elementą masyve.

function findMostFrequent(arr){
    // let mostFrequentNumber;
    // let mostFrequentAmount = 0;

    // arr.forEach((x) => {
    //     const filtered = arr.filter((y) => y === x);

    //     if (filtered.length > mostFrequentAmount) {
    //         mostFrequentNumber = x;
    //         mostFrequentAmount = filtered.length;
    //     }
    // });

    // return mostFrequentNumber;

    const groupedNumbers = {};
    
    arr.forEach((x) => {
        if (groupedNumbers[x]){
            groupedNumbers[x].push(x);
        } else {
            groupedNumbers[x] = [x]
        }
    })
    const allNumbers = Object.values(groupedNumbers).sort((a, b) => b.length - a.length)
    console.log(allNumbers[0][0]);
}

const array = [1, 2, 3, 4, 2, 2, 3, 2];
console.log(findMostFrequent(array)); 