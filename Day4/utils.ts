export const prepareInput = (input: string): string[] => {
    return input.split('\n');
};



export const rowBuilder = (start: number, end: number): string => {
    let assignmentRangeResolved = '';
    for (let i = start; i < end + 1; i++) {
        assignmentRangeResolved += '-' + i + '-';
    }
    return assignmentRangeResolved;
};

export const part1 = (sectionPairs:string[]):number => {
    let entireOverlapCount = 0;

    sectionPairs.forEach((pairs) => {
        const [first, second] = pairs.split(',');

        let [fStart, fEnd] = first.split('-').map(Number);
        let [sStart, sEnd] = second.split('-').map(Number);

        const range1:string = rowBuilder(fStart, fEnd);
        const range2:string = rowBuilder(sStart, sEnd);

        if (range1.includes(range2) || range2.includes(range1)) {
            entireOverlapCount++;
        }
    });

    return entireOverlapCount;
}

export const part2 = (sectionPairs:string[]): number => {
    let entireOverlapCount = 0;

    sectionPairs.forEach((pairs) => {
        const [first, second] = pairs.split(',');

        let [fStart, fEnd] = first.split('-').map(Number);
        let [sStart, sEnd] = second.split('-').map(Number);

        if (fStart > sStart) {
            [fStart, fEnd, sStart, sEnd] = [sStart, sEnd, fStart, fEnd];
        }

        if (sStart <= fEnd) {
            entireOverlapCount++;
        }
    });

    return entireOverlapCount;
}