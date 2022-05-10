import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initialUser, User } from 'src/app/models/User';
import { IAppState } from 'src/app/store/AppState';
import { GetProfileLoad, PostFollow, PostUnFollow } from 'src/app/store/profile/profile.actions';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})

export class UserdetailComponent implements OnInit {
  @Input() profile:User=initialUser;
  public siguiendo:boolean = false;

  constructor(private store:Store<IAppState>) {
  }

  ngOnInit(): void {
    this.siguiendo = this.profile.seguido_id != null;
    console.log ("Pintando el usuario del listado", this.profile, this.siguiendo);
  }

  onFollowClick ()
  {
    this.store.dispatch (PostFollow({ user_id: this.profile.id, seguidor_id: 365}));
    this.siguiendo = true;
  }

  onUnFollowClick ()
  {
    this.store.dispatch (PostUnFollow({ user_id: this.profile.id, seguidor_id: 365}));
    this.siguiendo = false;
  }

}
