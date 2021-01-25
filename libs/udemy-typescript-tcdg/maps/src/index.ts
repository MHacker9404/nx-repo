/// <reference types="@types/googlemaps" />

import { User } from './user'; // explicit export
import color from './user'; // default export
import { Company } from './company';
import { Map } from './map';

console.log(color);
const user = new User();
console.log(user);
const company = new Company();
console.log(company);

const map = new Map(document.getElementById('map'));
map.addMarker(user);
map.addMarker(company);
