import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { CardDataService } from 'src/app/services/card-data.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {


  public time = 0;
  constructor(public cardService: CardDataService,private documentService: DocumentService) {
    this.downTime
  }

  ngOnInit(): void {
  }

  downTime() {
    if (this.cardService.timer == 0) {
      this.documentService.quitTurn();
    }
  }
}
