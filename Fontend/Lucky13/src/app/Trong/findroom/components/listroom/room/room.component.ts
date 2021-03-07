import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Rooms } from 'src/app/models/rooms.model';
import { DocumentService } from 'src/app/services/document.service';
import { RoomService } from 'src/app/services/room.service';
import { Room } from '../../../../../models/room.model';
import { CreateRoomComponent } from '../../create-room/create-room.component';
import { JoinRoomComponent } from '../../join-room/join-room.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

];

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  constructor(
    public dialog: MatDialog,
    private documentService: DocumentService,
    private roomService: RoomService,

  ) { }
  @Input()
  room: Rooms;


  ngOnInit(): void {
  }
  animal: string;
  name: string;
  openDialogJoin() {
    const dialogRef = this.dialog.open(JoinRoomComponent, {
      width: '280px',
      data: { name: this.room.roomId, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.documentService.joinRoom(this.room.roomId)
      }
    });
  }

}
