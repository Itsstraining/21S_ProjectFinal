import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private auth: AngularFireAuth,
    private router: Router,
    public snackBar: MatSnackBar,
  ) {
    let a = JSON.parse(localStorage.getItem('user'))
    if (a == null) {
      this.auth.authState.subscribe((user) => {
        if (user) {
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
        } else {
          localStorage.setItem('user', null);
        }
      });
    }
    else {
      console.log(JSON.parse(localStorage.getItem('user')))
      this.user = JSON.parse(localStorage.getItem('user'))
    }

  }
  user = null
  async loginWithGG() {
    let res = await this.auth.signInWithPopup(
      new firebase.default.auth.GoogleAuthProvider()
    )
    console.log(res)
    if (res.user) {
      await this.createUser(
        res.user.displayName,
        res.user.email,
        res.user.photoURL,
        res.user.uid,
        res.user.phoneNumber,
        '');
      this.showSnackbarSuccessful('LOGIN')
      this.router.navigate(['']);
    }

  }
  async loginWithAccount(ID, PW: string) {
    let users: any = await this.httpClient.get('http://127.0.0.1:7009/user', {
      params: { uid: ID }
    }).toPromise()
    console.log(users.res)
    console.log(users.res.password)

    if (users.res.password != undefined && users.res.password == PW) {
      this.changeUserView(users.res)
      this.router.navigate(['']);
      this.showSnackbarSuccessful('LOGIN')
    }
    else if (!users || users.password != PW) {
      this.showSnackbarFail('LOGIN')
    }
    else {
      this.showSnackbarFail('LOGIN')
    }
  }
  logOut() {
    this.auth.signOut()
    this.changeUserView(null)
    this.router.navigate(['/signin']);
  }

  async createUser(displayName, email, photoURL, uid, phone, password) {
    let res: any = await this.httpClient.post('http://127.0.0.1:7009/user', {
      id: uid,
      displayName: displayName,
      email: email,
      photoURL: photoURL,
      phone: phone,
      password: password
    }).toPromise()
    return res
  }
  async getUser(uid) {
    let user: any = await this.httpClient.get('http://127.0.0.1:7009/user', {
      params: {
        uid: uid
      }
    }).toPromise()
    this.user = user.res
  }
  async getUsers() {
    let users = await this.httpClient.get('http://127.0.0.1:7009/roomRT?rid=kNTlAEaaLBUVzYAgjXgKLenynO03').toPromise()
    return users
  }

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      this.auth.onAuthStateChanged(function (e) {
        if (e) {
          resolve(e);
        } else {
          reject('No user logged in');
        }
      })
    })
  }

  changeUserView(userNew) {
    this.auth.signOut()
    localStorage.setItem('user', JSON.stringify(userNew));
    this.user = userNew
    console.log(JSON.parse(localStorage.getItem('user')))
  }

  public showSnackbarSuccessful(val: string): void {
    this.snackBar.open(`${val} Successfully`, '✔️', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
  public showSnackbarFail(val: string): void {
    this.snackBar.open(`${val} Failed, Please try it again!!!`, '❌', {
      duration: 3000, horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
