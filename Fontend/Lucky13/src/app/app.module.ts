import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Long
//const config: SocketIoConfig = { url: 'http://192.168.31.147:3000', options: {} };
//Duc
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
import { HttpClientModule } from '@angular/common/http';
import { CountdownComponent } from './Long/pages/play/countdown/countdown.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { MatDialogModule } from '@angular/material/dialog';
import { NavTopModule } from './ShareComponent/nav-top/nav-top.module';
import { UserService } from './services/user.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatDialogModule,
    NavTopModule,
    MatSnackBarModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
