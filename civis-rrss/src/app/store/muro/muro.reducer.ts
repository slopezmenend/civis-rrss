import { Action, createReducer, on } from '@ngrx/store';
import { Tweet } from 'src/app/models/Tweet';
import { User } from 'src/app/models/User';
import { IAppState } from '../AppState';
import { GetMuroLoad, GetMuroSuccess, GetMuroFail, crearComentario, crearComentarioFail, crearComentarioSuccess, añadirComentario, sumarComentario}  from './muro.actions';

export const initialMuro:Tweet[] = [];

export interface IMuroState {
    user_id: number;
    data: Tweet[];
    isLoading: boolean;
    page:number;
    message: string;
}

export const initialState: IMuroState = {
    user_id: 0,
    data: initialMuro,
    isLoading: false,
    page:1,
    message: ''
};

const _muroreducer = createReducer (
  initialState,
  on (GetMuroLoad, (state, {user_id}) => ( { ...state , user_id: user_id, isLoading:true, page:state.page+1})),
  on (GetMuroSuccess, ( state, {data} ) => (
      console.log (data),
    { ...state , isLoading:false, message: 'Muro cargado correctamente!', data: state.data.concat(data)})
    ),
  on (GetMuroFail, ( state, {payload} ) => (
    { ...initialState , isLoading:false, message: payload})),
    on (crearComentario, (state, {$user_id, $parent_id, $titulo, $texto}) => ( { ...state , isLoading:true})),
    on (crearComentarioSuccess, ( state ) => (
      { ...state , isLoading:false, message: 'Comentario creado correctamente!'})
      ),
    on (crearComentarioFail, ( state, {payload} ) => (
      { ...initialState , isLoading:false, message: payload})),
    on (añadirComentario, ( state, {tweet} ) => (
        console.log ("Añadiendo el tweet: ", tweet, state.data),
      { ...state , message: 'Comentario añadido correctamente!', data: [tweet].concat(state.data)}),
      //console.log ("Añadido el tweet: ", state.data),
      ),
    on (sumarComentario, ( state, {parent_id} ) => (
      console.log ("Actualizando contador comentarios de post ", parent_id),
    { ...state , message: 'Comentario sumado correctamente!', data: state.data.map (
      function (comentario) {
        /*let comm = <Tweet> comentario;
        console.log ("Pintando elemento", comm, " con ", comm.ncomentarios);
        comm.ncomentarios = comm.ncomentarios+1;*/
        return comentario;
        //if (data.id == parent_id) data.ncomentarios = data.ncomentarios + 1; return data;
      })
    })),
);

export function muroreducer (state:IMuroState = initialState, action: Action): IMuroState
{
  return _muroreducer (state, action);
}
