const fs = require('fs');

console.log('\nThis is day 2 of Advent of Code 2024.');

const data = fs.readFileSync('./AoC2024/data/day2.txt', 'utf8');

const rows = data.split('\n');
let safeRows = 0;
let safeRows2 = 0;

for (let row of rows) {
  let direction = 'down';
  const nums = row.split(' ');

  if (nums[0] - nums[1] > 0) {
    direction = 'up';
  }

  let safe = true;
  let safe2 = true;

  const findSafe = () => {
    if (safe) {
      safe = false;
      return;
    }
    safe2 = false;
    return;
  };

  for (let i = 0; i < nums.length - 1; i++) {
    if (direction == 'up') {
      const dif = nums[i] - nums[i + 1];
      dif <= 0 ? (safe = findSafe()) : null;
      dif > 3 ? (safe = findSafe()) : null;
    } else {
      const diff = nums[i] - nums[i + 1];
      diff >= 0 ? (safe = findSafe()) : null;
      diff < -3 ? (safe = findSafe()) : null;
    }
  }

  safe ? safeRows++ : null;
  safe2 ? safeRows2++ : null;
}

console.log(`This is part 1`);
console.log(safeRows);

console.log(`This is part 2`);
console.log(safeRows2);
