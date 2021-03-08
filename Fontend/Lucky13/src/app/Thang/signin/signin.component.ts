import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  ID: any;
  PW: any;
  constructor(private userService: UserService) { }
  async loginWithGG() {
    await this.userService.loginWithGG();
  }
  async loginWithAccount() {
    await this.userService.loginWithAccount(this.ID, this.PW);
  }
  async login() { }
  ngOnInit(): void { }
  ngOnDestroy(): void { }
}
