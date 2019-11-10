import { types } from './makerTypes';
import { State, Maker } from './store';


export default function makerReducer(state: Maker[] = [], action: any) {
    const payload = action.payload;
    switch (action.type) {
        case types.FETCH_MAKERS_SUCCESS:
            return payload;
        default:
            return state;
    }
}