import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
//import { BackendService } from 'src/app/services/backend.service';
import { IAppState } from 'src/app/store/AppState';
import { Auth, GetProfileLoad, ProfileActionTypes } from 'src/app/store/profile/profile.actions';
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
  public uid:number = 0;
  private tratado:boolean = false;

  constructor(private store:Store<IAppState>, private route: ActivatedRoute, public auth: AuthService) {
    this.usuario = initialUser;

    /*auth.user$.subscribe (
      value =>
      {
        if (value?.email != undefined)
        {
          let email:string = value?.email;
          console.log ("[ProfileViewComponent] Probando a logear al email: ", email);
          this.store.dispatch(Auth({email}));
        }
      }
    );*/

    this.store.select ('profile').subscribe (profile =>
      {
        /*if (profile.user_id == 0 && email!='')
        {
          console.log ("[ProfileViewComponent] Reprobando a logear al email: ", email);
          this.store.dispatch(Auth({email}));
        }*/

        /*if (profile.data.id == 0 && profile.user_id != 0)
        {
          this.dispatchProfile();
        }*/
        if (profile.user_id !=0 && profile.data.id == this.id && !this.tratado)
        {
          this.tratado = !this.tratado;
          this.dispatchProfile();
        }

        this.usuario = profile.data;
        this.uid = profile.user_id;
        console.log ("[ProfileViewComponent] User: ", this.usuario);
      });

      this.dispatchProfile();

  }

  dispatchProfile ()
  {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      console.log ("[ProfileViewComponent] ID: ", this.id, this.uid);
      this.store.dispatch(GetProfileLoad({user_id: this.id}));
   });
  }
  ngOnInit(): void {
  }

}
