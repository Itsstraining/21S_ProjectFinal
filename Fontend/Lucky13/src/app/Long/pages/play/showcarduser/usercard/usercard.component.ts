import { Component, Input, OnInit } from '@angular/core';
import { userCard } from 'src/app/models/card.model';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  userCard: userCard;
}
