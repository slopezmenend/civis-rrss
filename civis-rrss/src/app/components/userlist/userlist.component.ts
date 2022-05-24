import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/User';
import { IAppState } from 'src/app/store/AppState';
import { GetProfileLoad } from 'src/app/store/profile/profile.actions';
import { SearchProfilesLoad } from 'src/app/store/profiles/profiles.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  public profiles:User[] = [];
  public len:number = 0;

  constructor(private store:Store<IAppState>) {
    console.log("Sitio raro buscando Abascal");
    console.log ("Cargado listado perfiles inicial" , this.profiles);
    this.store.select ('profiles').subscribe (profiles =>
      {
        console.log (profiles);
        this.profiles = profiles.data;
        this.len = this.profiles.length;
        console.log ("Recuperados perfiles: ", this.profiles);
      });

//      this.store.dispatch(SearchProfilesLoad({pattern:'Abascal'}));
  }

  ngOnInit(): void {
  }

}
