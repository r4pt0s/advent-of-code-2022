import {
    prepareInput,
    findCommonInCompartments,
    seperateCompartments,
    findCommonInThree,
    buildSum,
    part1,
    part2
} from './utils';

const mockData = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const rucksacks = prepareInput(mockData);

describe('Day3', () => {
    test('first rucksack should contain lowercase p as common compartment', () => {
        const { comp1, comp2 } = seperateCompartments(rucksacks[0]);
        const commonItem = findCommonInCompartments(comp1, comp2);
        expect(commonItem).toBe('p');
    });
    test('Second rucksack should contain uppercase L as common compartment', () => {
        const { comp1, comp2 } = seperateCompartments(rucksacks[1]);
        const commonItem = findCommonInCompartments(comp1, comp2);
        expect(commonItem).toBe('L');
    });

    test('Third rucksack should contain uppercase P as common compartment', () => {
        const { comp1, comp2 } = seperateCompartments(rucksacks[2]);
        const commonItem = findCommonInCompartments(comp1, comp2);
        expect(commonItem).toBe('P');
    });

    test('Third rucksack should contain lowercase v as common compartment', () => {
        const { comp1, comp2 } = seperateCompartments(rucksacks[3]);
        const commonItem = findCommonInCompartments(comp1, comp2);
        expect(commonItem).toBe('v');
    });

    test('Third rucksack should contain lowercase t as common compartment', () => {
        const { comp1, comp2 } = seperateCompartments(rucksacks[4]);
        const commonItem = findCommonInCompartments(comp1, comp2);
        expect(commonItem).toBe('t');
    });

    test('Third rucksack should contain lowercase s as common compartment', () => {
        const { comp1, comp2 } = seperateCompartments(rucksacks[5]);
        const commonItem = findCommonInCompartments(comp1, comp2);
        expect(commonItem).toBe('s');
    });


    test('Build sum function should recalulate the ascii value of letter a to value 1 from 97', () => {
        const letterAValue = buildSum(['a']);

        expect(letterAValue).toBe(1);
    });

    test('Build sum function should recalulate the ascii value of letter A to value 27 from 65', () => {
        const letterAValue = buildSum(['A']);

        expect(letterAValue).toBe(27);
    });

    test('Part 1 answer => 157', () => {
        const answer = part1(rucksacks);
        expect(answer).toBe(157);
    });

    test('First batch of three rucksacks should have the badge lowercase r', () => {
        const badge = findCommonInThree([new Set(rucksacks[0]), new Set(rucksacks[1]), new Set(rucksacks[2])]);
        expect(badge).toBe('r');
    });

    test('Second batch of three rucksacks should have the badge uppercase Z', () => {
        const badge = findCommonInThree([new Set(rucksacks[3]), new Set(rucksacks[4]), new Set(rucksacks[5])]);
        expect(badge).toBe('Z');
    });

    test('Part 2 answer => 70', () => {
        const answer = part2(rucksacks);
        expect(answer).toBe(70);
    });
});
