import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { actions } from './actions'
import { Observable } from 'rxjs';
import { ActionTypes, School } from './schools.d';


const GEODATA_QUERY_API_BASE = 'https://geodata.gov.hk/gs/api/v1.0.0/geoDataQuery'
const AIDED_PRIMARY_SCHOOOLS = `${GEODATA_QUERY_API_BASE}?&q=%7Bv%3A%221%2E0%2E0%22%2Cid%3A%2241f53d43-7d82-4e44-9a9e-d4e9d1c4781c%22%2Clang%3A%22ENG%22%7D`

export const schoolListEpic = (action$: Observable<any>) => action$.pipe(
        ofType(ActionTypes.FETCH_SCHOOLS),
        mergeMap(() =>
            ajax.getJSON<{ features: any[] }>(AIDED_PRIMARY_SCHOOOLS).pipe(
                map(response => response.features.map(f => ({
                        type: f.type,
                        geometry: f.geometry,
                        gmid: f.properties.GMID,
                        dataset: f.properties.Dataset,
                        name: f.properties['Facility Name'],
                        address: f.properties.Address,
                        studentsGender: f.properties['Students Gender'],
                        session: f.properties.Session,
                        district: f.properties.District,
                        schoolLevel: f.properties['School Level'],
                        financeType: f.properties['Finance Type'],
                        religion: f.properties.Religion,
                        telephone: f.properties.Telephone,
                        faxNumber: f.properties['Fax Number'],
                        website: f.properties.Website,
                        schoolNumber: f.properties['SCHOOL NO.'],
                        lastUpdate: f.properties['Last Update']
                }))),
                map((response: School[]) => actions.fetchSuccess(response))
            )
        ),
    );