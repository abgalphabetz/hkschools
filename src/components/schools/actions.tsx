import { School } from './schools';


export const Types = {
    FETCH_SCHOOLS: 'FETCH_SCHOOLS',
    FETCH_SCHOOLS_SUCCESS: 'FETCH_SCHOOLS_SUCCESS'
};


export const actions = {
    fetch() {
        return {
            type: Types.FETCH_SCHOOLS
        };
    },
    fetchSuccess(data: School[]) {
        return {
            type: Types.FETCH_SCHOOLS_SUCCESS,
            payload: data
        };
    }
};