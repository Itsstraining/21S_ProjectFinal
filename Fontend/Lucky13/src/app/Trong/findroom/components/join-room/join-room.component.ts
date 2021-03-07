import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocumentService } from 'src/app/services/document.service';
import { DialogData } from '../nav-findroom/nav-findroom.component';


@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent {

  constructor(
    public dialogRef: MatDialogRef<JoinRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {

  }
  rid = ''
  onNoClick(): void {
    this.dialogRef.close();
  }
}