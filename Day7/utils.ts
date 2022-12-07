import { readFileSync } from 'fs';
import {join} from 'path';
import { COMMAND_MARKER, MAX_FILE_SIZE_AMOUNT, MAX_SPACE_AVAILABLE, MAX_SPACE_NEEDED } from './constants';


export type Directory= {
    [name:string]: number
}

export const prepareInput = (path: string) => {

    const input = readFileSync(join(__dirname, path), { encoding: 'utf8', flag: 'r' });

    return input.split("\n");
};

export const buildTree = (terminalOutputLns:string[]) => {
    const directories: Directory = {};

    let currentPath = '';
    let nextCommand = false;

    terminalOutputLns.push('$ cd /');

    for (let line of terminalOutputLns) {
        const [tokenOne, tokenTwo, tokenThree] = line.split(' ');

        if (tokenOne === COMMAND_MARKER) {
            switch (tokenTwo) {
                case 'cd':
                    if (tokenThree == '..') {
                        const temp = currentPath.split('_');
                        const currentDirectoryFileSize = directories[currentPath];

                        temp.pop();

                        if (temp.pop() == '/') {
                            temp.unshift('/', '');
                        }
                        currentPath = temp.join('_') + '_';
                        directories[currentPath] += currentDirectoryFileSize;
                        break;
                    }

                    if (tokenThree === '/' && currentPath !== '') {
                        const currentDirectoryFileSize = directories[currentPath];
                        currentPath = '/_';
                        directories[currentPath] += currentDirectoryFileSize;
                    }

                    currentPath += tokenThree + '_';
                    directories[currentPath] = 0;
                    nextCommand = false;
                    break;
                case 'ls':
                    nextCommand = true;
                    break;
            }
            continue;
        }
        if (nextCommand) {
            if (tokenOne !== 'dir') {
                directories[currentPath] += Number(tokenOne);
            }
        }
    }

    delete directories['/_/_'];

    return directories;

}

export const buildSum = (directories:Directory) => {

    return Object.values(directories)
        .filter((fileSize: number) => fileSize < MAX_FILE_SIZE_AMOUNT)
        .reduce((total: number, fileSize: number) => (total += fileSize), 0);
}

export const findLowest = (directories:Directory) => {
    const unusedSpace = MAX_SPACE_AVAILABLE - directories['/_'];

    const filteredDirectories = Object.entries(directories)
        .filter(([dir, _]) => dir !== '/_')
        .map(([dir, fileSize]) => ({ dir, fileSize, newUnused: unusedSpace + fileSize }));

    return filteredDirectories.filter((a) => a.fileSize > Math.abs(unusedSpace - MAX_SPACE_NEEDED)).sort((a, b) => a.fileSize - b.fileSize)[0].fileSize;
}
