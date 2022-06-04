import { Action, createReducer, on } from '@ngrx/store';
import { Tweet } from 'src/app/models/Tweet';
import { User } from 'src/app/models/User';
import { IAppState } from '../AppState';
import { GetTimelineLoad, GetTimelineSuccess, GetTimelineFail, GetMuroLoad, GetMuroSuccess, GetMuroFail, crearComentario, crearComentarioFail, crearComentarioSuccess, añadirComentario, sumarComentario, reaccionar, reaccionarFail, reaccionarSuccess, borrarReaccion, borrarReaccionFail, borrarReaccionSuccess, encantaComentario, odioComentario, disgustaComentario, gustaComentario, igualComentario, GetComentariosLoad, GetComentariosFail, GetComentariosSuccess}  from './tweets.actions';

export const initialTweets:Tweet[] = [];

export interface ITweetsState {
    //user_id: number;
    data: Tweet[];
    isLoading: boolean;
    page:number;
    message: string;
}

export const initialState: ITweetsState = {
    //user_id: 0,
    data: initialTweets,
    isLoading: false,
    page:1,
    message: ''
};

const _tweetsreducer = createReducer (
  initialState,
  on (GetTimelineLoad, (state, {user_id, page}) => ( { ...state , user_id: user_id, isLoading:true, page: state.page+1})),
  on (GetTimelineSuccess, ( state, {data} ) => (
      console.log (data),
    { ...state , isLoading:false, message: 'Muro cargado correctamente!', data: state.data.concat(data)})
    ),
  on (GetTimelineFail, ( state, {payload} ) => (
    { ...initialState , isLoading:false, message: payload})),
    on (GetComentariosLoad, (state, {parent_id, page}) => ( { ...state, data:[], isLoading:true, page: state.page+1})),
    on (GetComentariosSuccess, ( state, {data} ) => (
        console.log (data),
      { ...state , isLoading:false, message: 'Comentarios cargados correctamente!', data: state.data.concat(data)})
      ),
    on (GetComentariosFail, ( state, {payload} ) => (
      { ...initialState , isLoading:false, message: payload})),
  on (GetMuroLoad, (state, {user_id}) => ( { ...state , user_id: user_id, isLoading:true, page:state.page+1})),
  on (GetMuroSuccess, ( state, {data} ) => (
      console.log (data),
    { ...state , isLoading:false, message: 'Muro cargado correctamente!', data: state.data.concat(data)})
    ),
  on (GetMuroFail, ( state, {payload} ) => (
    { ...initialState , isLoading:false, message: payload})),
  on (reaccionar, (state, {id, user_id, reaccion}) => ( { ...state })),
  on (reaccionarSuccess, ( state ) => (
    { ...state, message: 'reaccionado correctamente!'})
    ),
  on (reaccionarFail, ( state, {payload} ) => (
    { ...state , isLoading:false, message: payload})),
    on (borrarReaccion, (state, {id, user_id}) => ( { ...state })),
    on (borrarReaccionSuccess, ( state ) => (
      { ...state, message: 'reaccionado correctamente!'})
      ),
    on (borrarReaccionFail, ( state, {payload} ) => (
      { ...state , isLoading:false, message: payload})),
        on (crearComentario, (state, {$user_id, $parent_id, $titulo, $texto}) => ( { ...state , isLoading:true})),
    on (crearComentarioSuccess, ( state ) => (
      { ...state , isLoading:false, message: 'Comentario creado correctamente!'})
      ),
    on (crearComentarioFail, ( state, {payload} ) => (
      { ...initialState , isLoading:false, message: payload})),
    /*on (añadirComentario, ( state, {tweet} ) => (
        console.log ("Añadiendo el tweet: ", tweet, state.data),
      { ...state , message: 'Comentario añadido correctamente!', data: [tweet].concat(state.data)}),
      //console.log ("Añadido el tweet: ", state.data),
      ),*/
    on (sumarComentario, ( state, {parent_id} ) => (
      console.log ("Actualizando contador comentarios de post ", parent_id),
    { ...state , message: 'Comentario sumado correctamente!', data: state.data.map (
      comentario => {
        let com = {...comentario};
        if (com.id == parent_id) {
          com.ncomentarios = com.ncomentarios + 1;
          console.log ("[Tweets Reducer] Modificado comentario", com);
        }
        return com;
      })
    })),

    on (encantaComentario, ( state, {id, diff} ) => (
      console.log ("[Tweets Reducer] encantaComentario", id, state.data),
    { ...state , message: 'Comentario sumado correctamente!', data: state.data.map (
      comentario => {
        let com = {...comentario};
        if (com.id == id) {
          com.encanta = com.encanta + diff;
          if (diff < 0) com.reaccion = 0;
          else com.reaccion = 1;
          console.log ("[Tweets Reducer] Modificado comentario", com);
        }
        return com;
      }
    )})),

    on (gustaComentario, ( state, {id, diff} ) => (
      console.log ("[Tweets Reducer] gustaComentario", id),
    { ...state , message: 'Comentario sumado correctamente!', data: state.data.map (
      comentario => {
        let com = {...comentario};
        if (com.id == id){
          com.gusta = com.gusta + diff;
        if (diff < 0) com.reaccion = 0;
        else com.reaccion = 2;
        console.log ("[Tweets Reducer] Modificado comentario", com);
      }
        return com;
      }
    )})),

    on (igualComentario, ( state, {id, diff} ) => (
      console.log ("[Tweets Reducer] igualComentario", id, state.data),
    { ...state , message: 'Comentario sumado correctamente!', data: state.data.map (
      comentario => {
        let com = {...comentario};
        if (com.id == id) {
          com.igual = com.igual + diff;
          if (diff < 0) com.reaccion = 0;
          else com.reaccion = 3;
          console.log ("[Tweets Reducer] Modificado comentario", com);
        }
        return com;
      }
    )})),

    on (disgustaComentario, ( state, {id, diff} ) => (
      console.log ("[Tweets Reducer] disgustaComentario", id),
    { ...state , message: 'Comentario sumado correctamente!', data: state.data.map (
      comentario => {
        let com = {...comentario};
        if (com.id == id) {
          com.disgusta = com.disgusta + diff;
          if (diff < 0) com.reaccion = 0;
          else com.reaccion = 4;
          console.log ("[Tweets Reducer] Modificado comentario", com);
        }
        return com;
      }
    )})),

    on (odioComentario, ( state, {id, diff} ) => (
      console.log ("[Tweets Reducer] odioComentario", id),
    { ...state , message: 'Comentario sumado correctamente!', data: state.data.map (
      comentario => {
        let com = {...comentario};
        if (com.id == id) {
          com.odia = com.odia + diff;
          if (diff < 0) com.reaccion = 0;
          else com.reaccion = 5;
          console.log ("[Tweets Reducer] Modificado comentario", com);
        }

        return com;
      }
    )})),

);

export function tweetsreducer (state:ITweetsState = initialState, action: Action): ITweetsState
{
  return _tweetsreducer (state, action);
}
