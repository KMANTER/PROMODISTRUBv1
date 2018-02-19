import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatInputModule, MatOptionModule, MatButtonModule,MatCheckboxModule, MatSliderModule } from '@angular/material';
import { OwlModule } from 'ngx-owl-carousel';
import { RouterModule, Routes, CanActivate  } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { CardComponent } from './components/component-card/card';
import { IndexComponent } from './pages/index-page/index-page';
import { UnderConstructionPage } from './pages/under-construction-page/under-construction-page';
import { MylistComponent } from './components/mylist-component/mylist-component';
import { LandingComponentComponent } from './pages/landing-page/landing-page';
import { SearchServices } from './services/searchServices';
import { DataService } from './services/dataServices';
import { AuthService } from './services/authService';
import { SearchComponent } from './components/search-component/search.component';
import { FiltersService } from '../app/services/filtersService';
import { MylistServices } from '../app/services/myListService';
import { AssetsServices } from '../app/services/assetsServices';
import { GeolocationComponent } from './components/geolocation-component/geolocation-component';
import { ItemProductComponent } from './components/item-product-component/item-product-component'
import { productDetailsComponent } from './components/product-details-component/product-details-component'
import { ProductsListComponent } from './components/products-list-component/products-list-component';
import { FiltersComponent } from './components/filters-component/filters-component';
import { SimpleTimer } from 'ng2-simple-timer';
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { MatSelectModule } from '@angular/material/select';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { CanActivateRouteGuard } from '../app/services/can-activate-route.guard';

const appRoutes: Routes = [
  { path: 'accueil', component: IndexComponent, canActivate: [CanActivateRouteGuard],
  children: [
    { path: '', component:  ProductsListComponent},
    { path: 'produit/:id', component: productDetailsComponent},
    { path: 'maListe', component: MylistComponent }
  ] },
  { path: '', component: UnderConstructionPage }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    IndexComponent,
    UnderConstructionPage,
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
    BrowserModule,BrowserAnimationsModule, ToastModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,ReactiveFormsModule, OwlModule,MatAutocompleteModule,MatInputModule,
    MatOptionModule, MatButtonModule,MatCheckboxModule, MatSliderModule, Ng2OrderModule, MatSelectModule 
  ],
  providers: [DataService, AuthService, CanActivateRouteGuard, SearchServices, SimpleTimer, FiltersService, MylistServices, AssetsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
