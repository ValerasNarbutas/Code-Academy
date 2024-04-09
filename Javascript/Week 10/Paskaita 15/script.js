
// class Car {
//     #drowned = false;

//     constructor(year, type) {
//         this.year = year;
//         this.type = type;
//     }

//     getDrowned(){
//         return this.#drowned;
//     }

//     setDrowned(newValue){
//         if (typeof newValue !== "boolean"){
//             console.log("negera reiksme");
//         } else {
//             this.#drowned = newValue
//         }
//     }

//     getDescription() {
//         console.log(`year: ${this.year} type: ${this.type} drowned: ${this.#drowned}`);
//     }
// }

// const bmw = new Car(2000, "diesel");
// const vw = new Car(2010, "petrol")

// console.log(bmw.type);

// console.log(bmw.drowned);
// bmw.setDrowned(true)
// console.log(bmw.getDrowned());

// bmw.getDescription()
// vw.getDescription()

// class Shape{
//     constructor(color){
//         this.color = color;
//     }

//     getColor() {
//         return this.color;
//     }
// }

// class Triangle extends Shape{
//     constructor(color, size) {
//         super(color)
//         this.size = size;
//     }

//     getSize() {
//         return this.size;
//     }
// }

// const tr = new Triangle("red", 20)

// console.log(tr.getColor());
// console.log(tr.getSize());

// UZDUOTYS

// Inventoriaus valdymas
// Sukurkite funkciją updateInventory, kuri priima esamą inventoriaus objektą ir pakeitimų masyvą. Kiekvienas pakeitimas yra objektas su item (prekės pavadinimu), change (kaitos kiekiu; gali būti neigiamas, jei prekė yra šalinama) ir action ("add" arba "remove"). Funkcija turėtų atnaujinti inventorių pagal pateiktus pakeitimus.

// const currentInventory = {
//     "apple": 10,
//     "banana": 15,
//     "orange": 20
// };

// const changes = [
//     { item: "apple", change: 5, action: "add" },
//     { item: "banana", change: 3, action: "remove" },
//     { item: "orange", change: 8, action: "add" }
// ];

// function updateInventory(currentInventory, changes) {
//     const currentInventoryCopy = {...currentInventory};

//     changes.forEach((ch) => {
//         if (ch.action === "add"){
//             currentInventoryCopy[ch.item] += ch.change;
//         } 
//         if (ch.action === "remove") {
//             currentInventoryCopy[ch.item] -= ch.change;
//         }
//     })
//     return currentInventoryCopy;
// }

// const updated = updateInventory(currentInventory, changes);

// console.log(updated);

// Studentų grupių balai
// Jūsų užduotis - sukurti funkciją countAverages, kuri priima objektą, turintį studentų grupių pavadinimus kaip raktus ir studentų egzaminų balų masyvus kaip reikšmes. Funkcija turėtų grąžinti naują objektą su kiekvienos grupės vidurkiu.

// const scores = {
//     "Group A": [85, 90, 75, 95],
//     "Group B": [70, 80, 65, 75],
//     "Group C": [95, 85, 80, 90]
// };

// function countAverages(scores) {
//     const scoresCopy = {...scores};
//     const keys = Object.keys(scoresCopy);
//     // console.log(keys);

//     // console.log(scoresCopy[keys[0]]); 

//     keys.forEach((key) => {
//         scoresCopy[key] = scoresCopy[key].reduce((acc, cur) => acc + cur) / scoresCopy[key].length;
//     })
//     return scoresCopy;
// }

// const averageScores = countAverages(scores);
// console.log(averageScores);

// Knygų paieška
// Parašykite funkciją surastiKnygasPagalPavadinima, kuri ieško visų knygų, kurių pavadinimai atitinka (arba dalinai atitinka) nurodytą paieškos terminą. Paieška taip pat turėtų būti case-insensitive. Knygos yra pateiktos kaip objektų masyvas su savybėmis title ir author. Funkcija priima knygos pavadinimo paieškos terminą kaip argumentą ir grąžina visas atitinkamas knygas.

// const books = [
//     { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//     { title: "To Kill a Mockingbird", author: "Harper Lee" },
//     { title: "The Catcher in the Rye", author: "J.D. Salinger" }
// ];

// function findBook(booksArr, search) {
//     return booksArr.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));
// }

// console.log(findBook(books, "Potter"));

// Darbuotojų ataskaita
// Sukurkite funkciją printEmployeeInfo, kuri priima objektą, kuriame yra darbuotojų vardai kaip raktai ir jų pareigos kaip reikšmės. Funkcija turi atspausdinti kiekvieno darbuotojo vardą ir pareigas.

const employees = {
    "John": "Manager",
    "Alice": "Developer",
    "Emily": "Designer"
};

function printEmployeeInfo(obj) {
    const entries = Object.entries(obj);
    entries.forEach((e) => {
        console.log(`Name: ${e[0]}, Position: ${e[1]}`);
    })
}

printEmployeeInfo(employees);