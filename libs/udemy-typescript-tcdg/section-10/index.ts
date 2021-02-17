import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';

const nc = new NumbersCollection([10, 3, -5, 0]);
const ns = new Sorter(nc);

ns.sort();
console.log(ns.collection);

const cc = new CharactersCollection('XaYbZc');
const ss = new Sorter(cc);

ss.sort();
console.log(ss.collection);
