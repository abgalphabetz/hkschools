import { combineReducers } from 'redux';
import schoolListReducer from '../components/schools/reducer';


const rootReducer = combineReducers({
    schoolList: schoolListReducer
});

export default rootReducer;

