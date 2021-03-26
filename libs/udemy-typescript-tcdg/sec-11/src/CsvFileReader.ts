import * as fs from 'fs';
import { dateStringToDate, MatchData, MatchResult } from './utils';
export class CsvFileReader {
    data: MatchData[] = [];
    constructor(protected fileName: string) {}

    read(): void {
        this.data = fs
            .readFileSync(this.fileName, {
                encoding: 'utf-8',
            })
            .split('\n')
            .map((match: string): string[] => match.split(','))
            .map(
                (row: string[]): MatchData => [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6],
                ]
            );
    }
}
