import { Sortable } from './Sortable';

export class NumbersCollection implements Sortable {
    constructor(private _data: number[]) {}

    public get data(): number[] {
        return this._data;
    }

    public get length(): number {
        return this._data.length;
    }

    public compare(left: number, right: number): boolean {
        return this._data[left] > this._data[right];
    }

    public swap(leftIndex: number, rightIndex: number): void {
        const tmp = this._data[leftIndex];
        this._data[leftIndex] = this._data[rightIndex];
        this._data[rightIndex] = tmp;
    }
}
