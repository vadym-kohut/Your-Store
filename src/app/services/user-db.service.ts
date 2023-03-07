import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginData } from '../interfaces/login-data';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root',
})
export class UserDBService {
    private userData$ = new BehaviorSubject<User | undefined>(undefined);

    constructor(private http: HttpClient) {}

    loginUser(loginData: LoginData) {
        return this.http.post<User>(
            'https://dummyjson.com/auth/login',
            loginData
        );
    }

    // SET
    setUserData(user: User) {
        this.userData$.next(user);
    }

    //GET
    getUserData$(): Observable<User | undefined> {
        return this.userData$.asObservable();
    }
}
