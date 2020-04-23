import { ConfigState, initialConfigState } from './config.state';
import { UserState, initalUserState } from './user.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface AppState {
    router?: RouterReducerState;
    users: UserState;
    config: ConfigState;
}

export const initialAppState: AppState = {
    users: initalUserState,
    config: initialConfigState
};

export function getInitialAppState(): AppState {
    return initialAppState;
}
