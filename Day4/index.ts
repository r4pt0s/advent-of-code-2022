import { readFileSync } from 'fs';
import { prepareInput, part1, part2 } from './utils';

const input = readFileSync(`${__dirname}/input.txt`, { encoding: 'utf8', flag: 'r' });

const sectionPairs = prepareInput(input);


console.log(`Part 1 => In how many assignment pairs does one range fully contain the other??: ${part1(sectionPairs)}`);
console.log(`Part 2 => What is the sum of the priorities of those item types found in each of the three rucksack batches?: ${part2(sectionPairs)}`);
