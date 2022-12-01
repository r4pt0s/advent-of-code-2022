const sum = (numbers:string[]) => {
    return numbers.reduce((acc:number, num:string) => (acc += Number(num)), 0);
};

export const elvesCalories = (input:string) =>
    input
        .split(/\n\n/gm)
        .reduce((high:number[], elf:string) => {
            const cal:number = sum(elf.split(/\n/gm));

            high.push(cal);

            return high;
        }, [])
        .sort((a, b) => (a > b ? -1 : 1));
