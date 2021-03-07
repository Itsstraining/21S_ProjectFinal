import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/room.model';
import { User } from 'src/app/models/user.model';
import { CardDataService } from 'src/app/services/card-data.service';
import { CheckService } from 'src/app/services/check.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-listcard',
  templateUrl: './listcard.component.html',
  styleUrls: ['./listcard.component.scss'],
})
export class ListcardComponent implements OnInit, OnDestroy {
  documents: Observable<string[]>;
  currentDoc: string;
  private _docSub: Subscription;
  roomData: Observable<Room>;

  constructor(public cardService: CardDataService, private documentService: DocumentService) {
  }

  ngOnInit(): void {
    this.documents = this.documentService.documents;
    this.roomData = this.documentService.roomData;
    this._docSub = this.documentService.currentDocument.subscribe(
      doc => {
        this.currentDoc = doc.id
      }
    );
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  sendCards() {

    //Gui bai socket

    //neu socket tra ve true=>
    if (this.cardService.inTurn == true) {
      this.cardService.cardsViews = this.cardService.cardViewTemp
      this.documentService.sendCard(this.cardService.cardsViews);
      this.cardService.cardViewTemp = []
    } else {
      alert("chua toi luot")
    }

  }
  offTurn() {
    this.documentService.quitTurn();
    this.cardService.cardViewTemp = [];
  }

  newDoc() {
    this.documentService.newDocument();
  }
}
