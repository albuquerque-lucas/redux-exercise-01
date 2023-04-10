import { CHANGE_HOME_PHASE_ONE, CHANGE_CREATE_PHASE, CHANGE_DISPLAY_PHASE } from './actions';

const INITIAL_STATE = {
    homePhaseOne: false,
    createPhase: false,
    displayPhase: false,
};

const phaseReducer = (state =INITIAL_STATE, action) => {
    const { type } = action;
    switch(type){
    case CHANGE_HOME_PHASE_ONE:
        return ({
            ...state,
            homePhaseOne: !state.homePhaseOne,
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