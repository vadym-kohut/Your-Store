import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginForm } from '../interfaces/login-form';
import { State } from './state/user.reducer';
import * as UserActions from './state/user.actions';

@Component({
    selector: 'ys-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent {
    loginDataInvalid!: boolean;

    loginForm = new FormGroup<LoginForm>({
        username: new FormControl('atuny0', { nonNullable: true }),
        password: new FormControl('9uQFF1Lh', { nonNullable: true }),
    });

    constructor(
        private router: Router,
        private store: Store<State>
    ) { }

    onSubmit() {
        this.store.dispatch(UserActions.fetchUserData(this.loginForm.value));
        this.router.navigate(['/']);
    }
}
