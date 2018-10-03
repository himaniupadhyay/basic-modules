import { Credentials } from "../entities/auth";
import { Observable } from "rxjs";

export interface AuthGateway {
    authenticate(credential: Credentials): Observable<any>
    authListener(): Observable<any>
}