import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutusComponent } from './aboutus.component';
import { NavTopModule } from 'src/app/ShareComponent/nav-top/nav-top.module';
import { AboutUsfooterComponent } from './components/about-usfooter/about-usfooter.component';




@NgModule({
  declarations: [AboutusComponent, AboutUsfooterComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    NavTopModule
  ]
})
export class AboutusModule { }
