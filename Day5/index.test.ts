import { crateMover9000, crateMover9001, prepareInput } from './utils';

const mockData = `    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

describe('Day5', () => {

    test('Part 1 answer => should return CMZ', () => {
        const { instructions, stacks: stacksForCrateMover9000 } = prepareInput(mockData);

        if(!stacksForCrateMover9000){
            return;
        }

        const topCrates = crateMover9000(stacksForCrateMover9000, instructions)

        expect(topCrates).toBe('CMZ');
    });



    test('Part 2 answer => 4 ranges are overlapping', () => {
        const { instructions, stacks: stacksForCrateMover9001 } = prepareInput(mockData);

        if (!stacksForCrateMover9001) {
            return;
        }

        const topCrates = crateMover9001(stacksForCrateMover9001, instructions);

        expect(topCrates).toBe('MCD');

    });
});
