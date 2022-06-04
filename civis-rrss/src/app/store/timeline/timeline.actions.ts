/*import { Action, createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Tweet } from 'src/app/models/Tweet';

export enum TimelineActionTypes {
    GetTimelineLoad = '[Timeline] Get Timeline',
    GetTimelineSuccess = '[Timeline] Get Timeline Success',
    GetTimelineFail = '[Timeline] Get Timeline Fail',
}


/*export class GetTimelineLoad implements Action {
    public readonly type = TimelineActionTypes.GetTimelineLoad;
}**

export const GetTimelineLoad = createAction(
  TimelineActionTypes.GetTimelineLoad,
  props <{user_id:number, page:number}>()
);

export const GetTimelineSuccess = createAction(
  TimelineActionTypes.GetTimelineSuccess,
  props < {data: Tweet[]}>()
);

export const GetTimelineFail = createAction(
  TimelineActionTypes.GetTimelineFail,
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
}**

//export type TimelineActions = GetTimelineLoad | GetTimelineSuccess | GetTimelineFail;
*/
