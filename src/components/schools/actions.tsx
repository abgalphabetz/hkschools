import { School, ActionTypes } from './schools.d';


export const actions = {
    fetch() {
        return {
            type: ActionTypes.FETCH_SCHOOLS
        };
    },
    fetchSuccess(data: School[]) {
        return {
            type: ActionTypes.FETCH_SCHOOLS_SUCCESS,
            payload: data
        };
    }
};