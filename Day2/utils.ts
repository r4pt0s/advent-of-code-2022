/*
    A and X => Rock => 1
    B and Y => Paper=> 2
    C and Z => Scissor=> 3
*/

interface PlayerHands {
    [index:string]: number;
}


export const elfHand: PlayerHands = {
    A: 1,
    B: 2,
    C: 3,
};

export const myHand: PlayerHands = {
    X: 1,
    Y: 2,
    Z: 3,
};

export const PART_ONE = 'part_one';
export const PART_TWO = 'part_two';

export const prepareInput = (input:string): string[] => {
    return input.split('\n');
}

export const getWinShape = (elfPlayed: number): string | null => {
    let winShape = null;
    switch (elfPlayed) {
        case 1:
            winShape = 'Y';
            break;
        case 2:
            winShape = 'Z';
            break;
        case 3:
            winShape = 'X';
            break;
        default:
            winShape = null;
    }

    return winShape;
};

export const getLoseShape = (elfPlayed: number): string | null => {
    let loseShape = null;
    switch (elfPlayed) {
        case 1:
            loseShape = 'Z';
            break;
        case 2:
            loseShape = 'X';
            break;
        case 3:
            loseShape = 'Y';
            break;
        default:
            loseShape = null;
    }

    return loseShape;
};

export const mapMove = (elfMoveScore:number, myMove:string): number|null => {

    let moveScore = null;

    switch (myMove) {
        case 'X':
            const loseShape = getLoseShape(elfMoveScore);
            moveScore = loseShape ? myHand[loseShape] : null;
            break;
        case 'Y':
            moveScore = elfMoveScore;
            break;
        case 'Z':
            const winShape = getWinShape(elfMoveScore);
            moveScore = winShape ? myHand[winShape] : null;
            break;
        default:
            moveScore = null;
    }

    return moveScore;
}


export const answer = (part: string, rounds:string[]):number => {

    let points: number = 0;

    for (let round of rounds) {
        const [elfMove, myMove]: string[] = round.split(' ');

        const elfMoveScore: number = elfHand[elfMove];
        let myMoveScore: number | null = null;

        switch(part){
            case PART_ONE:
                myMoveScore = myHand[myMove];
                break;
            case PART_TWO:
                myMoveScore = mapMove(elfMoveScore, myMove);
                break;
            default:
                myMoveScore = null;
        }

        if (!myMoveScore) {
            continue;
        }

        points += myMoveScore;

        if (elfMoveScore === myMoveScore) {
            points += 3;
            continue;
        }

        const calculatedResult = (elfMoveScore+1) > 3 ? 1 : elfMoveScore+1;

        if (calculatedResult === myMoveScore) {
            points += 6;
            continue;
        }
    }

    return points;
}