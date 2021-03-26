import { DataReader } from './DataReader';
import { dateStringToDate, MatchData, MatchResult } from './utils';

export class MatchReader {
    public matches: MatchData[] = [];

    constructor(private dataReader: DataReader) {}
    load(): void {
        this.dataReader.read();
        this.matches = this.dataReader.data.map((d) => this.mapRow(d));
    }

    private mapRow(row: string[]): MatchData {
        return [dateStringToDate(row[0]), row[1], row[2], parseInt(row[3]), parseInt(row[4]), row[5] as MatchResult, row[6]];
    }
}
