import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  plays: Array<Player>
  constructor() { }
}
