import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { types } from './makerTypes';
import { actions } from './makerAction'
import { Observable } from 'rxjs';

export const makerEpic = (action$: Observable<any>) => action$.pipe(
    ofType(types.FETCH_MAKERS),
    mergeMap(() =>
        ajax.getJSON<any>('https://api.myjson.com/bins/ly7d1').pipe(
            map(response => actions.fetchMakersSuccess(response))
        )
    ),
);