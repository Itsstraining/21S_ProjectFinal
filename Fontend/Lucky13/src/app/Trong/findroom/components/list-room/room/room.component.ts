import { Component, Input, OnInit } from '@angular/core';
import { Rooms } from 'src/app/models/rooms.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  @Input()
  room: Rooms
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.room)
  }
  cac() {
    console.log(this.room)
  }

}
