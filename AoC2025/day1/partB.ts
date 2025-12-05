import data from './data';

let zeros = 0;
let currentValue = 50;

const splitData = data.split('\n');

for (const data of splitData) {
  const direction = data[0];
  const magnitude = Math.abs(+data.slice(1));

  //find how far it needs to travel for it to happen once.
  //if it is 0 it needs to be a full 100
  let distanceTo0;
  if (direction === 'L') {
    distanceTo0 = currentValue === 0 ? 100 : currentValue;
  } else {
    distanceTo0 = currentValue === 0 ? 100 : 100 - currentValue;
  }

  if (magnitude >= distanceTo0) {
    //this is every 100 past the distance to 0 and 1 for the first distance to 0
    zeros += Math.floor((magnitude - distanceTo0) / 100) + 1;
  }

  //in the end find the next current value

  currentValue =
    direction === 'L'
      ? (currentValue - magnitude) % 100
      : (currentValue + magnitude) % 100;

  currentValue = currentValue < 0 ? currentValue + 100 : currentValue;
}
console.warn('you cross 0', zeros, 'times');
