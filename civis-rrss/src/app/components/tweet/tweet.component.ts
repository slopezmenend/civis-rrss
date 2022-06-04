import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { throwIfEmpty } from 'rxjs/operators';
import { initialUser, User } from 'src/app/models/User';
import { IAppState } from 'src/app/store/AppState';
import { encantaComentario, gustaComentario, igualComentario, disgustaComentario, odioComentario, reaccionar, borrarReaccion } from 'src/app/store/tweets/tweets.actions';
import { initialTweet, Tweet } from '../../models/Tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  @Input() tweet:Tweet = initialTweet;
  public fotoperfil:string = '';
  public nombre:string = '';
  public reaccionado:number = 0;
  //public diputado:User = initialUser;
  public user_id:number = 0;

  constructor(private store:Store<IAppState>) {
    //this.user_id = this.tweet.seguido_id;
    this.store.select('profile').subscribe (profile =>
      {
        this.user_id = profile.user_id;
        console.log ("[Tweet] UserID: ", this.user_id);
      })
      this.store.select('tweets').subscribe (tweets =>
        {
          console.log ("[Tweet] Modificado el tweets");
          tweets.data.forEach(tweet =>
            {
              if (tweet.id == this.tweet.id && this.reaccionado != tweet.reaccion)
              {
                this.tweet = tweet;
                console.log ("[Tweet] Reaccion Antes ", tweet.id, tweet.reaccion, this.tweet.reaccion, this.reaccionado);
                tweet.reaccion != null ? this.reaccionado = tweet.reaccion : this.reaccionado = 0;
                console.log ("[Tweet] Reaccion Despues ", tweet.id, tweet.reaccion, this.tweet.reaccion, this.reaccionado);
              }
            })
        });
  }

  ngOnInit(): void {
    //console.log("[Tweet] Mostrando tweet con valores: ", this.tweet);
    if (this.tweet.diputado != null && this.tweet.diputado != undefined && this.tweet.diputado.id != 0)
    {
      this.fotoperfil = this.tweet.diputado.fotoperfil;
      this.nombre = this.tweet.diputado.nombre;
    }
  }

  reaccionar (valor:number)
  {
    console.log ("[Tweet][Reaccionar] valor: ", valor, this.reaccionado);
    if (this.user_id != 0)
      if (this.reaccionado == 0)
      {

          switch (valor)
          {
            case 1: { this.store.dispatch(encantaComentario({id: this.tweet.id, diff:1 })); break;} //this.tweet.encanta = this.tweet.encanta + 1;
            case 2: { this.store.dispatch(gustaComentario({id: this.tweet.id, diff:1 }));  break;}
            case 3: { this.store.dispatch(igualComentario({id: this.tweet.id, diff:1 })); break;}
            case 4: { this.store.dispatch(disgustaComentario({id: this.tweet.id, diff:1 })); break;}
            case 5: { this.store.dispatch(odioComentario({id: this.tweet.id, diff:1 })); break;}
          }

          this.reaccionado = valor;
          //dispatch del effecto para reaccionar al tweet
          this.store.dispatch(reaccionar({id:this.tweet.id, user_id:this.user_id, reaccion: valor}));
      }
      else
      {

        switch (this.reaccionado)
        {
          case 1: { this.store.dispatch(encantaComentario({id: this.tweet.id, diff:-1 })); break;} //this.tweet.encanta = this.tweet.encanta + 1;
          case 2: { this.store.dispatch(gustaComentario({id: this.tweet.id, diff:-1 }));  break;}
          case 3: { this.store.dispatch(igualComentario({id: this.tweet.id, diff:-1 })); break;}
          case 4: { this.store.dispatch(disgustaComentario({id: this.tweet.id, diff:-1 })); break;}
          case 5: { this.store.dispatch(odioComentario({id: this.tweet.id, diff:-1 })); break;}
        }

        this.reaccionado = 0;
        //dispatch del effecto para eliminar la reaccion
        this.store.dispatch(borrarReaccion({id:this.tweet.id, user_id:this.user_id}));
      }
  }
}

