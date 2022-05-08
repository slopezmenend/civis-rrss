import { Action, createReducer, on } from '@ngrx/store';
import { Tweet } from 'src/app/models/Tweet';
import { User } from 'src/app/models/User';
import { IAppState } from '../AppState';
import { SearchProfilesLoad, SearchProfilesSuccess, SearchProfilesFail}  from './profiles.actions';

export const initialProfiles:User[] = [];

export interface IProfilesState {
    pattern: string;
    data: User[];
    isLoading: boolean;
    message: string;
}

export const initialState: IProfilesState = {
    pattern: '',
    data: initialProfiles,
    isLoading: false,
    message: ''
};

const _profilesreducer = createReducer (
  initialState,
  on (SearchProfilesLoad, (state, {pattern}) => ( { ...state , pattern: pattern, isLoading:true})),
  on (SearchProfilesSuccess, ( state, {data} ) => (
      console.log (data),
    { ...state , isLoading:false, message: 'Muro cargado correctamente!', data: data})
    ),
  on (SearchProfilesFail, ( state, {payload} ) => (
    { ...initialState , isLoading:false, message: payload}))
);

export function profilesreducer (state:IProfilesState = initialState, action: Action): IProfilesState
{
  return _profilesreducer (state, action);
}

