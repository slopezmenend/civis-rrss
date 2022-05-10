import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IProfiles, IUser, User } from '../models/User';
import { ITweet, Tweet } from '../models/Tweet';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

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
    console.log ("vamos a recuperar profiles de " ,  url);
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

}
