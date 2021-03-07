import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLoginRoutingModule } from './home-login-routing.module';
import { HomeLoginComponent } from './home-login.component';
import { NavbarLoginComponent } from './components/navbar-login/navbar-login.component';
import { NavTopModule } from 'src/app/ShareComponent/nav-top/nav-top.module';

@NgModule({
  declarations: [HomeLoginComponent, NavbarLoginComponent],
  imports: [
    CommonModule,
    HomeLoginRoutingModule,
    NavTopModule
  ]
})
export class HomeLoginModule { }
