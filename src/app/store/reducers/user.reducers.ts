import { UserActionsList, UserActions } from '../actions/user.actions';
import { initalUserState, UserState } from '../state/user.state';

export const userReducer = (
    state = initalUserState,
    action: UserActions
): UserState => {
    switch (action.type) {
        case UserActionsList.GetUsersSuccess: {
            return {
                ...state,
                users: action.payload
            };
        }
        case UserActionsList.GetUserSuccess: {
            return {
                ...state,
                selectedUser: action.payload
            };
        }
        default: {
            return state;
        }
    }
};
