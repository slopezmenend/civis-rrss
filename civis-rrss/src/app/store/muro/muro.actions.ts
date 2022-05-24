import { Action, createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Tweet } from 'src/app/models/Tweet';

export enum MuroActionTypes {
    GetMuroLoad = '[Muro] Get Muro',
    GetMuroSuccess = '[Muro] Get Muro Success',
    GetMuroFail = '[Muro] Get Muro Fail',
    crearComentario = '[Muro] crearComentario',
    crearComentarioSuccess = '[Muro] crearComentario Success',
    crearComentarioFail = '[Muro] crearComentario Fail',
    añadirComentario = '[Muro] Añadir Comentario',
    sumarComentario = '[Muro] Sumar Comentario'
 }

export const GetMuroLoad = createAction(
  MuroActionTypes.GetMuroLoad,
  props <{user_id:number, page:number}>()
);

export const GetMuroSuccess = createAction(
  MuroActionTypes.GetMuroSuccess,
  props < {data: Tweet[]}>()
);

export const GetMuroFail = createAction(
  MuroActionTypes.GetMuroFail,
  props <{payload: any}>()
);

export const crearComentario = createAction(
  MuroActionTypes.crearComentario,
  props <{$user_id:number, $parent_id:number, $titulo: string, $texto:string}>()
);

export const crearComentarioSuccess = createAction(
  MuroActionTypes.crearComentarioSuccess
);

export const crearComentarioFail = createAction(
  MuroActionTypes.crearComentarioFail,
  props <{payload: any}>()
);

export const añadirComentario = createAction(
  MuroActionTypes.añadirComentario,
  props < {tweet:Tweet}>()
);

export const sumarComentario = createAction(
  MuroActionTypes.añadirComentario,
  props < {parent_id:number}>()
);
