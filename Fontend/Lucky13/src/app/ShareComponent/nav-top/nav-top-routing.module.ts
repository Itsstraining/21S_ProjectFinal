import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavTopComponent } from './nav-top.component';

const routes: Routes = [{ path: '', component: NavTopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavTopRoutingModule { }
