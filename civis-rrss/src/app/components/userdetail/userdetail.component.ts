import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initialUser, User } from 'src/app/models/User';
import { IAppState } from 'src/app/store/AppState';
import { GetProfileLoad, PostFollow, PostUnFollow } from 'src/app/store/profile/profile.actions';
import { IFollow } from 'src/app/store/profile/profile.reducer';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})

export class UserdetailComponent implements OnInit {
  @Input() profile:User=initialUser;
  public siguiendo:boolean = false;
  private id:number = 0;

  constructor(private store:Store<IAppState>) {
    this.store.select('profile').subscribe (profile =>
      {
        this.id = profile.user_id;
      });
      /*console.log ("[UserDetailComponent] Constructor: ", this.profile, this.siguiendo);
      this.siguiendo = this.profile.follow;*/
  }

  ngOnInit(): void {
    //this.siguiendo = this.profile.seguido_id != null;
    //this.siguiendo = this.profile.follows != null;
    /*let follows:IFollow[] = this.profile.follows;

    if (follows!=null && follows!=undefined)
    follows.forEach (element => {
      if (element.seguidor_id == this.id) this.siguiendo = true;
    });
    else
      if (this.profile.id == this.id)
        this.siguiendo = true;*/

    console.log ("Pintando el usuario del listado", this.profile, this.siguiendo, this.id);
    console.log("[UserDetail] Profile: ", this.profile);
    console.log("[UserDetail] id: ", this.id);
  }

  onFollowClick ()
  {
  /*  this.store.select('profile').subscribe (profile =>
      {
        let id = profile.user_id;
        this.store.dispatch (PostFollow({ user_id: this.profile.id, seguidor_id: id}));
        this.siguiendo = true;
      });*/
      if (this.id != 0)
      {
        this.store.dispatch (PostFollow({ user_id: this.profile.id}));
        this.siguiendo = true;
      }
  }

  onUnFollowClick ()
  {
    /*this.store.select('profile').subscribe (profile =>
      {
        let id = profile.user_id;
        this.store.dispatch (PostUnFollow({ user_id: this.profile.id, seguidor_id: id}));
        this.siguiendo = false;
      });*/
      console.log ("[Click Follow] ID: ", this.id);
      if (this.id != 0)
      {
        this.store.dispatch (PostUnFollow({ user_id: this.profile.id}));
        this.siguiendo = false;
      }
  }

}

