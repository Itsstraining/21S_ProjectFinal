import { Component, Input, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Card, OutCard } from 'src/app/models/card.model';
import { CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.scss']
})
export class CardviewComponent implements OnInit {
  constructor(private cardService: CardDataService,) { }
  
  ngOnInit(): void { }
  @Input()
  card: Card;

  outCard(card) {
    const element = <HTMLElement>document.getElementById(card);
    element.style.marginBottom.valueOf() == '100px'
    element.style.marginLeft = '-2%';
  }
}

