import { Action, createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Tweet } from 'src/app/models/Tweet';

export enum TweetsActionTypes {
    GetTimelineLoad = '[Tweets] Get Timeline',
    GetTimelineSuccess = '[Tweets] Get Timeline Success',
    GetTimelineFail = '[Tweets] Get Timeline Fail',
    GetComentariosLoad = '[Tweets] Get Comentarios',
    GetComentariosSuccess = '[Tweets] Get Comentarios Success',
    GetComentariosFail = '[Tweets] Get Comentarios Fail',
    GetMuroLoad = '[Tweets] Get Muro',
    GetMuroSuccess = '[Tweets] Get Muro Success',
    GetMuroFail = '[Tweets] Get Muro Fail',
    reaccionar = '[Tweets] crearReaccion',
    reaccionarSuccess = '[Tweets] crearReaccion Success',
    reaccionarFail = '[Tweets] crearReaccion Fail',
    borrarReaccion = '[Tweets] borrarReaccion',
    borrarReaccionSuccess = '[Tweets] borrarReaccion Success',
    borrarReaccionFail = '[Tweets] borrarReaccion Fail',
    crearComentario = '[Tweets] crearComentario',
    crearComentarioSuccess = '[Tweets] crearComentario Success',
    crearComentarioFail = '[Tweets] crearComentario Fail',
    añadirComentario = '[Tweets] Añadir Comentario',
    sumarComentario = '[Tweets] Sumar Comentario',
    encantaComentario = '[Tweets] Encanta Comentario',
    gustaComentario = '[Tweets] gusta Comentario',
    igualComentario = '[Tweets] igual Comentario',
    disgustaComentario = '[Tweets] disgusta Comentario',
    odioComentario = '[Tweets] Odio Comentario',
 }

 export const GetTimelineLoad = createAction(
  TweetsActionTypes.GetTimelineLoad,
  props <{user_id:number, page:number}>()
);

export const GetTimelineSuccess = createAction(
  TweetsActionTypes.GetTimelineSuccess,
  props < {data: Tweet[]}>()
);

export const GetTimelineFail = createAction(
  TweetsActionTypes.GetTimelineFail,
  props <{payload: any}>()
);

export const GetMuroLoad = createAction(
  TweetsActionTypes.GetMuroLoad,
  props <{user_id:number, page:number}>()
);

export const GetMuroSuccess = createAction(
  TweetsActionTypes.GetMuroSuccess,
  props < {data: Tweet[]}>()
);

export const GetMuroFail = createAction(
  TweetsActionTypes.GetMuroFail,
  props <{payload: any}>()
);

export const GetComentariosLoad = createAction(
  TweetsActionTypes.GetComentariosLoad,
  props <{parent_id:number, page:number}>()
);

export const GetComentariosSuccess = createAction(
  TweetsActionTypes.GetComentariosSuccess,
  props < {data: Tweet[]}>()
);

export const GetComentariosFail = createAction(
  TweetsActionTypes.GetComentariosFail,
  props <{payload: any}>()
);

export const reaccionar = createAction(
  TweetsActionTypes.reaccionar,
  props <{id:number, user_id:number, reaccion: number}>()
);

export const reaccionarSuccess = createAction(
  TweetsActionTypes.reaccionarSuccess
);

export const reaccionarFail = createAction(
  TweetsActionTypes.reaccionarFail,
  props <{payload: any}>()
);

export const borrarReaccion = createAction(
  TweetsActionTypes.borrarReaccion,
  props <{id:number, user_id:number}>()
);

export const borrarReaccionSuccess = createAction(
  TweetsActionTypes.borrarReaccionSuccess
);

export const borrarReaccionFail = createAction(
  TweetsActionTypes.borrarReaccionFail,
  props <{payload: any}>()
);

export const crearComentario = createAction(
  TweetsActionTypes.crearComentario,
  props <{$user_id:number, $parent_id:number, $titulo: string, $texto:string}>()
);

export const crearComentarioSuccess = createAction(
  TweetsActionTypes.crearComentarioSuccess
);

export const crearComentarioFail = createAction(
  TweetsActionTypes.crearComentarioFail,
  props <{payload: any}>()
);

export const añadirComentario = createAction(
  TweetsActionTypes.añadirComentario,
  props < {tweet:Tweet}>()
);

export const sumarComentario = createAction(
  TweetsActionTypes.añadirComentario,
  props < {parent_id:number}>()
);

export const encantaComentario = createAction(
  TweetsActionTypes.encantaComentario,
  props < {id:number, diff: number}>()
);

export const gustaComentario = createAction(
  TweetsActionTypes.gustaComentario,
  props < {id:number, diff: number}>()
);

export const igualComentario = createAction(
  TweetsActionTypes.igualComentario,
  props < {id:number, diff: number}>()
);

export const disgustaComentario = createAction(
  TweetsActionTypes.disgustaComentario,
  props < {id:number, diff: number}>()
);

export const odioComentario = createAction(
  TweetsActionTypes.odioComentario,
  props < {id:number, diff: number}>()
);

