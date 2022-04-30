import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../models/User';

@Component({
  selector: 'app-profile-side-view',
  templateUrl: './profile-side-view.component.html',
  styleUrls: ['./profile-side-view.component.scss']
})
export class ProfileSideViewComponent implements OnInit {
  @Input() usuario:User;
  constructor(public auth: AuthService) {
    this.usuario =
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
    }
  }

  ngOnInit(): void {
  }

}
