import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserImforRoutingModule } from './user-imfor-routing.module';
import { UserImforComponent } from './user-imfor.component';


@NgModule({
  declarations: [UserImforComponent],
  imports: [
    CommonModule,
    UserImforRoutingModule
  ]
})
export class UserImforModule { }
