import { School } from '../components/schools/schools.d';

export interface State {
    schoolList: School[]
}

export const initialState: State = {
    schoolList: []
};
