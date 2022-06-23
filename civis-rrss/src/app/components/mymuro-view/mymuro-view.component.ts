import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/AppState';
import { GetProfileLoad } from 'src/app/store/profile/profile.actions';
import { InitTweetList } from 'src/app/store/tweets/tweets.actions';
import { initialUser, User } from '../../models/User';


@Component({
  selector: 'app-mymuro-view',
  templateUrl: './mymuro-view.component.html',
  styleUrls: ['./mymuro-view.component.scss']
})
export class MymuroViewComponent implements OnInit {
  public usuario:User;
  public id:number = 0;

  constructor(private store:Store<IAppState>, private route: ActivatedRoute) {
    console.log ("Entrando en mi muro");

    this.usuario = initialUser;
    this.store.select ('profile').subscribe (profile =>
      {
        let previous_id = this.id;
        if (this.id != profile.user_id)
        {
          this.id = profile.user_id;
          this.usuario = profile.data;
        }

        console.log (this.usuario);
        console.log ("En mymuro el id tiene valor:", this.id);

        if (this.id != 0 && previous_id != this.id)
          this.store.dispatch(GetProfileLoad({user_id: this.id}));
      });
      //this.route.params.subscribe(params => {
        //this.id = +params['id']; // (+) converts string 'id' to a number

     //});
  }


  ngOnInit(): void {
  }

}
