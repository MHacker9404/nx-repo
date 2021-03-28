import axios, { AxiosResponse } from 'axios';

export interface UserProps {
    [key: string]: string | number;
    id?: number;
}
export type Callback = () => void;

export class User {
    private _events: { [key: string]: Callback[] } = {};

    constructor(private _data: UserProps) {}
    public get(propName: string): string | number {
        return this._data[propName];
    }
    public set(props: UserProps): void {
        this._data = { ...this._data, ...props };
    }
    public on(eventName: string, callback: Callback): void {
        this._events[eventName] = [...(this._events[eventName] || []), callback];
    }
    public trigger(eventName: string): void {
        const handlers: Callback[] = this._events[eventName] || [];
        handlers.forEach((handler: Callback) => handler());
    }
    public fetch(): void {
        axios
            .get(`http://localhost:5000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => this.set(response.data))
            .catch((error: any) => console.error(error));
    }
}
