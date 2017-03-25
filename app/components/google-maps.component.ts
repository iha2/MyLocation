import { Component, NgZone, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { HttpModule } from '@angular/http';
import { FacebookService, FacebookLoginResponse, FacebookInitParams } from 'ng2-facebook-sdk';
declare var google: any;

@Component({
    selector: 'google-maps',
    templateUrl: './app/templates/mapTemplate.html'
})

export class GoogleMapsComponent {
    showMap: boolean = false;
    lat: number = 0;
    lng: number = 0;

    constructor(private _ngZone: NgZone) {}

    initializeMap() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                var pos: Position = new Position(position.coords.latitude, position.coords.longitude);
                this.lat = pos.lat;
                this.lng = pos.lng;

                var mapProp = {
                    center: new google.maps.LatLng(this.lat, this.lng),
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(document.getElementById("googleMaps"), mapProp);

                var marker = new google.maps.Marker({
                  position: pos,
                  map: map
                });
            }) 
        }
    }

}


export class Position {
    constructor(public lat: number, public lng: number) {}
}


