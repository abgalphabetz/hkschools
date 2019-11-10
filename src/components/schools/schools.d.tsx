export interface School {
    type: string
    geometry: {
        type: string
        coordinates: number[]
    }
    gmid: string
    dataset: string
    name: string
    address: string
    studentsGender: string
    session: string
    district: string
    schoolLevel: string
    financeType: string
    religion: string
    telephone: string
    faxNumber: string
    website: string
    schoolNumber: string
    lastUpdate: string
};

export enum ActionTypes {
    FETCH_SCHOOLS,
    FETCH_SCHOOLS_SUCCESS
};
