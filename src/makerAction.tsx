import { types } from './makerTypes'
import { Maker } from './store'

export const actions = {
    newMakers(makers: Maker[]) {
        return {
            type: types.NEW_MAKERS,
            payload: makers
        };
    },
    fetchMakers() {
        return {
            type: types.FETCH_MAKERS
        };
    },
    fetchMakersSuccess(makers: Maker[]) {
        return {
            type: types.FETCH_MAKERS_SUCCESS,
            payload: makers
        };
    }
};