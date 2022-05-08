import { Action, createReducer, on } from '@ngrx/store';
import { Tweet } from 'src/app/models/Tweet';
import { User } from 'src/app/models/User';
import { IAppState } from '../AppState';
import { GetMuroLoad, GetMuroSuccess, GetMuroFail}  from './muro.actions';

export const initialMuro:Tweet[] = [];

export interface IMuroState {
    user_id: number;
    data: Tweet[];
    isLoading: boolean;
    message: string;
}

export const initialState: IMuroState = {
    user_id: 0,
    data: initialMuro,
    isLoading: false,
    message: ''
};

const _muroreducer = createReducer (
  initialState,
  on (GetMuroLoad, (state, {user_id}) => ( { ...state , user_id: user_id, isLoading:true})),
  on (GetMuroSuccess, ( state, {data} ) => (
      console.log (data),
    { ...state , isLoading:false, message: 'Muro cargado correctamente!', data: data})
    ),
  on (GetMuroFail, ( state, {payload} ) => (
    { ...initialState , isLoading:false, message: payload}))
);

export function muroreducer (state:IMuroState = initialState, action: Action): IMuroState
{
  return _muroreducer (state, action);
}
