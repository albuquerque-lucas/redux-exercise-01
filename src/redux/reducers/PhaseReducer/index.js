import { CHANGE_HOME_PHASE, CHANGE_CREATE_PHASE, CHANGE_DISPLAY_PHASE } from './actions';

const INITIAL_STATE = {
    homePhase: false,
    createPhase: false,
    displayPhase: false,
};

const phaseReducer = (state =INITIAL_STATE, action) => {
    const { type } = action;
    switch(type){
    case CHANGE_HOME_PHASE:
        return ({
            ...state,
            homePhase: !state.homePhase,
        });
    case CHANGE_CREATE_PHASE:
        return ({
            ...state,
            createPhase: !state.createPhase,
        });
    case CHANGE_DISPLAY_PHASE:
        return ({
            ...state,
            displayPhase: !state.displayPhase,
        });
    default:
        return state;
    }
};

export default phaseReducer;