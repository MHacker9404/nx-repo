import * as fs from 'fs';
import { DataReader } from './DataReader';
export class CsvFileReader implements DataReader {
    data: string[][] = [];
    constructor(protected fileName: string) {}

    read(): void {
        this.data = fs
            .readFileSync(this.fileName, {
                encoding: 'utf-8',
            })
            .split('\n')
            .map((match: string): string[] => match.split(','));
    }
}
