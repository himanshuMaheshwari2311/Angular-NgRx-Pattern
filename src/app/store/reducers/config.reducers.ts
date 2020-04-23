import { ConfigActions, ConfigActionsList } from '../actions/config.actions';
import { initialConfigState, ConfigState } from '../state/config.state';

export const configReducer = (
    state = initialConfigState,
    action: ConfigActions
): ConfigState => {
    switch (action.type) {
        case ConfigActionsList.GetConfigSuccess: {
            return {
                ...state,
                config: action.payload
            };
        }
        default: {
            return state;
        }
    }
};
