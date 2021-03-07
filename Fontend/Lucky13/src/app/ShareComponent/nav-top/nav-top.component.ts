import { Component, OnInit, } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {
  user = this.userService.user
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }
  something() {

  }
}
