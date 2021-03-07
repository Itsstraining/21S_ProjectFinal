import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { RoomService } from 'src/app/services/room.service';
import { Room } from '../../../../models/room.model';

@Component({
  selector: 'app-listroom',
  templateUrl: './listroom.component.html',
  styleUrls: ['./listroom.component.scss']
})
export class ListroomComponent implements OnInit {

  constructor(
    public documentService: DocumentService,
    public roomService: RoomService
  ) { }
  ngOnInit(): void {
  }

}
