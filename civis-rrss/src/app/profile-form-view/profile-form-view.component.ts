import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-profile-form-view',
  templateUrl: './profile-form-view.component.html',
  styleUrls: ['./profile-form-view.component.scss']
})
export class ProfileFormViewComponent implements OnInit {
  @Input() usuario:User;
  constructor() {
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
