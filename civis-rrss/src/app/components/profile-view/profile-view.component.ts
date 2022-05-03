import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
//import { BackendService } from 'src/app/services/backend.service';
import { IAppState } from 'src/app/store/AppState';
import { GetProfileLoad, ProfileActionTypes } from 'src/app/store/profile/profile.actions';
import { initialUser, IProfileState } from 'src/app/store/profile/profile.reducer';
import { User } from '../../models/User';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  public usuario:User;

  constructor(private store:Store<IAppState>) {
    this.usuario = initialUser;
    this.store.select ('profile').subscribe (profile =>
      {
        this.usuario = profile.data;
        console.log (this.usuario);
      });
    this.store.dispatch(GetProfileLoad());
  }

  ngOnInit(): void {
  }

}
