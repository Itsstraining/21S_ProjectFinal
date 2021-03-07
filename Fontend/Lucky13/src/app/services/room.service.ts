
import { createNgModule } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Document } from 'src/app/models/document.model';
import { CardDataService } from './card-data.service';
import { Router } from '@angular/router';
import { eventNames } from 'process';
import { observeOn } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Rooms } from '../models/rooms.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  rooms: Array<Rooms>
  isChange = ''
  constructor() {
    this.rooms = new Array<Rooms>()
  }
}
