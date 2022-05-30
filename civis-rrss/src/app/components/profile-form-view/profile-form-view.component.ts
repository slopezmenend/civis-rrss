import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/AppState';
import { Auth, GetProfileLoad, UpdateProfile } from 'src/app/store/profile/profile.actions';
import { IProfileState } from 'src/app/store/profile/profile.reducer';
import { initialUser, User } from '../../models/User';

@Component({
  selector: 'app-profile-form-view',
  templateUrl: './profile-form-view.component.html',
  styleUrls: ['./profile-form-view.component.scss']
})
export class ProfileFormViewComponent implements OnInit {
  @Input() lanza:boolean = false;
  public usuario:User;
  public edit:boolean = false;
  private user_id:number=0;
  //private lanza:boolean=true;
  public nombre:FormControl = new FormControl ();
  public circunscripcion:FormControl = new FormControl ();
  public partido:FormControl = new FormControl ();
  public grupo:FormControl = new FormControl ();
  public biografia:FormControl = new FormControl ();
  public ideologia:FormControl = new FormControl ();
  public ideologiaadicional:FormControl = new FormControl ();
  public web:FormControl = new FormControl ();
  public facebook:FormControl = new FormControl ();
  public twitter:FormControl = new FormControl ();
  public instagram:FormControl = new FormControl ();
  public youtube:FormControl = new FormControl ();
  public email:FormControl = new FormControl ();
  public cargando:boolean = true;

  constructor(private store:Store<IAppState>, public auth: AuthService) {
    this.usuario = initialUser;

    auth.user$.subscribe (
      value =>
      {
        if (value?.email != undefined)
        {
          let email:string = value?.email;
          console.log ("My profile Probando a logear al email: ", email);
          this.store.dispatch(Auth({email}));
        }
      }
    );

    this.store.select ('profile').subscribe (profile =>
    {
      this.user_id = profile.user_id;
      if (this.user_id != 0)
      {
        if (profile.data.id != 0)
        {
          console.log ("[ProfileForm] Profile: ", profile);
          this.usuario = profile.data;
          this.formInit();

          if (this.usuario.id == this.user_id) this.edit = true;
          console.log(this.edit);
          console.log (profile);
          console.log (this.usuario);
        }
        else
        {
          console.log ("Lanzamos el GetProfile al estar el id a 0 con ", this.user_id, this.lanza);
          if (this.lanza)
          {
            this.lanza = !this.lanza;
            this.store.dispatch(GetProfileLoad({user_id: this.user_id}));
          }
        }
      }
      else console.log ("El profile form no actuliaza al no tener user_id");
      });

    if (this.user_id != 0)
    {
      this.cargando = true;
      this.store.dispatch(GetProfileLoad({user_id: this.user_id}));
    }

  }

  ngOnInit(): void {
  }

  manageFormControl (f:FormControl, value:any, enable:boolean)
  {
    f.setValue (value);
    f.enable ({onlySelf:true});
    //console.log ("[Profile-Form] Tendría que poner el nombre a solo lectura", this.edit, this.usuario.id , this.user_id);
    if (!enable)
    {
      //console.log ("Pongo el campo como readonly");
      f.disable ({onlySelf:true});
    }
  }

  formInit ()
  {
    this.edit = this.usuario.id == this.user_id;

    console.log ("[ProfileForm] Incializando el Form");
    this.manageFormControl (this.nombre, this.usuario.nombre, this.edit);
    this.manageFormControl (this.circunscripcion, this.usuario.circunscripcion, this.edit);
    this.manageFormControl (this.partido, this.usuario.partido, this.edit);
    this.manageFormControl (this.grupo, this.usuario.grupo, this.edit);
    this.manageFormControl (this.biografia, this.usuario.biografia, this.edit);
    console.log("[ProfileForm] Ideologia: ", this.usuario.ideologia);
    this.manageFormControl (this.ideologia, this.usuario.ideologia, this.edit);
    console.log("[ProfileForm] Ideologia Form: ", this.ideologia.value);
    this.manageFormControl (this.ideologiaadicional, this.usuario.ideologiaadicional, this.edit);
    this.manageFormControl (this.web, this.usuario.web, this.edit);
    this.manageFormControl (this.facebook, this.usuario.facebook, this.edit);
    this.manageFormControl (this.twitter, this.usuario.twitter, this.edit);
    this.manageFormControl (this.instagram, this.usuario.instagram, this.edit);
    this.manageFormControl (this.youtube, this.usuario.youtube, this.edit);
    this.manageFormControl (this.email, this.usuario.email, false);

    this.cargando = false;

  }

  UpdatePerfil () {
/*    console.log ("Llamada a actualizar el perfil con:");
    console.log ("Nombre: ", this.nombre.value);
    console.log ("circunscripcion: ", this.circunscripcion.value);
    console.log ("partido: ", this.partido.value);
    console.log ("grupo: ", this.grupo.value);
    console.log ("biografia: ", this.biografia.value);
    console.log ("ideologia: ", this.ideologia.value);
    console.log ("ideologiaadicional: ", this.ideologiaadicional.value);
    console.log ("web: ", this.web.value);
    console.log ("facebook: ", this.facebook.value);
    console.log ("twitter: ", this.twitter.value);
    console.log ("instagram: ", this.instagram.value);
    console.log ("youtube: ", this.youtube.value);
    console.log ("email: ", this.email.value);*/

    this.store.dispatch (UpdateProfile ( {
      user_id: this.usuario.id,
      email: this.email.value,
      nombre: this.nombre.value,
      circunscripcion: this.circunscripcion.value,
      partido: this.partido.value,
      grupo: this.grupo.value,
      biografia: this.biografia.value,
      ideologia: this.ideologia.value,
      ideologiaadicional: this.ideologiaadicional.value,
      web: this.web.value,
      facebook: this.facebook.value,
      twitter: this.twitter.value,
      instagram: this.instagram.value,
      youtube: this.youtube.value }
    )
    );
  }

}
