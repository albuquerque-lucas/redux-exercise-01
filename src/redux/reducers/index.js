import { combineReducers } from 'redux';
import themeModeReducer from './Dark-Light-Mode';

const rootReducer = combineReducers({
    theme: themeModeReducer,
});

export default rootReducer;