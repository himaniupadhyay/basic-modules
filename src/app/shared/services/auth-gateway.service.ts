import { Injectable } from '@angular/core';
import { AuthGateway } from '../../core/gateway/auth';
import { Credentials } from '../../core/entities/auth';
import { of as observableOf, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGatewayService implements AuthGateway {

  constructor() { }

  authenticate(credential: Credentials): Observable<any> {
    return observableOf(true)
  }
  authListener(): Observable<any> {
    return observableOf(false)
  }
}

