// Masyvo papildymas
// Sukurkite array [2, 3, 4] ir į jo pradžią pridėkite 1.

// const newArray = [2, 3, 4];
// newArray.unshift(1);
// console.log(newArray);

// Unikalūs elementai kiekis
// Parašykite kodą, kuris suskaičiuoja ir išveda į console, kiek yra skirtingų elementų masyve.

const arr = [1, 2, 2, 3, 3, 3, 4];
const uniqueElements = [];

for (let i = 0; i < arr.length; i++){
    if (!uniqueElements.includes(arr[i])){
        uniqueElements.push(arr[i]);
    }
}

console.log(uniqueElements.length);
console.log(uniqueElements);

// OR using Set()
// const set = new Set(arr)
// console.log(set);


// Tik teigiami
// Išveskite į console masyvą tik iš teigiamų skaičių iš pradinio masyvo.
// const arr2 = [-3, 1, -2, 4, -5, 6];
// const positiveArray = [];

// for (let i = 0; i < arr2.length; i++){
//     if (arr2[i] >= 0){
//         positiveArray.push(arr2[i])
//     }
// }

// console.log(positiveArray);

// Ar elementas pasikartoja?
// Raskite ar nurodytas elementas pasikartoja masyve. Kodas išveda true, jei elementas pasikartoja, ir false priešingu atveju.