import { Action, createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Tweet } from 'src/app/models/Tweet';

export enum MuroActionTypes {
    GetMuroLoad = '[Muro] Get Muro',
    GetMuroSuccess = '[Muro] Get Muro Success',
    GetMuroFail = '[Muro] Get Muro Fail',
    reaccionar = '[Muro] crearReaccion',
    reaccionarSuccess = '[Muro] crearReaccion Success',
    reaccionarFail = '[Muro] crearReaccion Fail',
    borrarReaccion = '[Muro] borrarReaccion',
    borrarReaccionSuccess = '[Muro] borrarReaccion Success',
    borrarReaccionFail = '[Muro] borrarReaccion Fail',
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

export const reaccionar = createAction(
  MuroActionTypes.reaccionar,
  props <{id:number, user_id:number, reaccion: number}>()
);

export const reaccionarSuccess = createAction(
  MuroActionTypes.reaccionarSuccess
);

export const reaccionarFail = createAction(
  MuroActionTypes.reaccionarFail,
  props <{payload: any}>()
);

export const borrarReaccion = createAction(
  MuroActionTypes.borrarReaccion,
  props <{id:number, user_id:number}>()
);

export const borrarReaccionSuccess = createAction(
  MuroActionTypes.borrarReaccionSuccess
);

export const borrarReaccionFail = createAction(
  MuroActionTypes.borrarReaccionFail,
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
