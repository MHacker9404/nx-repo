import * as _ from 'lodash';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './utils';

const reader = new CsvFileReader('football.csv');
reader.read();
const matches = _.cloneDeep(reader.data);
console.log(matches[0]);

let manUnitedWins = 0;
manUnitedWins = _.filter(
    matches,
    (match: string[]) =>
        (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
        (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
).length;
console.log(`ManU has won ${manUnitedWins} games`);
