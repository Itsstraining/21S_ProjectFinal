import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-all-page',
  templateUrl: './all-page.component.html',
  styleUrls: ['./all-page.component.scss']
})
export class AllPageComponent implements OnInit {

  constructor(public documentService: DocumentService) { }

  ngOnInit(): void {
  }
  joinRoom() {
    this.documentService.joinRoom('r123')
  }
  createRoom() {
    //this.documentService.createRoom()
  }
}
