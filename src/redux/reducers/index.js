import { combineReducers } from 'redux';
import themeModeReducer from './Dark-Light-Mode';
import phaseReducer from './FaseReducer';

const rootReducer = combineReducers({
    theme: themeModeReducer,
    phase: phaseReducer,
});

export default rootReducer;