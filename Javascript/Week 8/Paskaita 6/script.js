// Spausdink skaičius
// Parašykite JavaScript ciklą, kuris atspausdina skaičius nuo 1 iki 5.

// for (let i = 1; i <= 5; i++){
//     console.log(i);
// }

// Susumuok skaičius
// Sukurkite JavaScript programą, kuri suskaičiuoja sumą nuo 1 iki 5 naudojant while ciklą.
// let sum = 0;
// let i = 1;
// while(i <= 5){
//     sum += i;
//     i++;
// }
// console.log(sum);

// Lyginiai skaičiai
// Parašykite JavaScript for ciklą, kuris atspausdina visus lyginius skaičius nuo 2 iki 10.

// for(let i = 2; i <= 10; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// OR

// for (let i = 2; i <= 10; i +=2){
//     console.log(i);
// }

// Atvirkštinis skaičiavimas
// Parašykite JavaScript ciklą, kuris atspausdina skaičius nuo 10 iki 1 atbuline tvarka.

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// Kiekis cikle
// Sukurkite JavaScript programą, kuri naudojant while ciklą suskaičiuoja, kiek yra skaičių (nuo 1 iki 20), kurie dalijasi iš 3.
// let i = 1;
// while (i <= 20){
//     if (i % 3 === 0){
//         console.log(i);
//     }
//     i++;
// }

// YES BUT, KIEK YRA SKAICIU
// let count = 0;
// let i = 1;
// while (i <= 20){
//     if (i % 3 === 0){
//         count++;
//     }
//     i++;
// }
// console.log(count);

// Didžiausias skaičius
// Parašykite JavaScript programą, kuri randa didžiausią skaičių iš masyvo naudojant for ciklą.
// const arr = [2, 5, 75, 346, 3, 6865, 23];
// let largestNumber = arr[0];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > largestNumber){
//         largestNumber = arr[i];
//     }
// }
// console.log(largestNumber);

// Dalikliai
// Sukurkite JavaScript funkciją, kuri išspausdina visus skaičiaus 15 daliklius.
// let n = 15;
// for (let i = n; i > 0 ; i--){
//     if (n % i === 0){
//         console.log(i);
//     }
// }

// Skaičių filtravimas
// Sukurkite JavaScript programą, kuri naudojant for ciklą išfiltruoja ir atspausdina visus nelyginius skaičius iš masyvo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Nelyginius skaičius saugokite naujame masyve oddNumbers

// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddNumbers = [];

// for (let i = 0; i < arr2.length; i++){
//     if (!(arr2[i] % 2 === 0)){
//         oddNumbers.push(arr2[i]);
//     }
// }
// console.log(oddNumbers);

// Fibonačio seka
// Parašykite JavaScript programą, kuri naudojant for ciklą atspausdina pirmus dešimt Fibonačio sekos skaičius.
// let f1 = 0;
// let f2 = 1;
// let nextTerm = 0;
// for (let i = 1; i <= 10; i++){
//     console.log(f1);
//     nextTerm = f1 + f2;
//     f1 = f2;
//     f2 = nextTerm;
// }

// Pirminiai skaičiai
// Parašykite JavaScript ciklą, kuris atspausdina visus pirminius skaičius nuo 1 iki 20.

// for (let i = 2; i <= 20; i++){
//     let isPrime = true;
//     for (let j = 2; j < i; j++){
//         if (i % j == 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime){
//         console.log(i);
//     }
// }