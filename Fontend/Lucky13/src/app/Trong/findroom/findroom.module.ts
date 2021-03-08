import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FindroomRoutingModule } from './findroom-routing.module';
import { FindroomComponent } from './findroom.component';
import { NavFindroomComponent } from './components/nav-findroom/nav-findroom.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table';
import { RoomComponent } from './components/list-room/room/room.component';
import { UserComponent } from './components/user/user.component';
import { MatButtonModule } from '@angular/material/button';
import { ListRoomComponent } from './components/list-room/list-room.component';
import { MatRippleModule } from '@angular/material/core';
import { JoinRoomComponent } from './components/join-room/join-room.component';
import { NgModule } from '@angular/core';
import { GetRoomComponent } from './components/get-room/get-room.component';



@NgModule({
  declarations: [
    CreateRoomComponent,
    FindroomComponent,
    NavFindroomComponent,
    RoomComponent,
    UserComponent,
    ListRoomComponent,
    JoinRoomComponent,
    GetRoomComponent,
  ],
  imports: [
    CommonModule,
    FindroomRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
  ],
})
export class FindroomModule { }
