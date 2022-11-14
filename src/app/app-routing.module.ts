import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDataComponent } from './list-data/list-data.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './cart/cart.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { AuthGuard } from './guards/auth.guard';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  {
    path:"",
    component:ListDataComponent,
  },
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"register",
    component:RegisterComponent,
  },

  {
    path:"cart",
    component:CartComponent,
    canActivate:[AuthGuard]

  },
  {
    path:"product/:id",
    component:ProDetailsComponent,

  },
  {
    path:"favorites",
    component:FavoritesComponent,

  },

  {
    path:"**",
    component:NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
