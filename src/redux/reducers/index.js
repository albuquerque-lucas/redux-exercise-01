import { combineReducers } from 'redux';
import themeModeReducer from './Dark-Light-Mode';
import phaseReducer from './PhaseReducer';

const rootReducer = combineReducers({
    theme: themeModeReducer,
    phase: phaseReducer,
});

export default rootReducer;