import { School, ActionTypes } from './schools.d';


export default function schoolListReducer(state: School[] = [], action: any): School[] {
    const payload = action.payload;
    switch (action.type) {
        case ActionTypes.FETCH_SCHOOLS_SUCCESS:
            return payload;
        default:
            return state;
    }
}