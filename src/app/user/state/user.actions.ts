import { createAction, props } from '@ngrx/store';
import { UserData } from 'src/app/interfaces/user-data';
import { LoginData } from '../../interfaces/login-data';

export const fetchUserData = createAction(
    '[User] Login User',
    props<Partial<LoginData>>()
);

export const fetchUserDataSuccess = createAction(
    '[User] Login User Success',
    props<{ userData: UserData }>()
)
