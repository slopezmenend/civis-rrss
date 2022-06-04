import { User } from "@auth0/auth0-angular";
import { ActionReducerMap } from "@ngrx/store";
import { ProfileEffects } from "./profile/profile.effects";
import { IProfileState, profilereducer } from "./profile/profile.reducer";
import { ProfilesEffects } from "./profiles/profiles.effects";
import { IProfilesState, profilesreducer } from "./profiles/profiles.reducer";
import { TweetsEffects } from "./tweets/tweets.effects";
import { ITweetsState, tweetsreducer } from "./tweets/tweets.reducer";

export interface IAppState {
  profile: IProfileState;
  profiles: IProfilesState;
  tweets: ITweetsState;
}

export const appReducers: ActionReducerMap<IAppState> = {
  profile: profilereducer,
  profiles: profilesreducer,
  tweets: tweetsreducer
};

export const EffectsArray: any[] = [
    ProfileEffects,
    ProfilesEffects,
    TweetsEffects
  ];
