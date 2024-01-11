import { User } from "./user.model";
import { AuthData } from "./auth.model";
import { Subject } from "rxjs";

export class AuthService {
    authChenge = new Subject<boolean>();
    private user: User;

    registerUser(authData: AuthData) {
        this.user = {
            password: authData.password,
            userId: Math.round(Math.random() * 10000).toString(),
        };
        this.authChenge.next(true);
    }

    login(authData: AuthData) {
        this.user = {
            password: authData.password,
            userId: Math.round(Math.random() * 10000).toString(),
        };
        this.authChenge.next(true);
    }

    getuser() {
        return { ...this.user };
    }
    isAuth() {
        return this.user != null;
    }
}