import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { ProductsComponent } from './home/products/products.component';
import { DealsComponent } from './home/deals/deals.component';
import { AboutComponent } from './home/about/about.component';

const routes: Routes = [
  {
    path : 'app-login',
    component : LoginComponent
  },
  {
    path : 'home',
    component : HomeComponent,
    children : [
      {path: 'app-products', component: ProductsComponent },
      {path: 'app-deals' , component: DealsComponent},
      {path: 'app-about', component: AboutComponent}
    ]
  },

  {
  path: '',
  pathMatch : 'full',
  redirectTo : 'app-login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
