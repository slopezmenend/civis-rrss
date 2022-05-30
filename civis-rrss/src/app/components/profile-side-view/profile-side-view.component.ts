import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
//import { profile } from 'console';
import { IAppState } from 'src/app/store/AppState';
import { GetProfileLoad, PostFollow, PostUnFollow } from 'src/app/store/profile/profile.actions';
import { IFollow, IProfileState } from 'src/app/store/profile/profile.reducer';
import { initialUser, User } from '../../models/User';

@Component({
  selector: 'app-profile-side-view',
  templateUrl: './profile-side-view.component.html',
  styleUrls: ['./profile-side-view.component.scss']
})
export class ProfileSideViewComponent implements OnInit {
  public usuario:User= initialUser;
  public seguido:boolean= false;
  private user_id:number = 0;

  constructor(private store:Store<IAppState>) {
    this.store.select ('profile').subscribe (profile =>
      {
        this.usuario = profile.data;
        /*this.user_id = profile.user_id;
        if (this.usuario.follows!=null)
        {
          let follows: IFollow[] = this.usuario.follows;
          follows.forEach(element => {
            if (element.seguidor_id == this.user_id)
              this.seguido = true;
          });
        }*/
        this.seguido = this.usuario.follows != null;//profile.seguido;
        console.log ("[Panel Lateral] Usuario: ", this.usuario);
        console.log ("[Panel Lateral] Seguido: ", this.seguido);
        console.log ("[Panel Lateral] Profile: ", profile);
    });
    //this.store.dispatch(GetProfileLoad());
  }

  ngOnInit(): void {
  }

  onFollowClick ()
  {
    this.store.dispatch (PostFollow({ user_id: this.usuario.id, seguidor_id: this.user_id}));
  }

  onUnFollowClick ()
  {
    this.store.dispatch (PostUnFollow({ user_id: this.usuario.id, seguidor_id: this.user_id}));
  }

}
