import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  ID: any
  PW: any
  name: any
  phone: number
  email: any
  constructor(private userService: UserService, private router: Router) { }

  async register() {
    let res = await this.userService.createUser(this.name, this.email, '', this.ID, this.phone, this.PW)
    console.log(res)
    if (res.mess == 'err') {
      this.userService.showSnackbarFail("Register with ID")
    }
    else {
      await this.userService.getUser(this.ID)
      this.userService.showSnackbarSuccessful('LOGIN')
      this.router.navigate(['']);
    }

    // if (res.mess == this.ID) {
    //   this.userService.showSnackbarSuccessful('LOGIN')
    //   this.router.navigate(['']);
    // }
    // else {
    //   this.userService.showSnackbarFail("Register with ID")
    // }
  }

  ngOnInit(): void { }
}
