import { AuthGateway } from '../gateway/auth';
import { Credentials } from '../entities/auth';
import { Observable } from "rxjs";
import { RedirectGateway } from "../gateway/redirect";
import { finalize, map } from "rxjs/operators";

export class AuthService {

    private user$: Observable<any>
    private isLoggedIn$: Observable<boolean>

    constructor(private _auth: AuthGateway, private _redirect: RedirectGateway) {
        this.user$ = this._auth.authListener()
        this.isLoggedIn$ = this.user$.pipe(map(user => !!user))
    }

    login(credentials: Credentials): Observable<any> {
        return this._auth.authenticate(credentials)
            .pipe(
                finalize(() => this._redirect.toHome())
            )
    }

    isLoggedIn(): Observable<boolean> {
        return this.isLoggedIn$
    }
}