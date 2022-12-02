import { readFileSync } from 'fs';
import { prepareInput, answer, PART_ONE, PART_TWO } from './utils';

const input = readFileSync(`${__dirname}/input.txt`, { encoding: 'utf8', flag: 'r' });
const rounds: string[] = prepareInput(input);


console.log(`Part 1 => My Score: ${answer(PART_ONE, rounds)}`);
console.log(`Part 2 => My Score: ${answer(PART_TWO, rounds)}`);
