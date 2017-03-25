import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FacebookService, FacebookLoginResponse, FacebookInitParams } from 'ng2-facebook-sdk';
import { Login } from './login';
import { GoogleMapsComponent } from './google-maps.component';

@Component({
    selector: 'facebook-login',
    templateUrl: './app/templates/loginTemplate.html',
    providers: [FacebookService, GoogleMapsComponent]
})
 
export class FacebookComponent implements Login, OnInit {
    showLogin: boolean = true;
    constructor(private fb: FacebookService, private http: HttpModule, private googleMaps: GoogleMapsComponent) {
        let fbParams: FacebookInitParams = {
            appId: '1367701316628350',
            xfbml: true,
            version: 'v2.8',
            cookie: true
        }
        this.fb.init(fbParams);
    }

    ngOnInit() {
        if (this.fb.getLoginStatus()) {
            this.showLogin = !this.showLogin;
            this.initializeMaps();
        }
    }

    loginUser(): void {
        this.fb.login({
            return_scopes: true, // returns the scopes that the user authorized
            scope: 'public_profile,email,user_friends' 
        }).then( (response: FacebookLoginResponse) => {
            this.showLogin = false;
            this.initializeMaps();
        },
        (error: any) => console.error(error))
    }

    initializeMaps(): void {
        this.googleMaps.showMap = true;
        this.googleMaps.initializeMap();
    }
}