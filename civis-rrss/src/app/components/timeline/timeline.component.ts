import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/AppState';
import { GetTimelineLoad } from 'src/app/store/timeline/timeline.actions';
import { Tweet } from '../../models/Tweet';
import { initialState } from 'src/app/store/timeline/timeline.reducer';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private store:Store<IAppState>, private route:ActivatedRoute) {
    console.log ("Cargado muro inicial" , this.tweets);
    this.store.select ('timeline').subscribe (timeline =>
      {
        console.log (timeline);
        this.tweets = timeline.data;
        this.len = this.tweets.length;
        this.cargando = timeline.isLoading;
        console.log ("Recuperados tweets: ", this.tweets);
        this.page = timeline.page;
      });

      this.loadTimeline ();
    //this.route.params.subscribe(params => {
    //    let user_id = +params['id']; // (+) converts string 'id' to a number

     //});

  }

  ngOnInit(): void {
  }

  loadTimeline ()
  {
    this.store.dispatch(GetTimelineLoad({user_id: 365, page:this.page}));
  }

  onScroll() {
    this.loadTimeline();
  }

}
