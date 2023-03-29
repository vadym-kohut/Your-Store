import {
    createFeatureSelector,
    createReducer,
    createSelector,
    on,
} from '@ngrx/store';
import { UserData } from 'src/app/interfaces/user-data';
import * as AppState from '../../state/app.state';
import * as UserActions from './user.actions';

export interface State extends AppState.State {
    user: UserState;
}

export interface UserState {
    userData: UserData | undefined;
}

const initialState: UserState = {
    userData: undefined,
};

// Selectors
const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getUserData = createSelector(
    getUserFeatureState,
    state => state.userData
);

// Reducer
export const userReducer = createReducer(
    initialState,
    on(UserActions.fetchUserDataSuccess, (state, action): UserState => {
        return {
            ...state,
            userData: action.userData,
        };
    })
);
