import { User } from "@auth0/auth0-angular";
import { ActionReducerMap } from "@ngrx/store";
import { MuroEffects } from "./muro/muro.effects";
import { IMuroState, muroreducer } from "./muro/muro.reducer";
import { ProfileEffects } from "./profile/profile.effects";
import { IProfileState, profilereducer } from "./profile/profile.reducer";
import { ProfilesEffects } from "./profiles/profiles.effects";
import { IProfilesState, profilesreducer } from "./profiles/profiles.reducer";
import { TimelineEffects } from "./timeline/timeline.effects";
import { ITimelineState, timelinereducer } from "./timeline/timeline.reducer";

export interface IAppState {
  profile: IProfileState;
  muro: IMuroState;
  timeline: ITimelineState;
  profiles: IProfilesState;
}

export const appReducers: ActionReducerMap<IAppState> = {
  profile: profilereducer,
  timeline: timelinereducer,
  profiles: profilesreducer,
  muro: muroreducer
};

export const EffectsArray: any[] = [
    ProfileEffects,
    TimelineEffects,
    ProfilesEffects,
    MuroEffects
  ];
