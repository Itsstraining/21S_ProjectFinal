import { NotfoundComponent } from './Duc/404/notfound/notfound.component';
import { SigninComponent } from './Thang/signin/signin.component';
import { FindroomComponent } from './Trong/findroom/findroom.component';
import { HomeLoginComponent } from './Long/pages/home-login/home-login.component';
import { HomeComponent } from './Long/pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactComponent } from './Long/pages/contact/contact.component';
import { AllPageComponent } from './Duc/all-page/all-page.component';
import { SignupComponent } from './Trong/signup/signup.component';
import { PlayComponent } from './Long/pages/play/play.component';
import { AboutusComponent } from './Thang/aboutus/aboutus.component';

const routes1: Routes = [
  //Trong
  {
    path: 'signup',
    loadChildren: () =>
      import('./Trong/signup/signup.module').then((m) => m.SignupModule),
    canActivate: [AuthGuard],
  },

  //Thang
  {
    path: 'aboutus',
    loadChildren: () =>
      import('./Thang/aboutus/aboutus.module').then((m) => m.AboutusModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./Thang/signin/signin.module').then((m) => m.SigninModule),
    canActivate: [AuthGuard],
  },

  //Long
  {
    path: 'home',
    loadChildren: () =>
      import('./Long/pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'play',
    loadChildren: () =>
      import('./Long/pages/play/play.module').then((m) => m.PlayModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./Duc/all-page/all-page.module').then((m) => m.AllPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'homeLogin',
    loadChildren: () =>
      import('./Long/pages/home-login/home-login.module').then(
        (m) => m.HomeLoginModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./Long/pages/contact/contact.module').then(
        (m) => m.ContactModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'findroom',
    loadChildren: () =>
      import('./Trong/findroom/findroom.module').then((m) => m.FindroomModule),
    canActivate: [AuthGuard],
  },
  {
    path: '404',
    loadChildren: () =>
      import('./Duc/404/notfound/notfound.module').then(
        (m) => m.NotfoundModule
      ),
    canActivate: [AuthGuard],
  },
  { path: 'navTop', loadChildren: () => import('./ShareComponent/nav-top/nav-top.module').then(m => m.NavTopModule) },

];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeLoginComponent, canActivate: [AuthGuard] },
  { path: 'play', component: PlayComponent, canActivate: [AuthGuard] },
  { path: 'all', component: AllPageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'room', component: FindroomComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
