/*import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
//import { Timeline } from 'console';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BackendService } from 'src/app/services/backend.service';
import { IAppState } from '../AppState';
import { GetTimelineFail, GetTimelineSuccess, TimelineActionTypes } from './timeline.actions';

@Injectable()
export class TimelineEffects {

  loadTimeline$ = createEffect(() => this.actions$.pipe(
    ofType(TimelineActionTypes.GetTimelineLoad),
    mergeMap(({user_id, page}) => this.backendService.getTimeline(user_id, page)
      .pipe(
        map((data) => (
          console.log ("Datos:", data, data.data.data),
          GetTimelineSuccess ({ data: data.data.data}))
        ),
        catchError((data) => of(GetTimelineFail({ payload: data.message})))
        /*map(Timeline => ({ type: TimelineActionTypes.GetTimelineSuccess, payload: Timeline, data: Timeline })),
        catchError((err) => EMPTY)**
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) {}
}
*/
