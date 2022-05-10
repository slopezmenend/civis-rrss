import { Action, createReducer, on } from '@ngrx/store';
import { Tweet } from 'src/app/models/Tweet';
import { User } from 'src/app/models/User';
import { IAppState } from '../AppState';
import { GetTimelineLoad, GetTimelineSuccess, GetTimelineFail}  from './timeline.actions';

export const initialTimeline:Tweet[] = [];

export interface ITimelineState {
    user_id: number;
    data: Tweet[];
    isLoading: boolean;
    page: number;
    message: string;
}

export const initialState: ITimelineState = {
    user_id: 0,
    data: initialTimeline,
    isLoading: false,
    page: 1,
    message: ''
};

const _timelinereducer = createReducer (
  initialState,
  on (GetTimelineLoad, (state, {user_id, page}) => ( { ...state , user_id: user_id, isLoading:true, page: state.page+1})),
  on (GetTimelineSuccess, ( state, {data} ) => (
      console.log (data),
    { ...state , isLoading:false, message: 'Muro cargado correctamente!', data: state.data.concat(data)})
    ),
  on (GetTimelineFail, ( state, {payload} ) => (
    { ...initialState , isLoading:false, message: payload}))
);

export function timelinereducer (state:ITimelineState = initialState, action: Action): ITimelineState
{
  return _timelinereducer (state, action);
}

/*
        case TimelineActionTypes.GetTimelineSuccess: {
            return {
                ...state,
                Timeline: (<GetTimelineSuccess>action).Timeline,
                isLoading: false,
                message: 'Perfil cargado correctamente!'
            }
        }
        case TimelineActionTypes.GetTimelineFail: {
            return {
                Timeline: initialUser,
                isLoading: false,
                message: 'Algo fue mal!'
            }
        }
        /*case TimelineActionTypes.PostTimeline: {
            return {
                ...state,
                isLoading: true
            }
        }

        case TimelineActionTypes.PostTimelineSuccess: {
            const updatedTimeline = action.payload;

            return {
                ...state,
                Timeline: updatedTimeline,
                isLoading: false,
                message: 'Timeline posted Successfully!'
            }
        }
        case TimelineActionTypes.PostTimelineFail: {
            return {
                Timeline: initialUser,
                isLoading: false,
                message: 'Algo fue mal!'
            }
        }
        default:
            return state;
    }
}
*/
