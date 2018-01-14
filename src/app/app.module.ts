import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { OwlModule } from 'ngx-owl-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { CardComponent } from './components/component-card/card';
import { IndexComponent } from './pages/accueil/index';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, OwlModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
