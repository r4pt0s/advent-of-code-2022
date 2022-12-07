import { prepareInput, buildTree, buildSum, findLowest, Directory } from './utils';

const terminalOutputLns = prepareInput('./input.txt');
const directories:Directory = buildTree(terminalOutputLns);


console.log(`Part 1 => What is the sum of the total sizes of those directories??: ${buildSum(directories)}`);

console.log(
    `Part 2 => What is the total size of that directory?: ${findLowest(directories)}`,

);
