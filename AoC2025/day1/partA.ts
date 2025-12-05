import data from './data';

//todo this should work like a lock dial, if left === 'L' then it should turn left around the dial and 'R' is right. What did I do wrong on this?

let zeros = 0;
let currentValue = 50;
let splitData = data.split('\n');

for (const n of splitData) {
  const left = n[0];
  const right = +n.substring(1) % 100;

  if (left === 'L') {
    currentValue = currentValue - +right;
    if (currentValue < 0) currentValue = 100 + currentValue;
  }

  if (left === 'R') {
    currentValue = currentValue + +right;
    if (currentValue >= 100) currentValue -= 100;
  }

  if (currentValue === 0) zeros++;
}

console.warn(zeros);
