import { types } from './makerTypes';
import { State } from './store';


export default function makerReducer(state: State = { makers: [] }, action: any) {
    const payload = action.payload;
    switch (action.type) {
        case types.NEW_MAKERS:
            return {
                makers: [...state.makers, ...payload]
            };
        case types.FETCH_MAKERS_SUCCESS:
            return {
                makers: [...state.makers, ...payload]
            };
        default:
            return state;
    }
}