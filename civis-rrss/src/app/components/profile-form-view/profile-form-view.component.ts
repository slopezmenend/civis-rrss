import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/AppState';
import { Auth, GetProfileLoad } from 'src/app/store/profile/profile.actions';
import { IProfileState } from 'src/app/store/profile/profile.reducer';
import { initialUser, User } from '../../models/User';

@Component({
  selector: 'app-profile-form-view',
  templateUrl: './profile-form-view.component.html',
  styleUrls: ['./profile-form-view.component.scss']
})
export class ProfileFormViewComponent implements OnInit {
  @Input() lanza:boolean = false;
  public usuario:User;
  public edit:boolean = false;
  private user_id:number=0;
  //private lanza:boolean=true;

  constructor(private store:Store<IAppState>, public auth: AuthService) {
    this.usuario = initialUser;

    auth.user$.subscribe (
      value =>
      {
        if (value?.email != undefined)
        {
          let email:string = value?.email;
          console.log ("My profile Probando a logear al email: ", email);
          this.store.dispatch(Auth({email}));
        }
      }
    );

    this.store.select ('profile').subscribe (profile =>
    {
      this.user_id = profile.user_id;
      if (this.user_id != 0)
      {
        if (profile.data.id != 0)
        {
          console.log ("Actualizamos el usuario desde el profile ", profile);
          this.usuario = profile.data;

          if (this.usuario.id == this.user_id) this.edit = true;
          console.log(this.edit);
          console.log (profile);
          console.log (this.usuario);
        }
        else
        {
          console.log ("Lanzamos el GetProfile al estar el id a 0 con ", this.user_id, this.lanza);
          if (this.lanza)
          {
            this.lanza = !this.lanza;
            this.store.dispatch(GetProfileLoad({user_id: this.user_id}));
          }
        }
      }
      else console.log ("El profile form no actuliaza al no tener user_id");
      });

    if (this.user_id != 0)
      this.store.dispatch(GetProfileLoad({user_id: this.user_id}));

  }

  ngOnInit(): void {
  }

}
