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
