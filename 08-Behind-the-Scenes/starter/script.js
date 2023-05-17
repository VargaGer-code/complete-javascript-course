'use strict';

const addExpr = function () {
  console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return console.log(`SUM :: ${sum}`);
};

addExpr(2, 5, 7, 3, 1);

let addArrow = (a, b) => {
  console.log(arguments);
};
addArrow();
