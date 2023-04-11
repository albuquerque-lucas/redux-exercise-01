import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from './actions';

const initialState = {
    isLoading: false,
    imageURL: '',
    errorMessage: '',
};
const wizardReducer = (state = initialState, action) => {
    switch (action.type) {
    case REQUEST_STARTED:
        return {
            ...state,
            isLoading: true,
            errorMessage: '',
            imageURL: ''
        };
    
    case REQUEST_SUCCESSFUL:
        return {
            ...state,
            isLoading: false,
            imageURL: action.payload,
            errorMessage: ''
        };
    
    case REQUEST_FAILED:
        return {
            ...state,
            isLoading: false,
            errorMessage: action.payload,
            imageURL: ''
        };
    
    default:
        return state;
    }
    // switch (action.type) {
    // case REQUEST_STARTED:
    //     return {
    //         ...state,
    //         isFetching: true,
    //         errorMessage: '',
    //         wizards: ''
    //     };

    // case REQUEST_SUCCESSFUL:
    //     return {
    //         ...state,
    //         isFetching: false,
    //         wizards: action.payload,
    //         errorMessage: ''
    //     };

    // case REQUEST_FAILED:
    //     return {
    //         ...state,
    //         isFetching: false,
    //         errorMessage: action.payload,
    //         wizards: ''
    //     };

    // default:
    //     return state;
    // }
};



export default wizardReducer;