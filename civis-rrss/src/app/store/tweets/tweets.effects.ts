import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
//import { Timeline } from 'console';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BackendService } from 'src/app/services/backend.service';
import { IAppState } from '../AppState';
import { borrarReaccionFail, borrarReaccionSuccess, crearComentarioFail, crearComentarioSuccess, GetComentariosFail, GetComentariosSuccess, GetMuroFail, GetMuroSuccess, GetTimelineFail, GetTimelineSuccess, reaccionarFail, reaccionarSuccess, TweetsActionTypes } from './tweets.actions';

@Injectable()
export class TweetsEffects {
  loadTimeline$ = createEffect(() => this.actions$.pipe(
    ofType(TweetsActionTypes.GetTimelineLoad),
    mergeMap(({user_id, page}) => this.backendService.getTimeline(user_id, page)
      .pipe(
        map((data) => (
          console.log ("[TweetsEffects] LoadTimeline Effect:", data, data.data),
          GetTimelineSuccess ({ data: data.data}))
        ),
        catchError((data) => of(GetTimelineFail({ payload: data.message})))
        /*map(Timeline => ({ type: TweetsActionTypes.GetTimelineSuccess, payload: Timeline, data: Timeline })),
        catchError((err) => EMPTY)*/
      )
    )
  ));

  loadMuro$ = createEffect(() => this.actions$.pipe(
    ofType(TweetsActionTypes.GetMuroLoad),
    mergeMap(({user_id, page}) => this.backendService.getMuro(user_id, page)
      .pipe(
        map((data) => (
          console.log ("[TweetsEffects] LoadMuro Effect:", data, data.data),
          GetMuroSuccess ({ data: data.data}))
        ),
        catchError((data) => of(GetMuroFail({ payload: data.message})))
      )
    )
  ));

  loadComentarios$ = createEffect(() => this.actions$.pipe(
    ofType(TweetsActionTypes.GetComentariosLoad),
    mergeMap(({parent_id, page}) => this.backendService.getComentarios(parent_id, page)
      .pipe(
        map((data) => (
          console.log ("[TweetsEffects] LoadComentario Effect:", data, data.data),
          GetComentariosSuccess ({ data: data.data}))
        ),
        catchError((data) => of(GetComentariosFail({ payload: data.message})))
      )
    )
  ));

  reaccionar$ = createEffect(() => this.actions$.pipe(
    ofType(TweetsActionTypes.reaccionar),
    mergeMap(({id, user_id, reaccion}) => this.backendService.reaccionar(id, user_id, reaccion)
      .pipe(
        map((data) => (
          reaccionarSuccess ())
        ),
        catchError((data) => of(reaccionarFail({ payload: data.message})))
      )
    )
  ));

  borrarReaccion$ = createEffect(() => this.actions$.pipe(
    ofType(TweetsActionTypes.borrarReaccion),
    mergeMap(({id, user_id, reaccion}) => this.backendService.borrarReaccion(id, user_id)
      .pipe(
        map((data) => (
          borrarReaccionSuccess ())
        ),
        catchError((data) => of(borrarReaccionFail({ payload: data.message})))
      )
    )
  ));

  crearComentario$ = createEffect(() => this.actions$.pipe(
    ofType(TweetsActionTypes.crearComentario),
    mergeMap(({$user_id, $parent_id, $titulo, $texto}) => this.backendService.crearCommentario($user_id, $parent_id, $titulo, $texto)
      .pipe(
        map((res) => (
          //crearComentarioSuccess ()
          crearComentarioSuccess ()
        ),
        catchError((res) => of(crearComentarioFail({ payload: res})))
      )
    )
  )));

  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) {}
}
