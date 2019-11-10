import { Types, SchoolFeature } from './schoolListEpic'

export const actions = {
    fetch() {
        return {
            type: Types.FETCH_SCHOOLS
        };
    },
    fetchSuccess(data: SchoolFeature[]) {
        return {
            type: Types.FETCH_SCHOOLS_SUCCESS,
            payload: data
        };
    }
};