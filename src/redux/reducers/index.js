import { combineReducers } from 'redux';
import themeModeReducer from './Dark-Light-Mode';
import phaseReducer from './PhaseReducer';
import wizardReducer from './WizardReducer';

const rootReducer = combineReducers({
    theme: themeModeReducer,
    phase: phaseReducer,
    imageURL: wizardReducer,
    isLoading: wizardReducer,
});

export default rootReducer;