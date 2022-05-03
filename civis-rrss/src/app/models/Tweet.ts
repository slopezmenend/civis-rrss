import { Time } from "@angular/common";

export interface Tweet {
  id: number;
  fecha: Date;
  usuario: number;
  padre: number;
  titulo: string;
  text: string;
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
