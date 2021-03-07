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




  constructor(private cardService: CardDataService, private documentService: DocumentService,public checkCard:CheckService) {

  }

  ngOnInit(): void {

  }
  @Input()
  card: Card;







  async click(card) {
    const elem = <HTMLElement>document.getElementsByClassName(card)[0];
    if (elem.style.marginBottom.valueOf() == '25px') {
      elem.style.marginBottom = '0px';
      this.cardService.cardViewTemp.pop();
    } else {
      elem.style.marginBottom = '25px';
      this.cardService.cardViewTemp.push(this.card);
    }
    console.log(this.cardService.cardViewTemp)
    // let isValid =this.checkCard.isLegal(this.cardService.cardViewTemp)
    // if (isValid != 0) {
      this.documentService.checkValid(this.cardService.cardViewTemp)
    // }
    // for (let i = this.cardService.cardViewTemp.length; i < this.cardService.takCards.length; i++) {
    //   const element = <HTMLElement>document.getElementsByClassName(this.cardService.takCards[i])[0];
    //   if (element.style.marginBottom.valueOf() == '25px') {
    //     element.style.marginBottom = '0px';
    //     this.cardService.cardViewTemp.pop();
    //   } else {
    //     element.style.marginBottom = '25px';
    //     this.cardService.cardViewTemp.push(this.card);
    //   }
    //   //console.log(this.cardService.cardViewTemp);
    // }
  }
} 