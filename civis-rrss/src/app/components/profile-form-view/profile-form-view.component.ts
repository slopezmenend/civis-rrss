import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/AppState';
import { GetProfileLoad } from 'src/app/store/profile/profile.actions';
import { initialUser, IProfileState } from 'src/app/store/profile/profile.reducer';
import { User } from '../../models/User';

@Component({
  selector: 'app-profile-form-view',
  templateUrl: './profile-form-view.component.html',
  styleUrls: ['./profile-form-view.component.scss']
})
export class ProfileFormViewComponent implements OnInit {
  public usuario:User;

  constructor(private store:Store<IAppState>) {
    this.usuario = initialUser;
    this.store.select ('profile').subscribe (profile =>
      {
        this.usuario = profile.data;
      console.log (profile);
      console.log (this.usuario);
    });
    //this.store.dispatch(GetProfileLoad());
  }

  ngOnInit(): void {
  }

}
