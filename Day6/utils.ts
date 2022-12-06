import { readFileSync } from 'fs';
import {join} from 'path';

interface CharMap {
    [index: string]: boolean;
}


export const prepareInput = (path: string) => {
    return readFileSync(join(__dirname, path), { encoding: 'utf8', flag: 'r' });
};


export const startOfMessageType = (messageLength: number, input: string): number => {
    let found: boolean = false;

    let charMap: CharMap = {};
    let pointer: number = 0;

    while (!found) {
        if (!input[pointer]) {
            pointer = 0;
        }
        let currChar = input[pointer];

        if (!charMap[currChar]) {
            charMap[currChar] = true;

            if (Object.keys(charMap).length === messageLength) {
                found = true;
            }
            pointer++;
        } else {
            pointer = pointer - Object.keys(charMap).length + 1;
            charMap = {};
        }
    }

    const result = Object.keys(charMap).join('');

    return input.indexOf(result) + result.length;
};