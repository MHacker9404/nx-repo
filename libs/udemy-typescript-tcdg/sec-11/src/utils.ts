export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D',
}

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export const dateStringToDate = (dateString: string): Date => {
    const parts = dateString.split('/').map((value: string): number => parseInt(value));
    return new Date(parts[2], parts[1] - 1, parts[0]);
};
