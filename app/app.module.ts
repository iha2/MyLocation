import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FacebookComponent } from './components/facebook-login.component';
import { HttpModule } from '@angular/http';
import { FacebookService } from 'ng2-facebook-sdk';
import { GoogleMapsComponent } from './components/google-maps.component';
import { SidebarComponent } from './components/sidebar.component'; 
import { FooterComponent } from './components/footer.component'; 

@NgModule({
  imports: [ BrowserModule, HttpModule],
  declarations: [ AppComponent,
                  FacebookComponent,
                  GoogleMapsComponent,
                  SidebarComponent,
                  FooterComponent],
  bootstrap: [ AppComponent ],
  providers: [FacebookService]
})
export class AppModule { }
