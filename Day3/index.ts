import { readFileSync } from 'fs';
import { prepareInput, part1, part2} from './utils';

// a-z => 1-26
// A-Z => 27-52
// Ref a => charCodeAt = 97
// Ref A => charCodeAt = 65

const input = readFileSync(`${__dirname}/input.txt`, { encoding: 'utf8', flag: 'r' });
const rucksacks: string[] = prepareInput(input);

console.log(`Part 1 => What is the sum of the priorities of those item types in compartments?: ${part1(rucksacks)}`);
console.log(`Part 2 => What is the sum of the priorities of those item types found in each of the three rucksack batches?: ${part2(rucksacks)}`);
