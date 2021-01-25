/// <reference types="@types/faker" />

import faker from 'faker';

export class Company {
    public name: string;
    public catchPhrase: string;
    public location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = { lat: +faker.address.latitude(), lng: parseFloat(faker.address.longitude()) };
    }
}
