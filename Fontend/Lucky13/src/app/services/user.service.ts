import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private auth: AngularFireAuth, private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'))
    console.log(this.user)
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        // console.log('login success! ' + this.user.displayName);
      } else {
        localStorage.setItem('user', null);
      }
    });
  }
  user = null;
  async loginWithGG() {
    await this.auth.signInWithPopup(
      new firebase.default.auth.GoogleAuthProvider()
    ).then(e => {
      if (e) {
        this.router.navigate(['/']);
      }
    })
  }

  async createUser(displayName, email, photoURL, uid) {
    await this.httpClient
      .post('http://127.0.0.1:7009/user', {
        id: uid,
        displayName: displayName,
        email: email,
        photoURL: photoURL,
      })
      .toPromise()
      .then((e) => {
        console.log(e);
      });
    console.log("234")
  }

  async getUser(uid) {
    await this.httpClient
      .get('http://127.0.0.1:7009/user?uid=' + uid, {})
      .toPromise()
      .then((e) => {
        console.log(e);
      });
    //console.log(this.data)
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
}
