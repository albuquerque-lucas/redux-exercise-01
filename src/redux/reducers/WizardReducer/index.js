import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from './actions';

const initialState = {
    isLoading: false,
    wizardsList: [],
    errorMessage: '',
};
const wizardReducer = (state = initialState, action) => {

    switch (action.type) {
    case REQUEST_STARTED:
        return {
            ...state,
            isLoading: true,
            errorMessage: '',
            wizardsList: []
        };

    case REQUEST_SUCCESSFUL:
        return {
            ...state,
            isLoading: false,
            wizardsList: action.payload,
            errorMessage: ''
        };

    case REQUEST_FAILED:
        return {
            ...state,
            isLoading: false,
            errorMessage: action.payload,
            wizardsList: []
        };

    default:
        return state;
    }
};



export default wizardReducer;