import { Time } from "@angular/common";

export interface User {
  id: number;
  fotoperfil: string;
  idcivis: number;
  following: number;
  followers: number;
  web: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
  email: string;
  nombre: string;
  fotofondo: string;
  circunscripcion: string;
  partido: string;
  grupo: string;
  biografia: string;
  ideologia: number;
  ideologiaadicional: number;
  follows:any;
  /*created_at: string,
  updated_at: string,
  seguido_id: number|null,
  seguidor_id: number|null*/
}

export const initialUser:User =
{
  id: 0,
  fotoperfil: '',
  idcivis: 0,
  following: 0,
  followers: 0,
  web: '',
  facebook: '',
  twitter: '',
  instagram: '',
  youtube: '',
  email: '',
  nombre: '',
  fotofondo: '',
  circunscripcion: '',
  partido: '',
  grupo: '',
  biografia: '',
  ideologia: 0,
  ideologiaadicional: 0,
  follows:null
  /*created_at: '',
  updated_at: '',
  seguido_id: 0,
  seguidor_id: 0*/
};

export interface IUser {
  data: User;
  message: any
}

export interface IprofileList {
  current_page: number
  data: User[],
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
export interface IProfiles {
  data: IprofileList,
  message: any,
}
