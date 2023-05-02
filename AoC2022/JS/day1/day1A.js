const input = require('../inputs/day1');

const calories = input.split('\n\n');
let max = 0;

for (let i in calories) {
  calories[i] = calories[i].split('\n');
  const newVal = calories[i].reduce((total, curr) => total + +curr, 0);
  if (newVal > max) max = newVal;
}

console.log(crypto.randomUUID());
