import { Observable } from 'rxjs';

export interface RedirectGateway {

    toLogin(): Observable<boolean>

    toHome(): Observable<boolean>

}