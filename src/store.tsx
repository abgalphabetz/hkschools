import { createStore, applyMiddleware } from 'redux';
import makerReducer from './makerReducer';
import logger from './logger';
import { makerEpic } from './makerEpic'
import { createEpicMiddleware } from 'redux-observable'

export interface Maker {
    make: string,
    model: string,
    price: number
}

export interface State {
    makers: Maker[]
}

const initialState: State = {
    makers: []
};

const epicMiddleware = createEpicMiddleware()

export default createStore(makerReducer, initialState, applyMiddleware(logger, epicMiddleware));

epicMiddleware.run(makerEpic);