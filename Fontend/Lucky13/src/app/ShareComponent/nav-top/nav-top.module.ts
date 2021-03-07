import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavTopRoutingModule } from './nav-top-routing.module';
import { NavTopComponent } from './nav-top.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavTopComponent],
  imports: [
    CommonModule,
    NavTopRoutingModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    NavTopComponent
  ]
})
export class NavTopModule { }
