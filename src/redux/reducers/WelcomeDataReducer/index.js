import { SAVE_USER_DATA } from './actions';

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    age: 0,
};

const welcomeDataReducer = (state = INITIAL_STATE, action) => {
    const { type, firstName, lastName, age } = action;
    switch(type) {
    case SAVE_USER_DATA:
        return {
            ...state,
            firstName,
            lastName,
            age,
        };
    default:
        return state;
    }
};

export default welcomeDataReducer;