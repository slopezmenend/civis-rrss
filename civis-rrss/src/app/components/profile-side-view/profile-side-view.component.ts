import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/AppState';
import { GetProfileLoad } from 'src/app/store/profile/profile.actions';
import { initialUser, IProfileState } from 'src/app/store/profile/profile.reducer';
import { User } from '../../models/User';

@Component({
  selector: 'app-profile-side-view',
  templateUrl: './profile-side-view.component.html',
  styleUrls: ['./profile-side-view.component.scss']
})
export class ProfileSideViewComponent implements OnInit {
  public usuario:User;

  constructor(private store:Store<IAppState>) {
    this.usuario = initialUser;
    this.store.select ('profile').subscribe (profile =>
      {
        this.usuario = profile.data;
      console.log (this.usuario);
    });
    //this.store.dispatch(GetProfileLoad());
  }

  ngOnInit(): void {
  }

}
