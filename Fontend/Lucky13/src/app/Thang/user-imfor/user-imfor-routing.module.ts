import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserImforComponent } from './user-imfor.component';

const routes: Routes = [{ path: '', component: UserImforComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserImforRoutingModule { }
