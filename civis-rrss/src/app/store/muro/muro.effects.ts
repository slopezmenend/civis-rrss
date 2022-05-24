import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
//import { Timeline } from 'console';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BackendService } from 'src/app/services/backend.service';
import { IAppState } from '../AppState';
import { crearComentarioFail, crearComentarioSuccess, GetMuroFail, GetMuroSuccess, MuroActionTypes } from './muro.actions';

@Injectable()
export class MuroEffects {

  loadMuro$ = createEffect(() => this.actions$.pipe(
    ofType(MuroActionTypes.GetMuroLoad),
    mergeMap(({user_id, page}) => this.backendService.getMuro(user_id, page)
      .pipe(
        map((data) => (
          console.log ("Datos:", data, data.data.data),
          GetMuroSuccess ({ data: data.data.data}))
        ),
        catchError((data) => of(GetMuroFail({ payload: data.message})))
      )
    )
  ));

  crearComentario$ = createEffect(() => this.actions$.pipe(
    ofType(MuroActionTypes.crearComentario),
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
