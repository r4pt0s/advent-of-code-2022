export const prepareInput = (input: string) => {

    const [stackStr, instructions] = input.split('\n\n');

    const crateLines:string[] = stackStr.split('\n').reverse() ?? [];


    const temp = crateLines.shift()?.trimEnd();

    if(!temp){
        return {instructions: null, stacks: null};
    }

    const finalStackCount = Number(temp[temp.length - 1]);


    const stacks = new Array(finalStackCount - 1);

    return {
        instructions,
        stacks: buildStacksWithCrates(stacks, crateLines)
    };
};

const buildStacksWithCrates = (stacks:Array<string[]>, crateLines: Array<string>) => {

    for (let i = 0; i < crateLines.length; i++) {
        const withReplacedMissingCrates = crateLines[i].replaceAll(/(\s{4})/gm, ' [-] ');
        const prepareWithReplacedMissingCrates = withReplacedMissingCrates
            .trimStart()
            .trimEnd()
            .replaceAll(/(\s{2})/gm, ' ');

        const crates = prepareWithReplacedMissingCrates.split(' ');

        for (let j = 0; j < crates.length; j++) {
            if (crates[j] !== '[-]') {
                if (stacks[j]) {
                    stacks[j].push(crates[j]);
                } else {
                    stacks[j] = [crates[j]];
                }
            }
        }
    }

    return stacks;
}

export const getInstructionNumbers = (instruction:string) => {
    const [, moveCount, , from, , to] = instruction.split(' ').map(Number);
    let keepMoveXTimes = moveCount;

    return{
        keepMoveXTimes,
        from,
        to
    }
}

export const getTopCrates = (stacks:Array<string[]>) => {

    return stacks.map((stack) => stack.at(-1));
}

export const crateMover9000 = (stacks: Array<string[]>, instructions: string) => {
    for (let instruction of instructions.split('\n')) {
        let { keepMoveXTimes, from, to } = getInstructionNumbers(instruction);

        while (keepMoveXTimes) {
            const crateToMove: string | undefined = stacks[from - 1].pop();

            if (!crateToMove) {
                continue;
            }

            stacks[to - 1].push(crateToMove);
            keepMoveXTimes--;
        }
    }

    return getTopCrates(stacks)
        .join('')
        .replaceAll(/[\[\]]/gm, '');
};

export const crateMover9001 = (stacks: Array<string[]>, instructions: string) => {
    for (let instruction of instructions.split('\n')) {
        let { keepMoveXTimes, from, to } = getInstructionNumbers(instruction);
        const cratesToMove: string[] = [];

        while (keepMoveXTimes) {
            const crateToMove = stacks[from - 1].pop();

            if (!crateToMove) {
                continue;
            }

            cratesToMove.push(crateToMove);
            keepMoveXTimes--;
        }

        if (!cratesToMove) {
            continue;
        }

        stacks[to - 1].push(...cratesToMove.reverse());
    }

    return getTopCrates(stacks)
        .join('')
        .replaceAll(/[\[\]]/gm, '');
};
