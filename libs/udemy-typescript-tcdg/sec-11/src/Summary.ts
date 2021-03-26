import { MatchData } from './utils';

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(protected _analyzer: Analyzer, protected _target: OutputTarget) {}
    buildAndPrintReport(matches: MatchData[]): void {
        const analysis = this._analyzer.run(matches);
        this._target.print(analysis);
    }
}
