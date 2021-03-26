import { Sortable } from './Sortable';

export class CharactersCollection implements Sortable {
    constructor(private _data: string) {}

    public get length(): number {
        return this._data.length;
    }

    compare(left: number, right: number): boolean {
        return this._data[left].toLowerCase() > this._data[right].toLowerCase();
        // return this._data[left] < this._data[right];
    }

    swap(left: number, right: number): void {
        const chars = this._data.split('');
        const leftHand = chars[left];
        chars[left] = chars[right];
        chars[right] = leftHand;
        this._data = chars.join('');
    }
}
