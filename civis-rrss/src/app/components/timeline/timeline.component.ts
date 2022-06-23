import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/AppState';
import { Tweet } from '../../models/Tweet';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Auth } from 'src/app/store/profile/profile.actions';
import { GetTimelineLoad, InitTweetList } from 'src/app/store/tweets/tweets.actions';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public tweets:Tweet[] = [];
  public len:number = 0;
  public cargando:boolean = false;
  public page:number = 0;
  private id:number = 0;
  private uid:number = 0;

  constructor(private store:Store<IAppState>, private route:ActivatedRoute, public auth: AuthService) {
    console.log ("[TimelineComponent] Cargado muro inicial" , this.tweets);
    this.store.dispatch (InitTweetList());
    /*auth.user$.subscribe (
      value =>
      {
        if (value?.email != undefined)
        {
          let email:string = value?.email;
          console.log ("[TimelineComponent] Probando a logear al email: ", email);
          this.store.dispatch(Auth({email}));
        }
      }
    );*/

    this.store.select ('tweets').subscribe (tweets =>
      {
        if (this.id != 0)
        {
        console.log (tweets);
        this.tweets = tweets.data;
        this.len = this.tweets.length;
        this.cargando = tweets.isLoading;
        console.log ("Recuperados tweets: ", this.tweets);
        this.page = tweets.page;
      }
      });

      this.store.select ('profile').subscribe (profile =>
        {
          this.id = profile.user_id;

          console.log ("[TimelineComponent] Actualizado el profile con id ", this.id);
          if (this.id != 0)
            this.store.dispatch(GetTimelineLoad({user_id: this.id, page:this.page}));
        });

    //this.route.params.subscribe(params => {
    //    let user_id = +params['id']; // (+) converts string 'id' to a number

     //});

  }

  ngOnInit(): void {
  }

  loadTimeline ()
  {
    this.store.select ('profile').subscribe (profile =>
      {
        let id = profile.data.id;

        if (id != 0)
          this.store.dispatch(GetTimelineLoad({user_id: id, page:this.page}));
      });
  }

  onScroll() {
    this.loadTimeline();
  }

}
