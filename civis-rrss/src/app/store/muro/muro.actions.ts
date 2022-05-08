import { Action, createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Tweet } from 'src/app/models/Tweet';

export enum MuroActionTypes {
    GetMuroLoad = '[Muro] Get Muro',
    GetMuroSuccess = '[Muro] Get Muro Success',
    GetMuroFail = '[Muro] Get Muro Fail',
 }

export const GetMuroLoad = createAction(
  MuroActionTypes.GetMuroLoad,
  props <{user_id:number}>()
);

export const GetMuroSuccess = createAction(
  MuroActionTypes.GetMuroSuccess,
  props < {data: Tweet[]}>()
);

export const GetMuroFail = createAction(
  MuroActionTypes.GetMuroFail,
  props <{payload: any}>()
);
