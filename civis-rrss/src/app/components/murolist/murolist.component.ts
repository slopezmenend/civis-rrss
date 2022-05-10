import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/AppState';
import { Tweet } from '../../models/Tweet';
import { ActivatedRoute } from '@angular/router';
import { GetMuroLoad } from 'src/app/store/muro/muro.actions';

@Component({
  selector: 'app-murolist',
  templateUrl: './murolist.component.html',
  styleUrls: ['./murolist.component.scss']
})
export class MurolistComponent implements OnInit {

  public tweets:Tweet[] = [];
  public len:number = 0;
  @Input() id:number = 0;
  public page:number=0;
  public cargando:boolean=false;

  constructor(private store:Store<IAppState>, private route:ActivatedRoute) {
    console.log ("Cargado muro inicial para el id " ,this.id, this.tweets);
    this.store.select ('muro').subscribe (muro =>
      {
        console.log (muro);
        this.tweets = muro.data;
        this.len = this.tweets.length;
        this.cargando = muro.isLoading;
        this.page = muro.page;
        console.log ("Recuperados tweets del muro: ", this.tweets);
      });

    //this.route.params.subscribe(params => {
    //    let user_id = +params['id']; // (+) converts string 'id' to a number
    this.store.select ('profile').subscribe (profile =>
      {
        this.id = profile.data.id;
        console.log ("El campo id tiene valor" , this.id);
        this.getMuro();
      });

     //});

  }

  ngOnInit(): void {
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
