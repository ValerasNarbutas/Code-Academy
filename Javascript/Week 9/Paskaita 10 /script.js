const someString = "Labas";
const arr = ["asd", "asdf"];

arr[0] = "asfsfds";
console.log(arr);
someString[1] = "b";
console.log(someString[1]); 

console.log(someString.charAt(1));
console.log(someString.at(-1));

const part1 = "Labas, ";

const fullString = part1.concat("August ", "Moon ", "Hehe");
const fullString2 = part1.concat(...arr);
console.log(fullString);
console.log(part1);
console.log(fullString2);

let someString2 = "Kazkas";

someString2 += "asafaf";

const darVienasString = someString2 + " dar kazkas paildomai";

console.log(someString2);
console.log(darVienasString);

function getString(){
    return "string from a function"
}

const someString3 = `sdsfs ${someString2} ${2 + 3} ${getString()}`;
console.log(someString3);

const someNumber = 23.3473878375;

console.log(someNumber.toFixed(2));

const someNumber2 = 3215.2546;
console.log(someNumber2.toPrecision(2));

const someNumber3 = 32.25;

console.log(someNumber3.toString(2));

const isTrue = true;

console.log(isTrue.toString());

console.log(isTrue.valueOf());

const someString4 = "      august@gmail.com     b  "
console.log(someString4);
console.log(someString4.trim());
console.log(someString4.trimEnd());
console.log(someString4.trimStart());

console.log(someString4.replace("august", "Moon"));

console.log(someString4.replaceAll("august", "Moon"));

console.log(Math.round(20.58));

console.log(Math.floor(20.58));

console.log(Math.abs(-25));

console.log(Math.ceil(20.58));

const arOfNumbers = [1, 8, -5]

console.log(Math.max(...arOfNumbers));

console.log(Math.sqrt(49));
