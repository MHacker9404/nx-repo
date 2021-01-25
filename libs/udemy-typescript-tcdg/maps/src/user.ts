/// <reference types="@types/faker" />

import faker from 'faker';

export default 'red';

export class User {
    public name: string;
    public location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name = faker.name.firstName();
        this.location = { lat: +faker.address.latitude(), lng: parseFloat(faker.address.longitude()) };
    }
}
