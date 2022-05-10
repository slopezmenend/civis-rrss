import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/User';
import { IAppState } from 'src/app/store/AppState';
import { GetProfileLoad } from 'src/app/store/profile/profile.actions';
import { SearchProfilesLoad } from 'src/app/store/profiles/profiles.actions';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.scss']
})

export class SearchListComponent implements OnInit {
  public profiles:User[] = [];
  public len:number = 0;
  public pattern:string = '';
  public cargando:boolean = false;

  constructor(private store:Store<IAppState>, private route: ActivatedRoute) {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.pattern = params.search;
        console.log(this.pattern);
        this.store.dispatch(SearchProfilesLoad({pattern:this.pattern}));
      }
    );

    console.log ("Cargado listado perfiles inicial" , this.profiles);
    this.store.select ('profiles').subscribe (profiles =>
      {
        console.log (profiles);
        this.cargando = profiles.isLoading;
        this.profiles = profiles.data;
        this.len = this.profiles.length;
        console.log ("Recuperados perfiles: ", this.profiles);
      });
    }

  ngOnInit(): void {
  }

}
