import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/AppState';
import { Auth } from 'src/app/store/profile/profile.actions';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private store:Store<IAppState>) {
    auth.user$.subscribe (
      value =>
      {
        if (value?.email != undefined)
        {
          let email:string = value?.email;
          console.log ("Probando a logear al email: ", email);
          this.store.dispatch(Auth({email}));
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
