import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { BackendService } from 'src/app/services/backend.service';
import { IAppState } from 'src/app/store/AppState';
import { Auth, CompleteUser } from 'src/app/store/profile/profile.actions';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private store:Store<IAppState>, private backendService: BackendService) {
    auth.user$.subscribe (
      value =>
      {
        if (value?.email != undefined )
        {
          let email:string = value?.email;
          let name:string = '';
          if (value?.name != undefined) name = value?.name;
          let foto:string = '';
          if (value?.picture != undefined) foto = value?.picture ;
          console.log ("[Auth-Button]Probando a completar el usuario: ", email, name, foto);
          this.store.dispatch(CompleteUser({email, name, foto})); //Lanzamos la creación/actualización de datos
          console.log ("[Auth-Button]Probando a logear al email: ", email);
          this.store.dispatch(Auth({email})); //Nos logeamos
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
