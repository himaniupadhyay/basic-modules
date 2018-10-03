import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppService } from '../services/app.service';

@Injectable()
export class PrivateGuard implements CanActivate, CanActivateChild {

  constructor(private _app: AppService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._app.auth.isLoggedIn().pipe(
      tap(status => {
        if (!status) { this._app._redirect.toLogin() }
      }))
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._app.auth.isLoggedIn()
  }
  resolve() { return }
}
