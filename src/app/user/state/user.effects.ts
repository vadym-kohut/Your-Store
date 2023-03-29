import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as UserActions from './user.actions';
import { map, switchMap } from 'rxjs';
import { LoginData } from '../../interfaces/login-data';
import { UserData } from '../../interfaces/user-data';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private http: HttpClient
    ) {
    }

    loginUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.fetchUserData),
            switchMap((loginData) =>
                this.getUserData$(loginData).pipe(
                    map((userData: UserData) =>
                        UserActions.fetchUserDataSuccess({ userData }))
                )
            )
        )
    );

    getUserData$(loginData: Partial<LoginData>) {
        return this.http.post<UserData>(
            'https://dummyjson.com/auth/login',
            loginData
        );
    }
}
