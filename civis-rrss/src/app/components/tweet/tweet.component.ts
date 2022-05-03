import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../../models/Tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  @Input() tweet:Tweet;

  constructor() {
    this.tweet = {
      id: 0,
      fecha: new Date(),
      usuario: 0,
      padre: 0,
      titulo: '',
      text: '',
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
  }

  ngOnInit(): void {
  }

}
