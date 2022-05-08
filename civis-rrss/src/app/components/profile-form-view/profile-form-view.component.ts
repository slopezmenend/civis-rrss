import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/AppState';
import { GetProfileLoad } from 'src/app/store/profile/profile.actions';
import { IProfileState } from 'src/app/store/profile/profile.reducer';
import { initialUser, User } from '../../models/User';

@Component({
  selector: 'app-profile-form-view',
  templateUrl: './profile-form-view.component.html',
  styleUrls: ['./profile-form-view.component.scss']
})
export class ProfileFormViewComponent implements OnInit {
  public usuario:User;
  public edit:boolean = false;

  constructor(private store:Store<IAppState>) {
    this.usuario = initialUser;
    this.store.select ('profile').subscribe (profile =>
      {
        this.usuario = profile.data;
        if (this.usuario.id == 365) this.edit = true;
        console.log(this.edit);
      console.log (profile);
      console.log (this.usuario);
    });
    //this.store.dispatch(GetProfileLoad());
  }

  ngOnInit(): void {
  }

}
