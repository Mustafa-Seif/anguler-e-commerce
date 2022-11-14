// MODULES 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
// COMPONENTS 
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListDataComponent } from './list-data/list-data.component';
import { CardListComponent } from './card-list/card-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './cart/cart.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { favoritesReducer } from './store/favorites/favorites.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FavoritesComponent } from './favorites/favorites.component';
import { productsReducer } from './store/products/product.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListDataComponent,
    CardListComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    CartComponent,
    ProDetailsComponent,
    LoaderComponent,
    FavoritesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    AuthModule,
    SharedModule,
    StoreModule.forRoot({
      favoritesPro:favoritesReducer,
      products:productsReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
