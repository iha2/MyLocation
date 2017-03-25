import { Component } from '@angular/core';
import { GoogleMapsComponent } from './components/google-maps.component';
@Component({
    selector: 'my-app',
    templateUrl: './app/templates/appTemplate.html' 
})
export class AppComponent {
    title: string = "My Location";

    constructor() {}
}
