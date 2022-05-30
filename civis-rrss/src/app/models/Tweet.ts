import { Time } from "@angular/common";
import { initialUser, IUser, User } from "./User";

export interface Tweet {
  id: number;
  fecha: Date;
  user_id: number;
  padre: number;
  titulo: string;
  text: string;
  enlace: string;
  image: string;
  alt: string;
  video: string;
  subs: string;
  encanta:number;
  gusta: number;
  igual: number;
  disgusta: number;
  odia: number;
  ncomentarios:number;
//Cruce con followers
created_at: string;
updated_at: string;
seguido_id: number;
seguidor_id:number;
//Cruce con usuario
diputado: User;
name: string;
email: string;
email_verified_at: string;
password: string;
fotoperfil: string;
idcivis: number;
following: number;
followers: number;
web: string;
facebook: string;
twitter: string;
instagram: string;
youtube: string;
nombre: string;
fotofondo: string;
circunscripcion: string;
partido: string;
grupo: string;
biografia: string;
ideologia: number;
ideologiaadicional: number;
remember_token: string;
}

export const initialTweet:Tweet = {
  id: 0,
  fecha: new Date(),
  user_id: 0,
  padre: 0,
  titulo: '',
  text: '',
  enlace: '',
  image: '',
  video: '',
  alt: '',
  subs: '',
  encanta:0,
  gusta: 0,
  igual: 0,
  disgusta: 0,
  odia: 0,
  ncomentarios:0,
  created_at: '',
  updated_at: '',
  seguido_id: 0,
  seguidor_id: 0,
  diputado: initialUser,
  name: '',
  email: '',
  email_verified_at: '',
  password: '',
  fotoperfil: '',
  idcivis: 0,
  following: 0,
  followers: 0,
  web: '',
  facebook: '',
  twitter: '',
  instagram: '',
  youtube: '',
  nombre: '',
  fotofondo: '',
  circunscripcion: '',
  partido: '',
  grupo: '',
  biografia: '',
  ideologia: 0,
  ideologiaadicional: 0,
  remember_token: ''
};

export interface datosMuro {
  current_page: number
  data: Tweet[],
  first_page_url: string
  from: any
  last_page: number
  last_page_url: string,
  links: string[],
  next_page_url: any
  path: string
  per_page: number
  prev_page_url: any,
  to: any,
  total: number,
}
export interface ITweet {
  data: datosMuro,
  message: any,
}

