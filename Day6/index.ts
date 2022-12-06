import {prepareInput, startOfMessageType} from './utils';
import {START_OF_PACKET, START_OF_MESSAGE} from './constants';


const input = prepareInput('input.txt');

console.log(
    `Part 1 => How many characters need to be processed before the first start-of-packet marker is detected?: ${startOfMessageType(START_OF_PACKET, input)}`
);
console.log(
    `Part 2 => How many characters need to be processed before the first start-of-message marker is detected?: ${startOfMessageType(
        START_OF_MESSAGE,
        input
    )}`
);
