import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { crearComentario } from 'src/app/store/tweets/tweets.actions';
import { initialTweet, Tweet } from '../../models/Tweet';
import { IAppState } from '../../store/AppState';

@Component({
  selector: 'app-comentarform',
  templateUrl: './comentarform.component.html',
  styleUrls: ['./comentarform.component.scss']
})
export class ComentarformComponent implements OnInit {
  @Input() tweet:Tweet = initialTweet;
  private user_id:number = 0;
  public texto:FormControl = new FormControl ();
  public titulo:FormControl = new FormControl ();

  constructor(private store:Store<IAppState>) {
    //this.texto.setValue ("prueba");
    this.store.select ('profile').subscribe (profile =>
      {
        console.log ("En el comentario el user_id era : ", profile.user_id);
        if (profile.user_id != 0)
          this.user_id = profile.user_id;
      });
   }

  ngOnInit(): void {
  }

  crearComentario() {
    //console.log ("Creamos comentario para el tweet: ", this.tweet, this.user_id, this.texto.value, this.titulo.value);
    this.store.dispatch(crearComentario({$user_id: this.user_id, $parent_id: this.tweet.id, $titulo: this.titulo.value, $texto: this.texto.value}));
  }

}
