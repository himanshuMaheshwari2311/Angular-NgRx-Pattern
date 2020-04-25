import { Config } from '../../model/config';

export interface ConfigState {
    config: Config;
}

export const initialConfigState: ConfigState = {
    config: null
};
