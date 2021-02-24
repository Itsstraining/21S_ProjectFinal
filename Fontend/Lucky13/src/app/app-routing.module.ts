import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'signup', loadChildren: () => import('./Trong/signup/signup.module').then(m => m.SignupModule) },
  { path: 'xuatbai', loadChildren: () => import('./Trong/xuatbai/xuatbai.module').then(m => m.XuatbaiModule) },
  { path: 'ConnectSocket', loadChildren: () => import('./Duc/connect-socket/connect-socket.module').then(m => m.ConnectSocketModule) },
  { path: 'navBar', loadChildren: () => import('./Long/pages/home/components/nav-bar/nav-bar.component').then(m => m.NavBarComponent) },
  { path: 'home', loadChildren: () => import('./Long/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'play', loadChildren: () => import('./Long/pages/play/play.module').then(m => m.PlayModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
