import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
//import { Timeline } from 'console';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BackendService } from 'src/app/services/backend.service';
import { IAppState } from '../AppState';
import { SearchProfilesFail, SearchProfilesSuccess, ProfilesActionTypes, GetFollowersFail, GetFollowersSuccess, GetFollowingFail, GetFollowingSuccess } from './profiles.actions';

@Injectable()
export class ProfilesEffects {

  loadProfiles$ = createEffect(() => this.actions$.pipe(
    ofType(ProfilesActionTypes.SearchProfilesLoad),
    mergeMap(({pattern, user_id}) => this.backendService.searchUser(pattern, user_id)
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

  loadFollowing$ = createEffect(() => this.actions$.pipe(
    ofType(ProfilesActionTypes.GetFollowingLoad),
    mergeMap(({user_id}) => this.backendService.getFollowing(user_id)
      .pipe(
        map((data) => (
          console.log ("Datos:", data, data),
          GetFollowingSuccess ({ data: data.data}))
        ),
        catchError((data) => of(GetFollowingFail({ payload: data.message})))
        /*map(Timeline => ({ type: TimelineActionTypes.GetTimelineSuccess, payload: Timeline, data: Timeline })),
        catchError((err) => EMPTY)*/
      )
    )
  ));

  loadFollowers$ = createEffect(() => this.actions$.pipe(
    ofType(ProfilesActionTypes.GetFollowersLoad),
    mergeMap(({user_id}) => this.backendService.getFollowers(user_id)
      .pipe(
        map((data) => (
          console.log ("Datos:", data, data),
          GetFollowersSuccess ({ data: data.data}))
        ),
        catchError((data) => of(GetFollowersFail({ payload: data.message})))
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


