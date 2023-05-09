"use strict";

// Hányadik páros szám a beírt szám. Pl.: 3 -> a 3. páros szám a 4
// function nthEven(n) {
//   let currentEven = 0;
//   for (let i = 0; i <= n; i++) {
//     if (isEvenNum(n)) {
//       currentEven = n;
//     }
//   }
//   console.log(currentEven);
// }

// function isEvenNum(num) {
//   if (num % 2 === 0) {
//     console.log(`${num} is even`);
//     return true;
//   } else {
//     console.log(`${num} is not even`);
//     return true;
//   }
// }

// nthEven(9);

// const nthEven = n => n * 2 - 2;

// console.log(nthEven(3));

// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

// const myString1 = "1,2,3,4";
// const myString2 = "1,2,3";
// const myString3 = "2,3,4";
// const myString4 = "3,4";
// const myString5 = "4";
// const myString6 = "";
// const myString7 = "1,2,3,4,5";
// const myString8 = "1,2,3,4,5,6";
// const myString9 = "1,2,3,4,5,6,7";

// const myArrayString = myString.split(",");
// const myStringAgain = myArrayString.join(" ");

// console.log(myArrayString);
// console.log(myStringAgain);

// function array(string) {
//   const myArray = string.split(",");
//   if (myArray.length < 3) {
//     return null;
//   } else {
//     myArray.shift();
//     myArray.pop();
//   }
//   const myReturnedString = myArray.join(" ");
//   return myReturnedString;
// }

// function array2(string) {
//   string = string.split(",");
//   string.shift();
//   string.pop();
//   return string.join(" ") === "" ? null : string.join(" ");
// }

// console.log(array2(myString1));
// console.log(array2(myString3));
// console.log(array2(myString4));
// console.log(array2(myString5));
// console.log(array2(myString6));

// const simaLista1 = [1, 2, 3, 4];
// const simaLista2 = [1, -2, 3, -4, 5];
// const simaLista3 = [];

// function invert(array) {
//   let invertedList = [];
//   for (let i = 0; i < array.length; i++) {
//     //console.log(`Elem konvert előtt: ${array[i]}`);
//     invertedList.push(array[i] * -1);
//     //console.log(`Elem konvert után: ${array[i] * -1}`);
//   }
//   return invertedList;
// }

// console.log(invert(simaLista1));
// console.log(invert(simaLista2));
// console.log(invert(simaLista3));

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: prompt("Celsius"),
//   };
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// // Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) IDENTIFY
// console.log(amplitudeBug);

// ##################################

// Code challange
// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]
//1. szétszedni az arrayt

const fc1 = [17, 21, 23];
const fc2 = [12, 5, -5, 0, 4];

const printForecast = function (maxTempArr) {
  let stringMaxTemp = "... ";
  for (let i = 0; i < maxTempArr.length; i++) {
    stringMaxTemp += `${maxTempArr[i]} in ${i + 1} days  ... `;
  }
  return stringMaxTemp;
};

console.log(printForecast(fc1));
console.log(printForecast(fc2));
