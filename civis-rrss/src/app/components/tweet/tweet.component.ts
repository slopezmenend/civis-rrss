import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { initialUser, User } from 'src/app/models/User';
import { IAppState } from 'src/app/store/AppState';
import { borrarReaccion, reaccionar } from 'src/app/store/muro/muro.actions';
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
  }

  ngOnInit(): void {
    console.log("[Tweet] Mostrando tweet con valores: ", this.tweet);
    if (this.tweet.diputado != null && this.tweet.diputado != undefined && this.tweet.diputado.id != 0)
    {
      this.fotoperfil = this.tweet.diputado.fotoperfil;
      this.nombre = this.tweet.diputado.nombre;
    }
    else
    {
      //this.diputado.nombre = this.tweet.nombre;
      this.fotoperfil = this.tweet.fotoperfil;
      this.nombre = this.tweet.nombre;
    }
    console.log("[Tweet] Valor fotoperfil: ", this.fotoperfil);
    console.log("[Tweet] Valor nombre: ", this.nombre);

/*    console.log ("[Tweet] Creando con información: ", this.tweet);
    console.log ("[Tweet] Foto perfil: ", this.diputado.fotoperfil)*/
  }

  reaccionar (valor:number)
  {
    if (this.user_id != 0)
      if (this.reaccionado == 0)
      {
          this.reaccionado = valor;
          //dispatch del effecto para reaccionar al tweet
          this.store.dispatch(reaccionar({id:this.tweet.id, user_id:this.user_id, reaccion: this.reaccionado}));
      }
      else
      {
        this.reaccionado = 0;
        //dispatch del effecto para eliminar la reaccion
        this.store.dispatch(borrarReaccion({id:this.tweet.id, user_id:this.user_id}));
      }
  }
}

