import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../services/app.service';

@Injectable()
export class PublicGuard implements CanActivate, CanActivateChild {

  constructor(private _app: AppService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._app.auth.isLoggedIn().pipe(map(status => {
      if (status) { this._app._redirect.toHome() }
      return !status;
    }));
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._app.auth.isLoggedIn().pipe(map(status => !status));
  }
}

