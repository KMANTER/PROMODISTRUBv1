import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatInputModule, MatOptionModule, MatButtonModule,MatCheckboxModule, MatSliderModule } from '@angular/material';
import { OwlModule } from 'ngx-owl-carousel';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { CardComponent } from './components/component-card/card';
import { IndexComponent } from './pages/index-page/index-page';
import { MylistComponent } from './components/mylist-component/mylist-component';
import { LandingComponentComponent } from './pages/landing-page/landing-page';
import { SearchServices } from './services/searchServices';
import { DataService } from './services/dataServices';
import { AuthService } from './services/authService';
import { SearchComponent } from './components/search-component/search.component';
import {FiltersService} from '../app/services/filtersService';
import {MylistServices} from '../app/services/myListService';
import { GeolocationComponent } from './components/geolocation-component/geolocation-component';
import {ItemProductComponent} from './components/item-product-component/item-product-component'
import { productDetailsComponent } from './components/product-details-component/product-details-component'
import { ProductsListComponent } from './components/products-list-component/products-list-component';
import { FiltersComponent } from './components/filters-component/filters-component';
import { SimpleTimer } from 'ng2-simple-timer';

const appRoutes: Routes = [
  { path: '', component: IndexComponent,
  children: [
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: 'accueil', component:  ProductsListComponent},
    { path: 'produit/:id', component: productDetailsComponent },
    { path: 'maListe', component: MylistComponent }
  ] }
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
    GeolocationComponent,
    ItemProductComponent,
    productDetailsComponent,
    ProductsListComponent,
    FiltersComponent,
    MylistComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,ReactiveFormsModule, OwlModule,MatAutocompleteModule,MatInputModule,
    MatOptionModule, MatButtonModule,MatCheckboxModule, MatSliderModule
  ],
  providers: [DataService, AuthService, SearchServices, SimpleTimer, FiltersService, MylistServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
