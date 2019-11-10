import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { actions } from './Actions'
import { Observable } from 'rxjs';


const GEODATA_QUERY_API_BASE = 'https://geodata.gov.hk/gs/api/v1.0.0/geoDataQuery'
const AIDED_PRIMARY_SCHOOOLS = `${GEODATA_QUERY_API_BASE}?&q=%7Bv%3A%221%2E0%2E0%22%2Cid%3A%2241f53d43-7d82-4e44-9a9e-d4e9d1c4781c%22%2Clang%3A%22ENG%22%7D`

export const Types = {
    FETCH_SCHOOLS: 'FETCH_SCHOOLS',
    FETCH_SCHOOLS_SUCCESS: 'FETCH_SCHOOLS_SUCCESS'
};

export interface SchoolFeature {
    type: string
    geometry: {
        type: string
        coordinates: number[]
    }
    properties: SchoolProperties
}

export interface SchoolProperties {
    GMID: string
    Dataset: string
    "Facility Name": string
    Address: string
    "Students Gender": string
    Session: string
    District: string
    "School Level": string
    "Finance Type": string
    Religion: string
    Telephone: string
    "Fax Number": string
    Website: string,
    "SCHOOL NO.": string
    "Last Update": string
}

export const schoolListEpic = (action$: Observable<any>) => action$.pipe(
    ofType(Types.FETCH_SCHOOLS),
    mergeMap(() =>
        ajax.getJSON<{features: SchoolFeature[]}>(AIDED_PRIMARY_SCHOOOLS).pipe(
            map(response => actions.fetchSuccess(response.features))
        )
    ),
);