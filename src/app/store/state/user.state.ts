import { User } from '../../model/user';


export interface UserState {
    users: User[];
    selectedUser: User;
}

export const initalUserState: UserState = {
    users: null,
    selectedUser: null
};
