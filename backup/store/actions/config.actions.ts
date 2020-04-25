import { Action } from '@ngrx/store';
import { Config } from '../../model/config';

export enum ConfigActionsList {
    GetConfig = '[Config] Get Config',
    GetConfigSuccess = '[Config] Get Config Success'
}

export class GetConfig implements Action {
    public readonly type = ConfigActionsList.GetConfig;
}

export class GetConfigSuccess implements Action {
    public readonly type = ConfigActionsList.GetConfigSuccess;
    constructor(public payload: Config) {}
}

export type ConfigActions = GetConfig | GetConfigSuccess;
