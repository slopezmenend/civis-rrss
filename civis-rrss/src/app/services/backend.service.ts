import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IProfiles, IUser, User } from '../models/User';
import { initialTweet, ITweet, Tweet } from '../models/Tweet';
import { IFollows } from '../store/profile/profile.reducer';
import { IAppState } from '../store/AppState';
import { Store } from '@ngrx/store';
import { añadirComentario, sumarComentario } from '../store/muro/muro.actions';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient, private store:Store<IAppState>) { }

  public getPerfil ($user_id:number): Observable<IUser>
  {
    const url = 'http://127.0.0.1:8000/api/user/' + $user_id;
    console.log ("vamos a recuperar perfil de " ,  url);
    let perfil = this.http.get(url);
    console.log(perfil);
    return <Observable<IUser>>perfil;
  }

  public getMuro ($user_id:number, $page:number): Observable<ITweet>
  {
    let url = 'http://127.0.0.1:8000/api/muro/' + $user_id;
    if ($page != 0)
      url = url + '?page=' + $page;
    console.log ("vamos a recuperar muro de " ,  url);
    let muro = this.http.get(url);
    console.log(muro);
    return <Observable<ITweet>>muro;
  }

  public searchUser ($pattern:string, $user_id:number): Observable<IProfiles>
  {
    const url = 'http://127.0.0.1:8000/api/searchuser/' + $pattern+ '/'+$user_id;
    console.log ("Buscamos profiles de " ,  url);
    let profiles = this.http.get(url);
    console.log(profiles);
    return <Observable<IProfiles>>profiles;
  }

  public getTimeline ($user_id:number, $page:number): Observable<ITweet>
  {
    let url = 'http://127.0.0.1:8000/api/timeline/' + $user_id;
    if ($page != 0)
      url = url + '?page=' + $page;
    console.log ("vamos a recuperar muro de " ,  url);
    let muro = this.http.get(url);
    console.log(muro);
    return <Observable<ITweet>>muro;
  }

  public postFollow ($user_id:number, $seguidor_id:number): Observable<IUser>
  {
    const url = 'http://127.0.0.1:8000/api/postfollow/'+ $user_id +'/' + $seguidor_id;
    console.log ("Vamos a crear el follow con " + url);
    this.http.post<any>(url,
      { seguido_id : $user_id, seguidor_id: $seguidor_id }).subscribe(data => {
         console.log ("Respuesta desde servicio al follow:" , data);
    })
    return this.getPerfil ($user_id);
  }

  public deleteFollow ($user_id:number, $seguidor_id:number)
  {
    const url = 'http://127.0.0.1:8000/api/deletefollow/'+ $user_id +'/' + $seguidor_id;
    console.log ("Vamos a borrar el follow con " + url);
    let $result = this.http.delete<any>(url);
    $result.subscribe(data => {
         console.log ("Respuesta desde servicio al unfollow:" , data);
    })
    console.log ($result);
    return this.getPerfil ($user_id);
  }

  public getFollowing ($user_id:number): Observable<IFollows>
  {
    const url = 'http://127.0.0.1:8000/api/seguidos/' + $user_id;
    console.log ("Buscamos profiles de following" ,  url);
    let profiles = this.http.get(url);
    console.log(profiles);
    return <Observable<IFollows>>profiles;
  }

  public getFollowers ($user_id:number): Observable<IFollows>
  {
    const url = 'http://127.0.0.1:8000/api/siguiendo/' + $user_id;
    console.log ("Buscamos profiles de followers" ,  url);
    let profiles = this.http.get(url);
    console.log(profiles);
    return <Observable<IFollows>>profiles;
  }

  public getUser ($email:string): Observable<IUser>
  {
    const url = 'http://127.0.0.1:8000/api/get-user/' + $email;
    console.log ("vamos a recuperar perfil de " ,  url);
    let perfil = this.http.get(url);
    console.log(perfil);
    return <Observable<IUser>>perfil;
  }

  public crearCommentario ($user_id:number, $parent_id:number, $titulo:string, $texto:string)
  {
    const url = 'http://127.0.0.1:8000/api/comentario';
    console.log ("Vamos a crear el comentario con " + url);
    let titulo = '';
    $titulo!=null? titulo=$titulo : titulo='';
    let parent_id = 0;
    $parent_id!=null? parent_id=$parent_id : parent_id=0;
    this.http.post<any>(url,
      { user_id: $user_id, parent_id: parent_id, titulo: titulo, texto: $texto }).subscribe(data => {
         console.log ("Respuesta desde servicio al comentario:" , data);
         //if (parent_id != null)
         // this.store.dispatch (sumarComentario({parent_id: parent_id}));
         //else
         console.log ("vamos a lanzar el añadir comentario desde el BS");
         let tweet:Tweet = initialTweet;
         tweet.created_at = data.data.created_at;
         tweet.id = data.data.id;
         tweet.text = data.data.text;
         tweet.titulo = data.data.titulo;
         tweet.updated_at = data.data.updated_at;
         tweet.user_id = data.data.user_id;
         console.log("con el tweet: ", tweet);
          this.store.dispatch (añadirComentario({tweet: tweet}));
         //return data;
    })
    //

    let retorno = "Creando comentario en servicio: " + $user_id + '/' + parent_id + '/' + titulo + '/' +  $texto;
    console.log (retorno);
    return of(retorno);
  }

}
