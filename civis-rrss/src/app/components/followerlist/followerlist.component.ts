import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/User';
import { IAppState } from 'src/app/store/AppState';
import { GetFollowersLoad } from 'src/app/store/profiles/profiles.actions';


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
 /*   this.route.params
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
   /*this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.pattern = params.search;
        console.log(this.pattern);
        this.store.dispatch(SearchProfilesLoad({pattern:this.pattern}));
      }
    );*/

    console.log ("Cargado listado perfiles seguidos inicial" , this.profiles);
    this.store.select ('profiles').subscribe (profiles =>
      {
        this.profiles = [];
        this.len = 0;
        let prueba:User[] = <User[]>profiles.data;
        console.log(prueba.length);
        /*prueba.forEach ( element => {
          console.log ("Elemento: ", element);
          this.profiles.push (element);
          this.len = this.len + 1;
        });*/
        //console.log (profiles);

        //console.log(data, data.length);
        this.cargando = profiles.isLoading;
        this.profiles = profiles.data;
        this.len = this.profiles.length;
        console.log ("Recuperados perfiles: ", profiles);
        //profiles.data.forEach (element => { console.log(element)})
        //console.log ("Fin recuperados");
        //console.log(profiles.data.);
      });

      this.store.select ('profile').subscribe (profile =>
        {
          let id = profile.data.id;

          console.log (id);
          if (id != 0)
            this.store.dispatch(GetFollowersLoad({user_id: id}));
        });
    }

  ngOnInit(): void {
  }

}
