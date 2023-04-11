import { combineReducers } from 'redux';
import themeModeReducer from './Dark-Light-Mode';
import phaseReducer from './PhaseReducer';
import wizardReducer from './WizardReducer';
import spellsReducer from './SpellsReducer';

const rootReducer = combineReducers({
    theme: themeModeReducer,
    phase: phaseReducer,
    wizardsList: wizardReducer,
    isLoading: wizardReducer,
    spellsList: spellsReducer,
});

export default rootReducer;