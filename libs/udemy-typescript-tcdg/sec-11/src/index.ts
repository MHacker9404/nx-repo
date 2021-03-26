import { ConsoleReport } from './ConsoleReport';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './WinsAnalysis';

const csvReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();
console.log(matchReader.matches[0]);
const analyzer = new WinsAnalysis('Man United');
const target = new ConsoleReport();
const summary = new Summary(analyzer, target);
summary.buildAndPrintReport(matchReader.matches);
