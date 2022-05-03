import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
//import { profile } from 'console';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BackendService } from 'src/app/services/backend.service';
import { GetProfileFail, GetProfileSuccess, ProfileActionTypes } from './profile.actions';

@Injectable()
export class ProfileEffects {

  loadProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActionTypes.GetProfileLoad),
    mergeMap(() => this.backendService.getPerfil()
      .pipe(
        map((data) => GetProfileSuccess ({ data: data})),
        catchError((err) => of(GetProfileFail({ payload: err})))
        /*map(profile => ({ type: ProfileActionTypes.GetProfileSuccess, payload: profile, data: profile })),
        catchError((err) => EMPTY)*/
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) {}
}
