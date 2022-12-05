export const prepareInput = (input: string): string[] => {
    return input.split('\n');
};

export const findCommonInThree = (rucksacks: Set<string>[]): string => {
    const rc: string[] = [];
    const [one, two, three] = rucksacks;

    one.forEach((item) => {
        const inTwo = two.has(item);
        const inThree = three.has(item);

        if (inTwo && inThree) {
            rc.push(item);
        }
    });

    return rc[0];
};

export const findCommonInCompartments = (comp1: string[], comp2: string[]) => {
    const rc = [];
    for (let i = 0; i < comp1.length; i++) {
        for (let j = 0; j < comp2.length; j++) {
            if (comp1[i] === comp2[j]) {
                rc.push(comp1[i]);
            }
        }
    }

    return rc[0];
};

export const buildSum = (foundItems: string[]): number => {
    let itemSum: number = 0;

    foundItems.forEach((n: string) => {
        const ref = n.charCodeAt(0);
        if (ref >= 97) {
            itemSum += ref - 96;
        }

        if (ref >= 65 && ref <= 90) {
            itemSum += ref - 64 + 26;
        }
    });

    return itemSum;
};

export const seperateCompartments = (rucksack:string) => {
    const rArr = rucksack.split('');
    return { comp1: rArr.splice(0, rArr.length / 2), comp2: rArr };
}

export const part1 = (rucksacks: string[]): number => {
    const rucksacksCompartments = rucksacks.map(seperateCompartments);

    const itemsCompartments: string[] = [];
    rucksacksCompartments.forEach(({ comp1, comp2 }) => itemsCompartments.push(findCommonInCompartments(comp1, comp2)));

    return buildSum(itemsCompartments);
};

export const part2 = (rucksacks: string[]): number => {
    const itemsThreeRucksackBatch: string[] = [];
    for (let i = 0; i < rucksacks.length; i += 3) {
        itemsThreeRucksackBatch.push(findCommonInThree([new Set(rucksacks[i]), new Set(rucksacks[i + 1]), new Set(rucksacks[i + 2])]));
    }

    return buildSum(itemsThreeRucksackBatch);
};
