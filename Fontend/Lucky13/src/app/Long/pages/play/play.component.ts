import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardDataService } from 'src/app/services/card-data.service';
import { DocumentService } from 'src/app/services/document.service';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  
}

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  private _docSub: Subscription;

  constructor(
    public documentService: DocumentService,
    public cardDataService: CardDataService,
    public dialog: MatDialog

  ) { }

  openDialog() {
    let dialogConfig = new MatDialogConfig();
    data: {
      dialogConfig.data = this.cardDataService.result;
    }
    
    
    this.dialog.open(resultDialog, dialogConfig);
  }

  ngOnInit(): void {
    this.documentService.getSocketID()
  }
  letStart() {
    this.cardDataService.isPlaying = true
    this.documentService.letStart()
    this.cardDataService.isPlaying = true
  }
  ngOnDestroy() {
    this._docSub.unsubscribe();
  }
}
@Component({
  selector: 'resultDialog',
  templateUrl: 'resultDialog.html',
})
export class resultDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    let temp=this.data;
  }
}