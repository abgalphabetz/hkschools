import { createStore, applyMiddleware } from 'redux';
import makerReducer from './makerReducer';
import logger from './logger';
import { makerEpic } from './makerEpic'
import { createEpicMiddleware } from 'redux-observable'
import { SchoolFeature, schoolListEpic } from './components/schools/schoolListEpic';
import rootReducer from './rootReducer';

export interface Maker {
    make: string,
    model: string,
    price: number
}

export interface State {
    makers: Maker[]
    schoolList: SchoolFeature[]
}

const initialState: State = {
    makers: [],
    schoolList: []
};

const epicMiddleware = createEpicMiddleware()

export default createStore(rootReducer, initialState, applyMiddleware(logger, epicMiddleware));

epicMiddleware.run(makerEpic);
epicMiddleware.run(schoolListEpic);