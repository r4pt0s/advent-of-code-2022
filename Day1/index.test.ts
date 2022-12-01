import { elvesCalories } from './utils';

const mockData = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

describe('Day1', () => {
    test('Part 1 => Find the elf with the most calories in the bag', () => {
        const [first] = elvesCalories(mockData);

        expect(first).toBe(24000);
    });

    test('Part 2 => Find the sum of calories from the top 3', () => {
        const [first, second, third] = elvesCalories(mockData);
        const sumOfThree = first + second + third;

        expect(first).toBe(24000);
        expect(second).toBe(11000);
        expect(third).toBe(10000);
        expect(sumOfThree).toBe(45000);
    });
});
