import { Action, createReducer, on } from '@ngrx/store';
import { Tweet } from 'src/app/models/Tweet';
import { User } from 'src/app/models/User';
import { IAppState } from '../AppState';
import { SearchProfilesLoad, SearchProfilesSuccess, SearchProfilesFail, GetFollowersFail, GetFollowersLoad, GetFollowersSuccess, GetFollowingFail, GetFollowingLoad, GetFollowingSuccess}  from './profiles.actions';

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
    { ...state , isLoading:false, message: 'Perfiles buscados correctamente!', data: data})
    ),
  on (SearchProfilesFail, ( state, {payload} ) => (
    { ...initialState , isLoading:false, message: payload})),
    on (GetFollowingLoad, (state, {user_id}) => ( { ...state , isLoading:true})),
    on (GetFollowingSuccess, ( state, {data} ) => (
        console.log ("Estamos en el FollowingSuccess con" , data),
      { ...state , isLoading:false, message: 'Seguidos cargados correctamente!', data: data})
      ),
    on (GetFollowingFail, ( state, {payload} ) => (
      { ...initialState , isLoading:false, message: payload})),
      on (GetFollowersLoad, (state) => ( { ...state, isLoading:true})),
      on (GetFollowersSuccess, ( state, {data} ) => (
          console.log ("Estamos en el FollowersSuccess con" , data),
        { ...state , isLoading:false, message: 'Seguidos cargados correctamente!', data: data})
        ),
      on (GetFollowersFail, ( state, {payload} ) => (
        { ...initialState , isLoading:false, message: payload})),
);

export function profilesreducer (state:IProfilesState = initialState, action: Action): IProfilesState
{
  return _profilesreducer (state, action);
}

