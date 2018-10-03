import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PublicGuard } from '../shared/guards/public.guard';
import { PrivateGuard } from '../shared/guards/private.guard';

const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: '../sign-in/sign-in.module#SignInModule',
    canActivate: [PublicGuard],
    canActivateChild: [PublicGuard]
  },
  {
    path: 'home',
    loadChildren: '../home/home.module#HomeModule',
    canActivate: [PrivateGuard],
    canActivateChild: [PrivateGuard]
  },
  {
    path: 'register',
    loadChildren: '../register/register.module#RegisterModule',
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [PrivateGuard, PublicGuard]
})
export class AppRouterModule { }
