import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {
  constructor(public userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }
  logOut() {
    this.userService.logOut()
  }
}
