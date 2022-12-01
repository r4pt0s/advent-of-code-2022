import { readFileSync } from 'fs';
import { elvesCalories } from './utils.js';

const input = readFileSync(`${__dirname}/input.txt`, { encoding: 'utf8', flag: 'r' });
const test = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const [first, second, third] = elvesCalories(input);

console.log(`Part 1 => Top 1 calories: ${first}`);
console.log(`Part 2 => Top 3 calories sum: ${first + second + third}`);
