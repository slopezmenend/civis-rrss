import { Action, createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Tweet } from 'src/app/models/Tweet';
import { User } from 'src/app/models/User';

export enum ProfilesActionTypes {
    SearchProfilesLoad = '[Profiles] Search Profiles',
    SearchProfilesSuccess = '[Timeline] Search Profiles Success',
    SearchProfilesFail = '[Timeline] Search Profiles Fail',
    GetFollowingLoad = '[Profiles] Get Following',
    GetFollowingSuccess = '[Timeline] Get Following Success',
    GetFollowingFail = '[Timeline] Get Following Fail',
    GetFollowersLoad = '[Profiles] Get Followers',
    GetFollowersSuccess = '[Timeline] Get Followers Success',
    GetFollowersFail = '[Timeline] Get Followers Fail',
}


/*export class GetTimelineLoad implements Action {
    public readonly type = TimelineActionTypes.GetTimelineLoad;
}*/

export const SearchProfilesLoad = createAction(
  ProfilesActionTypes.SearchProfilesLoad,
  props <{pattern:string, user_id:number}>()
);

export const SearchProfilesSuccess = createAction(
  ProfilesActionTypes.SearchProfilesSuccess,
  props < {data: User[]}>()
);

export const SearchProfilesFail = createAction(
  ProfilesActionTypes.SearchProfilesFail,
  props <{payload: any}>()
);

export const GetFollowingLoad = createAction(
  ProfilesActionTypes.GetFollowingLoad,
  props < {user_id:number}>()
);

export const GetFollowingSuccess = createAction(
  ProfilesActionTypes.GetFollowingSuccess,
  props < {data: User[]}>()
);

export const GetFollowingFail = createAction(
  ProfilesActionTypes.GetFollowingFail,
  props <{payload: any}>()
);

export const GetFollowersLoad = createAction(
  ProfilesActionTypes.GetFollowersLoad,
  props < {user_id:number}>()
);

export const GetFollowersSuccess = createAction(
  ProfilesActionTypes.GetFollowersSuccess,
  props < {data: User[]}>()
);

export const GetFollowersFail = createAction(
  ProfilesActionTypes.GetFollowersFail,
  props <{payload: any}>()
);



/*
export class GetTimelineSuccess implements Action {
    public readonly type = TimelineActionTypes.GetTimelineSuccess;

    constructor(public payload: User) { }
}

export class GetTimelineFail implements Action {
    public readonly type = TimelineActionTypes.GetTimelineFail;

    constructor(public error: HttpErrorResponse) { }
}*/

/*export class PostTimeline implements Action {
    public readonly type = TimelineActionTypes.PostTimeline;

    constructor(public payload: User) { }
}

export class PostTimelineSuccess implements Action {
    public readonly type = TimelineActionTypes.PostTimelineSuccess;

    constructor(public payload: User) { }
}

export class PostTimelineFail implements Action {
    public readonly type = TimelineActionTypes.PostTimelineFail;

    constructor(){} //public error: HttpErrorResponse) { }
}*/

//export type TimelineActions = GetTimelineLoad | GetTimelineSuccess | GetTimelineFail;
