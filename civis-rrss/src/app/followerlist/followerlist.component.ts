import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../models/User';
import { IAppState } from '../store/AppState';
import { GetFollowersLoad } from '../store/profiles/profiles.actions';


@Component({
  selector: 'app-followerlist',
  templateUrl: './followerlist.component.html',
  styleUrls: ['./followerlist.component.scss']
})
export class FollowerlistComponent implements OnInit {
  public profiles:User[] = [];
  public len:number = 0;
  public cargando:boolean = false;
  private id:number = 0;

  constructor(private store:Store<IAppState>, private route: ActivatedRoute) {
    this.route.params
      .subscribe(params => {
        console.log(params);
        this.id = params['id'];//params.id;
        console.log(this.id);
        this.store.dispatch(GetFollowersLoad({user_id: this.id}));
      }
    );

    console.log ("Cargado listado perfiles seguidos inicial" , this.profiles);
    this.store.select ('profiles').subscribe (profiles =>
      {
        console.log (profiles);
        this.cargando = profiles.isLoading;
        this.profiles = profiles.data;
        this.len = this.profiles.length;
        console.log ("Recuperados perfiles: ", profiles.data);
      });

      /*this.store.select ('profile').subscribe (profile =>
        {
          let id = profile.user_id;
          console.log (id);
          this.store.dispatch(GetFollowersLoad({user_id: id}));
        });*/
    }

  ngOnInit(): void {
  }

}
