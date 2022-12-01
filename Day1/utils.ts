const sum = (numbers:string[]) => {
    return numbers.reduce((acc:number, num:string) => (acc += Number(num)), 0);
};

export const elvesCalories = (input:string) =>
    input
        .split(/\n\n/gm)
        .reduce((elvesCalories:number[], elf:string) => {
            const cal:number = sum(elf.split(/\n/gm));

            elvesCalories.push(cal);

            return elvesCalories;
        }, [])
        .sort((a, b) => (a > b ? -1 : 1));
