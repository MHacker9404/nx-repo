import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';
import { LinkedList } from './LinkedList';

const nc = new NumbersCollection([10, 3, -5, 0]);
const ns = new Sorter(nc);

ns.sort();
console.log(ns.collection);

const cc = new CharactersCollection('XaYbZc');
const ss = new Sorter(cc);

ss.sort();
console.log(ss.collection);

const ll = new LinkedList();
ll.add(500);
ll.add(-10);
ll.add(-3);
ll.add(4);
const lls = new Sorter(ll);
lls.sort();
ll.print();
