import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { OwlModule } from 'ngx-owl-carousel';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { CardComponent } from './components/component-card/card';
import { IndexComponent } from './pages/accueil/index';
import { AuthService } from './services/auth.service';
import { LandingComponentComponent } from './landing-component/landing-component.component';

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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule, MatButtonModule, OwlModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
