import { readFileSync } from 'fs';
import { exit } from 'process';
import { prepareInput, crateMover9000, crateMover9001 } from './utils';

const input = readFileSync(`${__dirname}/input.txt`, { encoding: 'utf8', flag: 'r' });

const { instructions, stacks: stacksForCrateMover9000 } = prepareInput(input);

if (!instructions && !stacksForCrateMover9000?.length) {
    console.log('wrong iput');
    exit(1);
}

console.log(
    `Part 1 => In how many assignment pairs does one range fully contain the other??: ${crateMover9000(stacksForCrateMover9000, instructions)}`
);

const { stacks: stacksForCrateMover9001 } = prepareInput(input);

if (!stacksForCrateMover9001?.length) {
    console.log('wrong iput');
    exit(1);
}

console.log(
    `Part 2 => What is the sum of the priorities of those item types found in each of the three rucksack batches?: ${crateMover9001(
        stacksForCrateMover9001,
        instructions
    )}`
);