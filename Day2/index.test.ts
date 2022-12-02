import { PART_ONE, PART_TWO,getLoseShape, getWinShape, prepareInput, answer } from './utils';


const mockData = `A Y
B X
C Z`;


describe('Day2', () => {
    test('getLoseShape should return Z if the elf plays Rock (mapped to number 1)', () => {
        const result = getLoseShape(1);

        expect(result).toBe('Z');
    });
    test('getWinShape should return X if the elf plays Scissors (mapped to number 3)', () => {
        const result = getWinShape(3);

        expect(result).toBe('X');
    });

    test('Part 1 => Column 1 is what elf plays, column 2 is what I play', () => {
        const rounds = prepareInput(mockData);

        const totalScore = answer(PART_ONE, rounds);

        expect(totalScore).toBe(15);

    });

    test('Part 2 => Column 1 is what elf plays, column 2 is what the result of the round should be', () => {
        const rounds = prepareInput(mockData);

        const totalScore = answer(PART_TWO, rounds);

        expect(totalScore).toBe(12);
    });
});
