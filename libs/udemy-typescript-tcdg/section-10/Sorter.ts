import { Sortable } from './Sortable';

export class Sorter {
    constructor(public collection: Sortable) {}

    public sort(): void {
        const length = this.collection.length;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                const cmp = this.collection.compare(j, j + 1);
                if (cmp) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
