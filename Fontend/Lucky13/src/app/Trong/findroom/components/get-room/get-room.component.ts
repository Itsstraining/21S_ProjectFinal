
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateRoomComponent } from '../create-room/create-room.component';
import { DialogData } from '../nav-findroom/nav-findroom.component';

@Component({
  selector: 'app-get-room',
  templateUrl: './get-room.component.html',
  styleUrls: ['./get-room.component.scss']
})
export class GetRoomComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {

  }
  rid = ''
  onNoClick(): void {
    this.dialogRef.close();
  }
}