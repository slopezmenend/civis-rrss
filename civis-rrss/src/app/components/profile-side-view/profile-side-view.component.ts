import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/AppState';
import { GetProfileLoad, PostFollow, PostUnFollow } from 'src/app/store/profile/profile.actions';
import { IProfileState } from 'src/app/store/profile/profile.reducer';
import { initialUser, User } from '../../models/User';

@Component({
  selector: 'app-profile-side-view',
  templateUrl: './profile-side-view.component.html',
  styleUrls: ['./profile-side-view.component.scss']
})
export class ProfileSideViewComponent implements OnInit {
  public usuario:User= initialUser;
  public seguido:boolean= false;

  constructor(private store:Store<IAppState>) {
    this.store.select ('profile').subscribe (profile =>
      {
        this.usuario = profile.data;
        this.seguido = profile.seguido;
        console.log (this.usuario);
    });
    //this.store.dispatch(GetProfileLoad());
  }

  ngOnInit(): void {
  }

  onFollowClick ()
  {
    this.store.dispatch (PostFollow({ user_id: this.usuario.id, seguidor_id: 1}));
  }

  onUnFollowClick ()
  {
    this.store.dispatch (PostUnFollow({ user_id: this.usuario.id, seguidor_id: 1}));
  }

}
