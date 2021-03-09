import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  public slides = [
    { src: "https://images.squarespace-cdn.com/content/v1/54b9401be4b095413a52aaa8/1542953232602-7WMCZDHQK4D0ZN0RS94H/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Black+Wheel+Playing+Cards+by+DKNG" },
    { src: "https://images.squarespace-cdn.com/content/v1/54b9401be4b095413a52aaa8/1542953196925-MQIH6YSLGHPNRQ58Q7VB/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Black+Wheel+Playing+Cards+by+DKNG" },
    { src: "https://images.squarespace-cdn.com/content/v1/54b9401be4b095413a52aaa8/1542953156734-WVF3ZYMOR5OMOMACWHW2/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Black+Wheel+Playing+Cards+by+DKNG" },
    { src: "https://images.squarespace-cdn.com/content/v1/54b9401be4b095413a52aaa8/1542953092735-XXBJ38DJZMWKSZ07NETE/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Black+Wheel+Playing+Cards+by+DKNG" }
  ];
  goRooms() {
    console.log(this.userService.user)
    if (this.userService.user) {
      this.router.navigate(['/room']);
    }
    else {
      this.router.navigate(['/signin']);
    }
  }


}
