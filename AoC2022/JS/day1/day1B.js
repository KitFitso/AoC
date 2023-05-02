const input = require('../inputs/day1');

const calories = input.split('\n\n');

for (let i in calories) {
  calories[i] = calories[i]
    .split('\n')
    .reduce((total, curr) => total + +curr, 0);
}

calories.sort((a, b) => a - b);

console.log(calories.at(-1) + calories.at(-2) + calories.at(-3));

response = openai.Image.create(
  (prompt = 'a white siamese cat'),
  (n = 1),
  (size = '1024x1024')
);
image_url = response['data'][0]['url'];
