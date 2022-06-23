import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/AppState';
import { Tweet } from '../../models/Tweet';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Auth } from 'src/app/store/profile/profile.actions';
import { GetMuroLoad, InitTweetList } from 'src/app/store/tweets/tweets.actions';

@Component({
  selector: 'app-murolist',
  templateUrl: './murolist.component.html',
  styleUrls: ['./murolist.component.scss']
})
export class MurolistComponent implements OnInit {

  public tweets:Tweet[] = [];
  public len:number = 0;
  public id:number = 0;
  public page:number=0;
  public cargando:boolean=false;
  private uid:number = 0;

  constructor(public auth: AuthService, private store:Store<IAppState>) {

    console.log ("[MuroListComponent] Cargando Muro: " ,this.id, this.tweets);
    this.store.dispatch (InitTweetList());
    this.store.select ('tweets').subscribe (tweets =>
      {
        this.tweets = tweets.data;
        this.len = this.tweets.length;
        this.cargando = tweets.isLoading;
        this.page = tweets.page;
        console.log ("[MuroListComponent] Recuperados tweets del muro: ", this.tweets);
      });

    //this.route.params.subscribe(params => {
    //    let user_id = +params['id']; // (+) converts string 'id' to a number
    this.store.select ('profile').subscribe (profile =>
      {
        if (profile.data.id != 0)
        {
        this.id = profile.data.id;
        this.page = 0;
        this.getMuro();
        }
      });

     //});

  }

  ngOnInit(): void {
  }

   ngOnChanges() {
      //this.getMuro();
    }

  getMuro ()
  {
    this.store.dispatch(GetMuroLoad({user_id: this.id, page: this.page}));
  }

  onScroll()
  {
    this.getMuro();
  }

}
