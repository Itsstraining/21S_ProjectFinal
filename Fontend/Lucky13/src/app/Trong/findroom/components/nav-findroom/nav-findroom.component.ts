import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { from } from 'rxjs';
import { DocumentService } from 'src/app/services/document.service';
import { CreateRoomComponent } from '../create-room/create-room.component'
import { GetRoomComponent } from '../get-room/get-room.component';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */

@Component({
  selector: 'app-nav-findroom',
  templateUrl: './nav-findroom.component.html',
  styleUrls: ['./nav-findroom.component.scss']
})
export class NavFindroomComponent {

  animal: string;
  name: string;

  constructor(
    public dialog: MatDialog,
    private documentService: DocumentService

  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateRoomComponent, {
      width: '280',
      // id: 'dialogOpen',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.documentService.createRoom(result)
      }
    });
  }
  openDialogJoin() {
    const dialogRef = this.dialog.open(GetRoomComponent, {
      width: '280',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.documentService.joinRoom(result)
      }
    });
  }
}