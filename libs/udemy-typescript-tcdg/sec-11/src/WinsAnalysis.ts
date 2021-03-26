import * as _ from 'lodash';
import { Analyzer } from './Summary';
import { MatchData, MatchResult } from './utils';

export class WinsAnalysis implements Analyzer {
    constructor(protected _team: string) {}

    run(matches: MatchData[]): string {
        let wins = 0;
        wins = _.filter(
            matches,
            (match: string[]) =>
                (match[1] === this._team && match[5] === MatchResult.HomeWin) ||
                (match[2] === this._team && match[5] === MatchResult.AwayWin)
        ).length;
        return `${this._team} had ${wins} wins`;
    }
}
