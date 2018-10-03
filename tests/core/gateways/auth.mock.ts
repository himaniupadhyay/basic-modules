import { Credentials } from '../../../src/app/core/entities/auth';
import { AuthGateway } from '../../../src/app/core/gateway/auth';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { tap } from 'rxjs/operators';


export class AuthGatewayMock implements AuthGateway {

    readonly _authState = new BehaviorSubject<boolean>(false)

    constructor() { }

    authListener(): Observable<any> {
        return this._authState.asObservable()
    }

    authenticate(credential: Credentials): Observable<any> {
        return observableOf((credential.email === "test" && credential.password === "test"))
            .pipe(
                tap(flag => this._authState.next(flag))
            )
    }

   
}