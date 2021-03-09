import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subscription } from 'rxjs';
import { Card, OutCard } from 'src/app/models/card.model';
import { CardDataService } from 'src/app/services/card-data.service';
import { CheckService } from 'src/app/services/check.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {




  constructor(private cardService: CardDataService, private documentService: DocumentService, public checkCard: CheckService) {

  }

  ngOnInit(): void {

  }
  @Input()
  card: Card;







  async click(card) {
    const elem = <HTMLElement>document.getElementsByClassName(card)[0];
    if (elem.style.marginBottom.valueOf() == '25px') {
      elem.style.marginBottom = '0px';
      this.cardService.cardViewTemp.splice(this.cardService.cardViewTemp.indexOf(this.card), 1);
    } else {
      elem.style.marginBottom = '25px';
      if (this.cardService.cardViewTemp.indexOf(this.card) == -1) {
        this.cardService.cardViewTemp.push(this.card);
      }
    }

    this.cardService.cardViewTemp = this.checkCard.sortDeck(this.cardService.cardViewTemp);

    console.log(this.cardService.cardViewTemp)
    let lastCardsOut = this.cardService.Room.cardOut[this.cardService.Room.cardOut.length - 1]
    console.log(lastCardsOut)
    let isValid = this.checkCard.compareDeck(this.cardService.cardViewTemp, lastCardsOut)
    this.cardService.cardCheck = isValid;
    if (isValid == true) {
      this.documentService.checkValid(this.cardService.cardViewTemp);
    }
  }
} 