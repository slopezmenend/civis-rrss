import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { initialUser } from 'src/app/models/User';
import { IAppState } from 'src/app/store/AppState';
import { GetProfileLoad } from 'src/app/store/profile/profile.actions';

@Component({
  selector: 'app-myprofile-view',
  templateUrl: './myprofile-view.component.html',
  styleUrls: ['./myprofile-view.component.scss']
})
export class MyprofileViewComponent implements OnInit {
  public usuario:User;
  public id:number = 365;

  constructor(private store:Store<IAppState>, private route: ActivatedRoute) {
    this.usuario = initialUser;

    this.store.select ('profile').subscribe (profile =>
      {
        this.usuario = profile.data;
        console.log (this.usuario);
      });
     // this.route.params.subscribe(params => {
       // this.id = +params['id']; // (+) converts string 'id' to a number
        this.store.dispatch(GetProfileLoad({user_id: this.id}));
     //});

  }

  ngOnInit(): void {
  }


}
