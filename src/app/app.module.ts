import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { CardComponent } from './components/component-card/card';
import { IndexComponent } from './pages/accueil/index';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { DataService } from './services/dataServices';
import { AuthService } from './services/authService';

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
    LandingComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,ReactiveFormsModule, OwlModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
