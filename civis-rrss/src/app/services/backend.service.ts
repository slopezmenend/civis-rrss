import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IProfiles, IUser, User } from '../models/User';
import { initialTweet, ITweet, Tweet } from '../models/Tweet';
import { IFollows } from '../store/profile/profile.reducer';
import { IAppState } from '../store/AppState';
import { Store } from '@ngrx/store';
import { sumarComentario } from '../store/tweets/tweets.actions';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrL:string = 'https://civis-rrss-backend.herokuapp.com/';
  //private baseUrL:string = 'http://127.0.0.1:8000/';
  private uid:number=0;//361;

  constructor(private http: HttpClient, private store:Store<IAppState>) { }

  /*public setUID (uid:number) {
    this.uid = uid;
  }*/

  public getPerfil ($user_id:number): Observable<IUser>
  {
    let url = this.baseUrL + 'api/profile/' + $user_id+'/';
    if (this.uid!=0) url = url + this.uid + '/';
    console.log ("[Backend Service] Llamando a URL: " ,  url, this.uid);
    let perfil = this.http.get(url);
    console.log("[Backend Service] Perfil: ", perfil);
    return <Observable<IUser>>perfil;
  }

  public getComentarios ($parent_id:number, $page:number): Observable<ITweet>
  {
    let url = this.baseUrL + 'api/comentario/' + $parent_id+'/'+ this.uid + '/';;
    if ($page != 0)
      url = url + '?page=' + $page;
    console.log ("vamos a recuperar comentarios de " ,  url);
    let comentarios = this.http.get(url);
    console.log("[BackService] Cargado Comentarios:", comentarios);
    return <Observable<ITweet>>comentarios;
  }

  public getMuro ($user_id:number, $page:number): Observable<ITweet>
  {
    let url = this.baseUrL + 'api/muro/' + $user_id+'/';
    if (this.uid!=0) url = url + this.uid + '/';
    if ($page != 0)
      url = url + '?page=' + $page;
    console.log ("vamos a recuperar muro de " ,  url);
    let muro = this.http.get(url);
    console.log("[BackService] Cargado Muro:", muro);
    return <Observable<ITweet>>muro;
  }

  public searchUser ($pattern:string): Observable<IProfiles>
  {
    let url = this.baseUrL + 'api/searchuser/' + $pattern+ '/';
    if (this.uid!=0) url = url + this.uid + '/';
    console.log ("Buscamos profiles de " ,  url, this.uid);
    let profiles = this.http.get(url);
    console.log(profiles);
    return <Observable<IProfiles>>profiles;
  }

  public getTimeline ($user_id:number, $page:number): Observable<ITweet>
  {
    let url = this.baseUrL + 'api/timeline/' + $user_id + '/';
    if (this.uid!=0) url = url + this.uid + '/';
    if ($page != 0)
      url = url + '?page=' + $page;
    console.log ("vamos a recuperar muro de " ,  url);
    let muro = this.http.get(url);
    console.log(muro);
    return <Observable<ITweet>>muro;
  }

  public postFollow ($user_id:number): Observable<IUser>
  {
    const url = this.baseUrL + 'api/postfollow/'+ $user_id +'/' + this.uid + '/';
    console.log ("Vamos a crear el follow con " + url);
    this.http.post<any>(url,
      { seguido_id : $user_id, seguidor_id: this.uid }).subscribe(data => {
         console.log ("Respuesta desde servicio al follow:" , data);
    })
    return this.getPerfil ($user_id);
  }

  public deleteFollow ($user_id:number)
  {
    const url = this.baseUrL + 'api/deletefollow/'+ $user_id +'/' + this.uid + '/';
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
    let url = this.baseUrL + 'api/seguidos/' + $user_id + '/';
    if (this.uid!=0) url = url + this.uid + '/';
    console.log ("Buscamos profiles de following" ,  url);
    let profiles = this.http.get(url);
    console.log(profiles);
    return <Observable<IFollows>>profiles;
  }

  public getFollowers ($user_id:number): Observable<IFollows>
  {
    let url = this.baseUrL + 'api/siguiendo/' + $user_id+'/';
    if (this.uid!=0) url = url + this.uid + '/';
    console.log ("Buscamos profiles de followers" ,  url);
    let profiles = this.http.get(url);
    console.log(profiles);
    return <Observable<IFollows>>profiles;
  }

  public getUser ($email:string): Observable<IUser>
  {
    const url = this.baseUrL + 'api/get-user/' + $email ;
    console.log ("vamos a recuperar perfil de " ,  url);
    let perfil = <Observable<IUser>>this.http.get(url);
    console.log("recuperado perfil: ", perfil);
    perfil.subscribe ( iuser => {
      let id = iuser.data.id;
      if (id!=0 && this.uid!=id)
      {
        this.uid = id;
        console.log ("[BackendService] Actualizado el uid interno a ", this.uid);
      }
    }

    )
    return perfil;
  }

  public completeUser ($email:string, $name:string, $foto:string): Observable<IUser>
  {
    const url = this.baseUrL + 'api/updateNameFoto';
    let name = '';
    if ($name!=undefined) name = $name;
    let foto = '';
    if ($foto!=undefined) foto = $foto;
    let perfil = this.http.post<any>(url,
      { mail: $email, name: name, foto: foto});
    return <Observable<IUser>>perfil;
  }

  public crearCommentario ($user_id:number, $parent_id:number, $titulo:string, $texto:string)
  {
    const url = this.baseUrL + 'api/comentario';
    console.log ("Vamos a crear el comentario con " + url);
    let titulo = '';
    $titulo!=null? titulo=$titulo : titulo='';
    let parent_id = 0;
    $parent_id!=null? parent_id=$parent_id : parent_id=0;
    this.http.post<any>(url,
      { user_id: $user_id, parent_id: parent_id, titulo: titulo, texto: $texto }).subscribe(data => {
         console.log ("Respuesta desde servicio al comentario:" , data);
         if (parent_id != null && parent_id!=0)
            this.store.dispatch (sumarComentario({parent_id: parent_id}));
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
//          this.store.dispatch (añadirComentario({tweet: tweet}));
         //return data;
    })
    //

    let retorno = "Creando comentario en servicio: " + $user_id + '/' + parent_id + '/' + titulo + '/' +  $texto;
    console.log (retorno);
    return of(retorno);
  }

  public updateUser ($user_id:number, $email:string, $nombre:string, $circunscripcion:string,
    $partido:string, $grupo:string, $biografia:string, $ideologia:number,
    $ideologiaadicional:number, $web:string, $facebook:string,
    $twitter:string, $instagram:string, $youtube:string): Observable<IUser>
    {
      console.log ("Llamada a actualizar el perfil con:");
      console.log ("ID: ", $user_id);
      console.log ("Nombre: ", $nombre);
      console.log ("circunscripcion: ", $circunscripcion);
      console.log ("partido: ", $partido);
      console.log ("grupo: ", $grupo);
      console.log ("biografia: ", $biografia);
      console.log ("ideologia: ", $ideologia);
      console.log ("ideologiaadicional: ", $ideologiaadicional);
      console.log ("web: ", $web);
      console.log ("facebook: ", $facebook);
      console.log ("twitter: ", $twitter);
      console.log ("instagram: ", $instagram);
      console.log ("youtube: ", $youtube);
      console.log ("email: ", $email);

      const url = this.baseUrL + 'api/user/'+ $user_id;
      console.log ("URL de la llamada: ", url);

      let perfil = this.http.put<any>(url,
        {
          id: $user_id,
          email: $email,
          nombre: $nombre,
          circunscripcion: $circunscripcion,
          partido: $partido,
          grupo: $grupo,
          biografia: $biografia,
          ideologia: $ideologia,
          ideologiaadicional: $ideologiaadicional,
          web: $web,
          facebook: $facebook,
          twitter: $twitter,
          instagram: $instagram,
          youtube: $youtube
        });
      return <Observable<IUser>>perfil;
    }

    public reaccionar(id: number, user_id:number , reaccion:number): Observable<any>
    {
      console.log ("[BackendService] Reaccionar: ", id, user_id, reaccion);
      const url = this.baseUrL + 'api/crearReaccion/';
      console.log ("Vamos a crear la reaccion con " + url);
      this.http.post<any>(url,
        { id : id, user_id: user_id, reaccion: reaccion }).subscribe(data => {
           console.log ("Respuesta desde servicio a la reaccion:" , data);
      })
      return of(true);
    }

    public borrarReaccion(id: number, user_id:number): Observable<any>
    {
      console.log ("[BackendService] borrarReaccion: ", id, user_id);
      const url = this.baseUrL + 'api/borrarReaccion/';
      console.log ("Vamos a borrar la reaccion con " + url);
      this.http.post<any>(url,
        { id : id, user_id: user_id }).subscribe(data => {
           console.log ("Respuesta desde servicio a la reaccion:" , data);
      })
      return of(true);
    }

}
