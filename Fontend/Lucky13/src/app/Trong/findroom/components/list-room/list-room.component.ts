import { Component, OnInit } from '@angular/core';
import { Rooms } from 'src/app/models/rooms.model';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.scss']
})
export class ListRoomComponent implements OnInit {
  rooms: Array<Rooms>
  roomView = []
  constructor() {
    let roomTemp = new Rooms()
    this.rooms = new Array<Rooms>()
    this.rooms = [
      { coin: 123000, name: '', playerNum: 1, roomId: '131' },
      { coin: 76000, name: '', playerNum: 3, roomId: '786' },
      { coin: 78000, name: '', playerNum: 2, roomId: '453' },
      { coin: 452000, name: '', playerNum: 4, roomId: '384' },
      { coin: 3000, name: '', playerNum: 4, roomId: '715' },
      { coin: 34000, name: '', playerNum: 3, roomId: '407' },
      { coin: 75000, name: '', playerNum: 1, roomId: '450' },
      { coin: 782000, name: '', playerNum: 1, roomId: '834' },
      { coin: 40000, name: '', playerNum: 4, roomId: '506' },
      { coin: 9000, name: '', playerNum: 3, roomId: '907' },
      { coin: 7500, name: '', playerNum: 4, roomId: '767' },
      { coin: 7800, name: '', playerNum: 3, roomId: '467' },
      { coin: 12700, name: '', playerNum: 2, roomId: '445' },
      { coin: 7800, name: '', playerNum: 2, roomId: '733' },

    ]
    let lengthRooms
    if (this.rooms.length % 4 == 0)
      lengthRooms = this.rooms.length / 4
    else
      lengthRooms = Math.floor(this.rooms.length / 4) + 1

    for (let i = 0; i < lengthRooms - 1; i++) {
      this.roomView.push(this.rooms.splice(0, 4))
    }//rooms con` lai nhung phan tu cuoi
    console.log(this.roomView)
    console.log(this.rooms)

  }

  ngOnInit(): void {
  }

}
