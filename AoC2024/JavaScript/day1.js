const fs = require('fs');

console.log('\nThis is day 1 of Advent of Code 2024.');
const data = fs.readFileSync('./AoC2024/data/day1.txt', 'utf8');

const lines = data.split('\n');
let leftCol = [];
let rightCol = [];

lines.map((line) => {
  let row = line.split('   ');
  leftCol.push(row[0]);
  rightCol.push(row[1]);
});

leftCol = leftCol.sort((a, b) => a - b);
rightCol = rightCol.sort((a, b) => a - b);

let distance = 0;

for (let i = 0; i < leftCol.length; i++) {
  distance += Math.abs(leftCol[i] - rightCol[i]);
}
console.log(`This is part 1`);
console.log(distance);

let similarity = 0;
for (let i = 0; i < leftCol.length; i++) {
  let mult = 0;
  for (let j = 0; j < rightCol.length; j++) {
    if (+leftCol[i] == +rightCol[j]) {
      mult += 1;
    }
  }

  similarity += leftCol[i] * mult;
}
console.log(`This is part 2`);
console.log(similarity);
