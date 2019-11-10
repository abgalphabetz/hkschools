import { School } from './schools';
import { Types } from './actions';


export default function schoolListReducer(state: School[] = [], action: any): School[] {
    const payload = action.payload;
    switch (action.type) {
        case Types.FETCH_SCHOOLS_SUCCESS:
            return payload;
        default:
            return state;
    }
}