import { Injectable } from '@angular/core';
import { Card } from '../models/card.model'
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  constructor(public socket: Socket) { }
  User = new User
  Room = new Room
  roomId = ""
  isPlaying = false
  cardCheck = false
  cardsOfUser = []///Bài hiện tại của người chơi.
  cardsViews = []//Tất cả bài đã đánh trong một vòng.
  cardViewTemp = []//Bài người chơi chọn.
  takCards = [] //Bài được gợi ý cho người chơi.
  inTurn = false;
  quitTurn = false;
  result = [];
  timer = 0
 getRandom(){
  return Math.floor(Math.random() * 20);
}

}
