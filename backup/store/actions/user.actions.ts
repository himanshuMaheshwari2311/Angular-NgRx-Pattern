import { Action } from '@ngrx/store';
import { User } from '../../model/user';

export enum UserActionsList {
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Success',
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success'
}

export class GetUsers implements Action {
    public readonly type = UserActionsList.GetUsers;
}

export class GetUsersSuccess implements Action {
    public readonly type = UserActionsList.GetUsersSuccess;
    constructor(public payload: User[]) {}
}

export class GetUser implements Action {
    public readonly type = UserActionsList.GetUser;
    constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
    public readonly type = UserActionsList.GetUserSuccess;
    constructor(public payload: User) {}
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
