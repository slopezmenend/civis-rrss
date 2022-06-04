import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/AppState';
import { GetProfileLoad } from 'src/app/store/profile/profile.actions';
import { initialUser, User } from '../../models/User';


@Component({
  selector: 'app-muro-view',
  templateUrl: './muro-view.component.html',
  styleUrls: ['./muro-view.component.scss']
})
export class MuroViewComponent implements OnInit {
  public usuario:User;
  public id:number = 0;

  constructor(private store:Store<IAppState>, private route: ActivatedRoute) {
    console.log ("Entrando en el muro");
    this.usuario = initialUser;
    this.store.select ('profile').subscribe (profile =>
      {
        this.usuario = profile.data;
        console.log (this.usuario);
      });
      /**this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        *this.store.dispatch(GetProfileLoad({user_id: this.id}));
     });**/
  }


  ngOnInit(): void {
  }

}
