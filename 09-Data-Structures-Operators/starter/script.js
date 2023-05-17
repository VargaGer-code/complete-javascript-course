'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const arr2 = [3, 4, 5];
const arr3 = ['a', 'b', 'c'];
const newArr = [1, 2, ...arr2];

console.log(newArr);
console.log(...newArr);

let mergedArrays = [...arr2, ...arr3];
console.log('mergedArrays :: ' + mergedArrays);

const str = 'epic text';
const spreadStr = [...str];
console.log(spreadStr);

const arrayFood = ['apple', 'pear', 'orange'];

const writeIt = function (arg1, arg2, arg3) {
  console.log(`Here are the fruits: ${arg1}, ${arg2}, ${arg3}`);
};

writeIt(...arrayFood);

const [a, , , b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// REST pattern
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(1, 2, 4);
add(1, 2, 4, 5, 6);

restaurant.orer && restaurant.order('cheese', 'tomato');

console.log(0 ?? 10);
