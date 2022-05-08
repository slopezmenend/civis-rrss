import { Time } from "@angular/common";

export interface Tweet {
  id: number;
  fecha: Date;
  usuario: number;
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
}

export const initialTweet:Tweet = {
  id: 0,
  fecha: new Date(),
  usuario: 0,
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
  ncomentarios:0
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

