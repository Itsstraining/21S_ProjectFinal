import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-showcarduser',
  templateUrl: './showcarduser.component.html',
  styleUrls: ['./showcarduser.component.scss']
})
export class ShowcarduserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cardUser:Array<Card> = [{
    imageUrl:"",
  }]
}
