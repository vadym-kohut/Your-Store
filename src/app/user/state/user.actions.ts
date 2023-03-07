import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/user';

export const setUserData = createAction(
    '[User] Set User Data',
    props<{ user: User }>()
);
