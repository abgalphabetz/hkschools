import { createStore, applyMiddleware } from 'redux';
import logger from '../logger';
import { createEpicMiddleware } from 'redux-observable'
import { schoolListEpic } from '../components/schools/epic';
import rootReducer from './reducer';
import { initialState } from './state';


const epicMiddleware = createEpicMiddleware()

export default createStore(rootReducer, initialState, applyMiddleware(logger, epicMiddleware));

epicMiddleware.run(schoolListEpic);