import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../models/User';
import { IAppState } from '../store/AppState';
import { GetFollowingLoad } from '../store/profiles/profiles.actions';

@Component({
  selector: 'app-followinglist',
  templateUrl: './followinglist.component.html',
  styleUrls: ['./followinglist.component.scss']
})
export class FollowinglistComponent implements OnInit {
  public profiles:User[] = [];
  public len:number = 0;
  public cargando:boolean = false;
  public prueba:string = "Prueba de texto";

  constructor(private store:Store<IAppState>) {
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
            this.store.dispatch(GetFollowingLoad({user_id: id}));
        });
    }

  ngOnInit(): void {
  }

}
