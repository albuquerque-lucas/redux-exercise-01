import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from './actions';

const INITIAL_STATE = {
    spellIsLoading: false,
    spells: [],
    spellErrorMessage: '',
};

const spellsReducer = (state = INITIAL_STATE, action) => {
    const { type } = action;
    switch(type) {
    case REQUEST_STARTED:
        return {
            ...state,
            spellIsLoading: true,
            errorMessage: '',
            spells: []
        };

    case REQUEST_SUCCESSFUL:
        return {
            ...state,
            spellIsLoading: false,
            spells: action.payload,
            errorMessage: ''
        };

    case REQUEST_FAILED:
        return {
            ...state,
            spellIsLoading: false,
            errorMessage: action.payload,
            spells: []
        };
    default:
        return state;
    }
};

export default spellsReducer;