import { Action, createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/User';

export enum ProfileActionTypes {
    GetProfileLoad = '[Profile] Get Profile',
    GetProfileSuccess = '[Profile] Get Profile Success',
    GetProfileFail = '[Profile] Get Profile Fail',
    PostProfile = '[Profile] Post Profile',
    PostProfileSuccess = '[Profile] Post Profile Success',
    PostProfileFail = '[Profile] Post Profile Fail',
}


/*export class GetProfileLoad implements Action {
    public readonly type = ProfileActionTypes.GetProfileLoad;
}*/

export const GetProfileLoad = createAction(
  ProfileActionTypes.GetProfileLoad
);

export const GetProfileSuccess = createAction(
  ProfileActionTypes.GetProfileSuccess,
  props < {data: User}>()
);

export const GetProfileFail = createAction(
  ProfileActionTypes.GetProfileFail,
  props <{payload: any}>()
);

/*
export class GetProfileSuccess implements Action {
    public readonly type = ProfileActionTypes.GetProfileSuccess;

    constructor(public payload: User) { }
}

export class GetProfileFail implements Action {
    public readonly type = ProfileActionTypes.GetProfileFail;

    constructor(public error: HttpErrorResponse) { }
}*/

/*export class PostProfile implements Action {
    public readonly type = ProfileActionTypes.PostProfile;

    constructor(public payload: User) { }
}

export class PostProfileSuccess implements Action {
    public readonly type = ProfileActionTypes.PostProfileSuccess;

    constructor(public payload: User) { }
}

export class PostProfileFail implements Action {
    public readonly type = ProfileActionTypes.PostProfileFail;

    constructor(){} //public error: HttpErrorResponse) { }
}*/

//export type ProfileActions = GetProfileLoad | GetProfileSuccess | GetProfileFail;
