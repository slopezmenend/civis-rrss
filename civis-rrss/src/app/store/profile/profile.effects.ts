import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
//import { profile } from 'console';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BackendService } from 'src/app/services/backend.service';
import { AuthFail, AuthSuccess, CompleteUserFail, CompleteUserSuccess, GetProfileFail, GetProfileSuccess, PostFollowFail, PostFollowSuccess, PostUnFollowFail, PostUnFollowSuccess, ProfileActionTypes, UpdateProfileFail, UpdateProfileSuccess } from './profile.actions';

@Injectable()
export class ProfileEffects {

  loadProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActionTypes.GetProfileLoad),
    mergeMap(({user_id}) => this.backendService.getPerfil(user_id)
      .pipe(
        map((data) => GetProfileSuccess ({ data: data.data, seguido: true })),
        catchError((data) => of(GetProfileFail({ payload: data.message})))
      )
    )
  ));

  follow$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActionTypes.PostFollow),
    mergeMap(({user_id, seguidor_id}) => this.backendService.postFollow(user_id)
      .pipe(
        map((data) => PostFollowSuccess ({ data: data.data, seguido: true })),
        catchError((data) => of(PostFollowFail({ payload: data.message})))
      )
    )
  ));

  unfollow$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActionTypes.PostUnFollow),
    mergeMap(({user_id, seguidor_id}) => this.backendService.deleteFollow(user_id)
      .pipe(
        map((data) => PostUnFollowSuccess ({ data: data.data, seguido: false })),
        catchError((data) => of(PostUnFollowFail({ payload: data.message})))
      )
    )
  ));

  login$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActionTypes.AuthLoad),
    mergeMap(({email}) => this.backendService.getUser (email)
      .pipe(
        map((data) => AuthSuccess ({ user_id: data.data.id })),
        catchError((data) => of(AuthFail({ payload: data.message})))
      )
    )
  ));

  complete$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActionTypes.CompleteUser),
    mergeMap(({email, name, foto}) => this.backendService.completeUser (email, name, foto)
      .pipe(
        map((data) => CompleteUserSuccess ({ user_id: data.data.id })),
        catchError((data) => of(CompleteUserFail({ payload: data.message})))
      )
    )
  ));

  update$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActionTypes.UpdateProfile),
    mergeMap(({user_id, email, nombre, circunscripcion,
      partido, grupo, biografia, ideologia,
      ideologiaadicional, web, facebook,
      twitter, instagram, youtube}) => this.backendService.updateUser (user_id, email, nombre, circunscripcion,
        partido, grupo, biografia, ideologia,
        ideologiaadicional, web, facebook,
        twitter, instagram, youtube)
      .pipe(
        map((data) => UpdateProfileSuccess ()),
        catchError((data) => of(UpdateProfileFail({ payload: data.message})))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) {}
}
