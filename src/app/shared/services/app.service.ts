import { Injectable } from '@angular/core';
import { AuthService } from '../../core/business-rules/auth';
import { AuthGatewayService } from '../services/auth-gateway.service';
import { RedirectGatewayService } from '../services/redirect-gateway.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly auth: AuthService

  constructor(private _auth: AuthGatewayService, public _redirect: RedirectGatewayService) {
    this.auth = new AuthService(_auth, _redirect)
  }
}
