import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
//import { Timeline } from 'console';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BackendService } from 'src/app/services/backend.service';
import { IAppState } from '../AppState';
import { SearchProfilesFail, SearchProfilesSuccess, ProfilesActionTypes } from './profiles.actions';

@Injectable()
export class ProfilesEffects {

  loadProfiles$ = createEffect(() => this.actions$.pipe(
    ofType(ProfilesActionTypes.SearchProfilesLoad),
    mergeMap(({pattern}) => this.backendService.searchUser(pattern, 365)
      .pipe(
        map((data) => (
          console.log ("Datos:", data, data.data.data),
          SearchProfilesSuccess ({ data: data.data.data}))
        ),
        catchError((data) => of(SearchProfilesFail({ payload: data.message})))
        /*map(Timeline => ({ type: TimelineActionTypes.GetTimelineSuccess, payload: Timeline, data: Timeline })),
        catchError((err) => EMPTY)*/
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) {}
}
