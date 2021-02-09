import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const collection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(collection);

sorter.sort();
console.log(sorter.collection);
