import { createStore, applyMiddleware } from 'redux';
import logger from './logger';
import { createEpicMiddleware } from 'redux-observable'
import { schoolListEpic } from './components/schools/epic';
import rootReducer from './rootReducer';
import { School } from './components/schools/schools.d';

export interface State {
    schoolList: School[]
}

const initialState: State = {
    schoolList: []
};

const epicMiddleware = createEpicMiddleware()

export default createStore(rootReducer, initialState, applyMiddleware(logger, epicMiddleware));

epicMiddleware.run(schoolListEpic);