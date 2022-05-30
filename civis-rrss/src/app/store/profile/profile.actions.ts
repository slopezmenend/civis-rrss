import { Action, createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/User';

export enum ProfileActionTypes {
    GetProfileLoad = '[Profile] Get Profile',
    GetProfileSuccess = '[Profile] Get Profile Success',
    GetProfileFail = '[Profile] Get Profile Fail',
    PostFollow = '[Profile] Follow',
    PostFollowSuccess = '[Profile] Follow Success',
    PostFollowFail = '[Profile] Follow Fail',
    PostUnFollow = '[Profile] UnFollow',
    PostUnFollowSuccess = '[Profile] UnFollow Success',
    PostUnFollowFail = '[Profile] UnFollow Fail',
    AuthLoad = '[Profile] AuthLoad',
    AuthSuccess = '[Profile] AuthSuccess',
    AuthFail = '[Profile] AuthFail',
    CompleteUser = '[Profile] CompleteUser',
    CompleteUserSuccess = '[Profile] CompleteUser Success',
    CompleteUserFail = '[Profile] CompleteUser Fail',
    UpdateProfile = '[Profile] Update',
    UpdateProfileSuccess = '[Profile] Update Success',
    UpdateProfileFail = '[Profile] Update Fail',
  }

export const GetProfileLoad = createAction(
  ProfileActionTypes.GetProfileLoad,
  props < {user_id: number}>()
);

export const GetProfileSuccess = createAction(
  ProfileActionTypes.GetProfileSuccess,
  props < {data: User, seguido: boolean}>()
);

export const GetProfileFail = createAction(
  ProfileActionTypes.GetProfileFail,
  props <{payload: any}>()
);

export const PostFollow = createAction(
  ProfileActionTypes.PostFollow,
  props < {user_id: number, seguidor_id:number }>()
);

export const PostFollowSuccess = createAction(
  ProfileActionTypes.PostFollowSuccess,
  props < {data: User, seguido: boolean}>()
);

export const PostFollowFail = createAction(
  ProfileActionTypes.PostFollowFail,
  props <{payload: any}>()
);

export const PostUnFollow = createAction(
  ProfileActionTypes.PostUnFollow,
  props < {user_id: number, seguidor_id: number}>()
);

export const PostUnFollowSuccess = createAction(
  ProfileActionTypes.PostUnFollowSuccess,
  props < {data: User, seguido: boolean}>()
);

export const PostUnFollowFail = createAction(
  ProfileActionTypes.PostUnFollowFail,
  props <{payload: any}>()
);

export const Auth = createAction(
  ProfileActionTypes.AuthLoad,
  props < {email:string}>()
);

export const AuthSuccess = createAction(
  ProfileActionTypes.AuthSuccess,
  props < {user_id: number}>()
);

export const AuthFail = createAction(
  ProfileActionTypes.AuthFail,
  props <{payload: any}>()
);

export const CompleteUser = createAction(
  ProfileActionTypes.CompleteUser,
  props < {email:string, name:string, foto:string}>()
);

export const CompleteUserSuccess = createAction(
  ProfileActionTypes.CompleteUserSuccess,
  props < {user_id: number}>()
);

export const CompleteUserFail = createAction(
  ProfileActionTypes.CompleteUserFail,
  props <{payload: any}>()
);

export const UpdateProfile = createAction(
  ProfileActionTypes.UpdateProfile,
  props < {user_id:number, email:string, nombre:string, circunscripcion:string,
    partido:string, grupo:string, biografia:string, ideologia:number,
    ideologiaadicional:number, web:string, facebook:string,
    twitter:string, instagram:string, youtube:string}>()
);


export const UpdateProfileSuccess = createAction(
  ProfileActionTypes.UpdateProfileSuccess
);

export const UpdateProfileFail = createAction(
  ProfileActionTypes.UpdateProfileFail,
  props <{payload: any}>()
);
