import { Injectable } from '@angular/core';
import { RedirectGateway } from '../../core/gateway/redirect';
import { Router } from '@angular/router';
import { from as observableFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectGatewayService implements RedirectGateway {

  constructor(private _router: Router) { }

  toHome() {
    return observableFrom(this._router.navigate(['/home']));
  }

  toLogin() {
    return observableFrom(this._router.navigate(['/sign-in']));
  }


}
