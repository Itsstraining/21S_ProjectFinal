import { Injectable } from '@angular/core';
import { playerInfo } from '../models/playerInfo.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  plays: Array<playerInfo> = new Array<playerInfo>()
  constructor() { }
}
