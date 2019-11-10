import { State } from '../../store';
import { SchoolFeature, Types } from './SchoolListEpic';


export default function schoolListReducer(state: SchoolFeature[] = [], action: any): SchoolFeature[] {
    const payload = action.payload;
    switch (action.type) {
        case Types.FETCH_SCHOOLS_SUCCESS:
            return payload;
        default:
            return state;
    }
}