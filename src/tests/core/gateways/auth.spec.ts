import { Credentials } from '@client/entities/auth';
import { take } from 'rxjs/operators';
import { AuthGatewayMock } from "./auth.mock";

describe('Core Auth gateway tests', () => {
    const _atuh = new AuthGatewayMock()

    it('should authenticate user', () => {
        _atuh.authenticate(<Credentials>{ email: "test", password: "test" })
            .subscribe(flag => expect(flag).toBe(true))
    });

    it('should auth listener', () => {
        _atuh.authListener()
            .pipe(
                take(1)
            )
            .subscribe(auth => expect(auth).toBe(true))
    });
});
