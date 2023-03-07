import {
    createFeatureSelector,
    createReducer,
    createSelector,
    on,
} from '@ngrx/store';
import { User } from 'src/app/interfaces/user';
import * as AppState from '../../state/app.state';
import * as UserActions from './user.actions';

export interface State extends AppState.State {
    user: UserState;
}

export interface UserState {
    userData: User | undefined;
}

const initialState: UserState = {
    userData: undefined,
};

// Selectors
const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getUserData = createSelector(
    getUserFeatureState,
    (state) => state.userData
);

// Reducer
export const userReducer = createReducer(
    initialState,
    on(UserActions.setUserData, (state, action): UserState => {
        return {
            ...state,
            userData: action.user,
        };
    })
);
