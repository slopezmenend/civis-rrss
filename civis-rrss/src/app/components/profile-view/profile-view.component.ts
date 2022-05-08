import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
//import { BackendService } from 'src/app/services/backend.service';
import { IAppState } from 'src/app/store/AppState';
import { GetProfileLoad, ProfileActionTypes } from 'src/app/store/profile/profile.actions';
import { IProfileState } from 'src/app/store/profile/profile.reducer';
import { initialUser, User } from '../../models/User';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  public usuario:User;
  public id:number = 0;

  constructor(private store:Store<IAppState>, private route: ActivatedRoute) {
    this.usuario = initialUser;

    this.store.select ('profile').subscribe (profile =>
      {
        this.usuario = profile.data;
        console.log (this.usuario);
      });
      this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        this.store.dispatch(GetProfileLoad({user_id: this.id}));
     });

  }

  ngOnInit(): void {
  }

}
