import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { Tweet } from 'src/app/models/Tweet';
import { IAppState } from 'src/app/store/AppState';
import { GetComentariosLoad, GetTimelineLoad } from 'src/app/store/tweets/tweets.actions';

@Component({
  selector: 'app-commentlist',
  templateUrl: './commentlist.component.html',
  styleUrls: ['./commentlist.component.scss']
})
export class CommentlistComponent implements OnInit {

  public tweets:Tweet[] = [];
  public len:number = 0;
  public cargando:boolean = false;
  public page:number = 0;
  private id:number = 0;
  private uid:number = 0;

  constructor(private store:Store<IAppState>, private route:ActivatedRoute, public auth: AuthService) {
    console.log ("[CommentListComponent] Cargados comentarios inicial" , this.tweets);
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

      this.loadComentarios ();

    //this.route.params.subscribe(params => {
    //    let user_id = +params['id']; // (+) converts string 'id' to a number

     //});

  }

  ngOnInit(): void {
  }

  loadComentarios ()
  {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      console.log ("[ProfileViewComponent] ID: ", this.id, this.page);
      this.store.dispatch(GetComentariosLoad({parent_id: this.id, page: this.page}));
   });
  }

  onScroll() {
    this.loadComentarios();
  }

}
