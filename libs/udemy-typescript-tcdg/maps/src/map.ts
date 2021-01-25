/// <reference types="@types/googlemaps" />

interface IMappable {
    location: {
        lat: number;
        lng: number;
    };
}

export class Map {
    private _map: google.maps.Map;
    constructor(_e: HTMLElement) {
        this._map = new google.maps.Map(_e, { zoom: 1, center: { lat: 0, lng: 0 } });
    }

    // public addUserMarker(user: User): void {
    //     new google.maps.Marker({ map: this._map, position: { lat: user.location.lat, lng: user.location.lng } });
    // }

    // public addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({ map: this._map, position: { lat: company.location.lat, lng: company.location.lng } });
    // }

    public addMarker(mappable: IMappable): void {
        new google.maps.Marker({ map: this._map, position: { lat: mappable.location.lat, lng: mappable.location.lng } });
    }
}
