import { Action, createReducer, on } from '@ngrx/store';
import { initialUser, User } from 'src/app/models/User';
import { IAppState } from '../AppState';
import { GetProfileLoad, GetProfileSuccess, GetProfileFail, PostFollowSuccess, PostUnFollowSuccess, PostFollow, PostFollowFail, PostUnFollow, PostUnFollowFail, AuthFail, AuthSuccess, Auth, UpdateProfile, UpdateProfileFail, UpdateProfileSuccess, CompleteUser, CompleteUserFail, CompleteUserSuccess}  from './profile.actions';

export interface IProfileState {
    user_id: number;
    data: User;
    seguido: boolean;
    isLoading: boolean;
    message: string;
}

export interface IFollow {
  id: number,
  seguido_id: number,
  seguidor_id: number,
  created_at: string,
  updated_at: string
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
  on (GetProfileLoad, (state, {user_id}) => ( { ...state , isLoading:true})),
  on (GetProfileSuccess, ( state, {data, seguido } ) => (
    console.log ("Perfil cargado: ", data, seguido),
    { ...state , isLoading:false, message: 'Perfil cargado correctamente!', data: data, seguido: seguido}),
    ),
  on (GetProfileFail, ( state, {payload} ) => (
    { ...initialState , isLoading:false, message: payload})),
    on (PostFollow, (state, {user_id}) => ( { ...state , data: {... state.data, follow:true, followers: state.data.followers + 1}})),
    on (PostFollowSuccess, ( state, {data, seguido } ) => (
      console.log (data, seguido),
      { ...state ,  message: 'Follow creado correctamente!', seguido: seguido}),
      ),
      on (PostFollowFail, ( state, {payload} ) => (
      { ...initialState , isLoading:false, message: payload, seguido: false})),
      on (PostUnFollow, (state, {user_id}) => ( { ...state , data: {... state.data, follow:false, followers: state.data.followers - 1}})),
      on (PostUnFollowSuccess, ( state, {data, seguido } ) => (
        console.log (data, seguido),
        { ...state ,  message: 'Follow borrado correctamente!', seguido: seguido}),
        ),
        on (PostUnFollowFail, ( state, {payload} ) => (
        { ...initialState , isLoading:false, message: payload, seguido: true})),
        on (Auth, (state, {email}) => ( { ...state})),
        on (AuthSuccess, ( state, {user_id} ) => (
          console.log ("Logueado como: " , user_id),
          { ...state ,  message: 'Usuario logeado correctamente!', user_id: user_id}),
          ),
          on (AuthFail, ( state, {payload} ) => (
          { ...initialState , isLoading:false, message: payload, seguido: true })),
          on (CompleteUser, (state, {email, name, foto}) => ( { ...state})),
          on (CompleteUserSuccess, ( state, {user_id} ) => (
            console.log ("Logueado como: " , user_id),
            { ...state ,  message: 'Usuario completado correctamente!', user_id: user_id}),
            ),
            on (CompleteUserFail, ( state, {payload} ) => (
            { ...initialState , isLoading:false, message: payload, seguido: true })),
          on (UpdateProfile, (state, {user_id, email, nombre, circunscripcion,
            partido, grupo, biografia, ideologia,
            ideologiaadicional, web, facebook,
            twitter, instagram, youtube}) => ( { ...state ,
              data: {...state.data, nombre: nombre, circunscripcion: circunscripcion,
                partido:partido, grupo:grupo, biografia:biografia,
                ideologia: ideologia, ideologiaadicional: ideologiaadicional,
                web: web, facebook: facebook, twitter: twitter, instagram: instagram, youtube:youtube}})),
          on (UpdateProfileSuccess, ( state ) => (
            console.log ("Perfil actualizado: " , state.user_id),
            { ...state ,  message: 'Usuario actualizado correctamente!'}),
            ),
            on (UpdateProfileFail, ( state, {payload} ) => (
            { ...initialState , isLoading:false, message: payload, seguido: true }))
);

export function profilereducer (state:IProfileState = initialState, action: Action): IProfileState
{
  return _profilereducer (state, action);
}
