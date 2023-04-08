import { CHANGE_THEME } from './actions';

const INITIAL_STATE = {
    theme: 'light',
};

const themeModeReducer = (state = INITIAL_STATE, action) => {
    const { type } = action;
    switch(type) {
    case CHANGE_THEME:
        return {
            ...state,
            theme: state.theme === 'light' ? 'dark' : 'light',
        };
    default:
        return state;
    }
};

export default themeModeReducer;