import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatInputModule, MatOptionModule } from '@angular/material';
import { OwlModule } from 'ngx-owl-carousel';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { CardComponent } from './components/component-card/card';
import { IndexComponent } from './pages/index-page/index-page';
import { LandingComponentComponent } from './pages/landing-page/landing-page';
import { SearchServices } from './services/searchServices';
import { DataService } from './services/dataServices';
import { AuthService } from './services/authService';
import { SearchComponent } from './components/search-component/search.component';
import { GeolocationComponent } from './components/geolocation-component/geolocation-component';

const appRoutes: Routes = [
  { path: 'accueil', component: IndexComponent },
  { path: '',      component: LandingComponentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    IndexComponent,
    LandingComponentComponent,
    SearchComponent,
    GeolocationComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,ReactiveFormsModule, OwlModule,MatAutocompleteModule,MatInputModule,MatOptionModule
  ],
  providers: [DataService, AuthService, SearchServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
