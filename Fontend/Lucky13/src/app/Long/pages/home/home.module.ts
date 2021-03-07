import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavTopModule } from 'src/app/ShareComponent/nav-top/nav-top.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [HomeComponent, NavBarComponent, CarouselComponent, FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavTopModule
    // BrowserAnimationsModule,
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
