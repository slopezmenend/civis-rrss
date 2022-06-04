import { Time } from "@angular/common";
import { initialUser, IUser, User } from "./User";

export interface Tweet {
  id: number,
  user_id: number,
  parent_id: number|null,
  titulo: string,
  text: string,
  enlace: string,
  image: string,
  alt: string,
  video: string,
  subs: string,
  encanta: number,
  gusta: number,
  igual: number,
  disgusta: number,
  odia: number,
  ncomentarios: number,
  idcivis: number,
  tipo_civis: string,
  created_at: string,
  updated_at: string,
  diputado: User,
  reaccion: number
}

export const initialTweet:Tweet = {
  id: 0,
  user_id: 0,
  parent_id: null,
  titulo: '',
  text: '',
  enlace: '',
  image: '',
  alt: '',
  video: '',
  subs: '',
  encanta: 0,
  gusta: 0,
  igual: 0,
  disgusta: 0,
  odia: 0,
  ncomentarios: 0,
  idcivis: 0,
  tipo_civis: '',
  created_at: '',
  updated_at: '',
  diputado: initialUser,
  reaccion: 0
};

/*export interface datosMuro {
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
}*/

export interface ITweet {
  data: Tweet[],//datosMuro,
  message: any,
}

