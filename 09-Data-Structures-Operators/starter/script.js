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

  orderPizza: function ({ address, starter, main }) {
    console.log(address, starter, main);
  },
};

const openingHours = restaurant.openingHours;

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// restaurant.openingHours.mon && console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours?.mon?.open);

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day} we open at ${open}`);
// }

// const users = [{ theName: 'ass', mail: '1@1.1' }];
// console.log(users[0]?.theName ?? 'userArrayEmpty');

// const myOrder = {
//   address: 'szhb',
//   main: 1,
//   starter: 2,
// };

// restaurant.orderPizza(myOrder);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const properties = Object.keys(openingHours);

// for (const key of properties) {
//   console.log(key);
// }

// console.log(Object.values(openingHours));

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close az ${close}`);
// }

// const mySet = new Set(['ass', 'ass']);
// console.log(mySet);

// const staff = ['Waiter', 'Chef', 'Chef', 'Manager', 'Waiter'];
// // for (let member of staff) {
// //   staffSet.add(member);
// // }

// let staffSet = [...new Set(staff)];

// console.log(staffSet);

// const myMap = new Map();
// myMap
//   .set('Name', 'zoolander')
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'Opennn :)')
//   .set(false, 'cloose :(');

// console.log(myMap);
// console.log(myMap.get(true));

// const questions = new Map([
//   ['question', 'why r u geh'],
//   [1, 'u geh'],
//   [2, 'u transgandah'],
//   [3, 'hu say im ge'],
//   ['correct', 2],
//   [true, 'Okay'],
//   [false, 'Not okay'],
// ]);

// console.log(questions);

// console.log(Object.entries(openingHours));

// const openingHoursMAP = new Map(Object.entries(openingHours));
// console.log(openingHoursMAP);

// console.log(questions.get('question'));
// for (const [key, value] of questions) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = 2;
// console.log(questions.get(questions.get('correct') === answer));
// // answer === questions.get('correct')
// //   ? console.log(questions.get(true))
// //   : console.log(questions.get(false));

// console.log([...openingHoursMAP]);
// console.log(openingHoursMAP.entries());
// console.log([...openingHoursMAP.keys()]);
// console.log([...openingHoursMAP.values()]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// // 1.
// let gameEventsSet = new Set();

// // for (const [key, value] of gameEvents) {
// //   gameEventsSet.add(value);
// // }

// const events = [...new Set(gameEvents.values())];
// console.log(`With unpack ${events}`);

// const events2 = [new Set(gameEvents.values())];
// console.log(`Without unpack ${events2}`);

// console.log(gameEventsSet);

// const newArr = new Array(gameEventsSet);
// console.log(newArr);

// //2.
// gameEvents.delete(64);
// console.log(gameEvents);

// //3.
// console.log(gameEvents.size);
// console.log(`An event happened, on average ${90 / gameEvents.size} minutes`);

// //4.
// // for (const [time, event] of gameEvents) {
// //   if (time <= 45) {
// //     console.log(`FIRST HALF ${time}: ${event}`);
// //   } else {
// //     console.log(`SECOND HALD ${time}: ${event}`);
// //   }
// // }

// // for (const [time, event] of gameEvents) {
// //   time <= 45
// //     ? console.log(`FIRST HALF ${time}: ${event}`)
// //     : console.log(`SECOND HALf ${time}: ${event}`);
// // }

// for (const [time, event] of gameEvents) {
//   const half = time <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${time}: ${event}`);
// }

// STRINGS

// const airline = 'Malévv egy társaság';
// const plane = 'A320';

// console.log(plane[2]);
// console.log('myass'[1]);
// console.log('myass'.length);
// console.log(airline.indexOf('v'));
// console.log(airline.lastIndexOf('v'));
// console.log(airline.indexOf('egy'));

// console.log(airline.toLocaleUpperCase());

// const passanger = 'kelEmenNN';
// const passangerLower = passanger.toLocaleLowerCase();
// const passangerCorrect =
//   passangerLower[0].toLocaleUpperCase() + passangerLower.slice(1);
// console.log(passangerCorrect);

// airline.trimStart();

// const priceGB = '222,2€';
// const priceUS = priceGB.replace('€', '$').replace(',', '.');
// console.log(priceUS);

// const fruits = 'apple orange melon apple';
// console.log(fruits.replaceAll(/apple/g, 'pear'));

// console.log('Egy+ketto+harom+negy'.split('+'));

// const daName = 'gordon freeman';
// const [firstName, lastName] = daName.split(' ');
// console.log(firstName);
// console.log(lastName);

// const newName = ['Mr.', firstName, lastName.toLocaleUpperCase()].join('#');
// console.log(newName);

const lowNamesStr = 'gordon barney gina kleiner';

// const capitalizeNames = function (names) {
//   const namesUpper = [];
//   const namesArr = names.split(' ');
//   for (const lowname of namesArr) {
//     namesUpper.push(lowname[0].toUpperCase() + lowname.slice(1));
//   }
//   console.log(namesUpper);
// };

// capitalizeNames(lowNamesStr);

const capitalizeNames = function (names) {
  const namesArr = names.split(' ');
  const namesUpper = [];
  for (const lowName of namesArr) {
    namesUpper.push(lowName.replace(lowName[0], lowName[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
