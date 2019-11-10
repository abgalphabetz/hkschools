import { combineReducers } from 'redux';
import makerReducer from './makerReducer';
import schoolListReducer from './components/schools/reducer';


const rootReducer = combineReducers({
    makers: makerReducer, 
    schoolList: schoolListReducer
});

export default rootReducer;

