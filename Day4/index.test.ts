import {
    part1,
    part2,
    rowBuilder,
    prepareInput
} from './utils';

const mockData = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const sectionPairs = prepareInput(mockData);

describe('Day4', () => {

    test('rowbuilder should return -5--6--7--8--9-', () => {
        const result = rowBuilder(5,9);

        expect(result).toBe('-5--6--7--8--9-');
    });
    test('Part 1 answer => 2 ranges are entirely contained by the other range', () => {
        const containedByTheOtherRange = part1(sectionPairs);

        expect(containedByTheOtherRange).toBe(2);
    });



    test('Part 2 answer => 4 ranges are overlapping', () => {
        const overLappedByOtherRange = part2(sectionPairs);

        expect(overLappedByOtherRange).toBe(4);
    });
});
