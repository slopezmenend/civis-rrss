import { Action, createReducer, on } from '@ngrx/store';
import { initialUser, User } from 'src/app/models/User';
import { IAppState } from '../AppState';
import { GetProfileLoad, GetProfileSuccess, GetProfileFail, PostFollowSuccess, PostUnFollowSuccess, PostFollow, PostFollowFail, PostUnFollow, PostUnFollowFail, AuthFail, AuthSuccess, Auth}  from './profile.actions';

export interface IProfileState {
    user_id: number;
    data: User;
    seguido: boolean;
    isLoading: boolean;
    message: string;
}

export interface IFollows {
  data: User[];
  message: string;
}

const initialState: IProfileState = {
    user_id: 0,
    data: initialUser,
    seguido: false,
    isLoading: false,
    message: ''
};

const _profilereducer = createReducer (
  initialState,
  on (GetProfileLoad, (state, {user_id}) => ( { ...state , isLoading:true, user_id: user_id})),
  on (GetProfileSuccess, ( state, {data, seguido } ) => (
    console.log (data, seguido),
    { ...state , isLoading:false, message: 'Perfil cargado correctamente!', data: data, seguido: seguido}),
    ),
  on (GetProfileFail, ( state, {payload} ) => (
    { ...initialState , isLoading:false, message: payload})),
    on (PostFollow, (state, {user_id, seguidor_id}) => ( { ...state , seguido: true})),
    on (PostFollowSuccess, ( state, {data, seguido } ) => (
      console.log (data, seguido),
      { ...state ,  message: 'Follow creado correctamente!', seguido: seguido}),
      ),
      on (PostFollowFail, ( state, {payload} ) => (
      { ...initialState , isLoading:false, message: payload, seguido: false})),
      on (PostUnFollow, (state, {user_id, seguidor_id}) => ( { ...state , seguido: false})),
      on (PostUnFollowSuccess, ( state, {data, seguido } ) => (
        console.log (data, seguido),
        { ...state ,  message: 'Follow borrado correctamente!', seguido: seguido}),
        ),
        on (PostUnFollowFail, ( state, {payload} ) => (
        { ...initialState , isLoading:false, message: payload, seguido: true})),
        on (Auth, (state, {email}) => ( { ...state , user_id:0})),
        on (AuthSuccess, ( state, {user_id} ) => (
          console.log ("Logueado como: " , user_id),
          { ...state ,  message: 'Usuario logeado correctamente!', user_id: user_id}),
          ),
          on (AuthFail, ( state, {payload} ) => (
          { ...initialState , isLoading:false, message: payload, seguido: true, user_id: 0 }))
);

export function profilereducer (state:IProfileState = initialState, action: Action): IProfileState
{
  return _profilereducer (state, action);
}
