import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { initialUser } from 'src/app/models/User';
import { IAppState } from 'src/app/store/AppState';
import { Auth, GetProfileLoad } from 'src/app/store/profile/profile.actions';

@Component({
  selector: 'app-myprofile-view',
  templateUrl: './myprofile-view.component.html',
  styleUrls: ['./myprofile-view.component.scss']
})
export class MyprofileViewComponent implements OnInit {
  public usuario:User;
  public id:number = 0;
  private updated:boolean=false;

  constructor(private store:Store<IAppState>, private route: ActivatedRoute, public auth: AuthService) {
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
        if (this.id != profile.user_id && !this.updated)
        {
          this.store.dispatch(GetProfileLoad({user_id: this.id}));
          this.updated = !this.updated;
        }
        else
        {
        this.id = profile.user_id;
        this.usuario = profile.data;
        console.log (this.usuario);
        }
      });

     //});

  }

  ngOnInit(): void {
  }


}
