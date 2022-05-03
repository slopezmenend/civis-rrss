import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  public getPerfil (): Observable<User>
  {
    const url = 'http://127.0.0.1:8000/api/user/1';
    console.log ("vamos a recuperar perfil de " ,  url);
    let perfil = this.http.get(url);
    console.log(perfil);
    return <Observable<User>>perfil;
  }
}
