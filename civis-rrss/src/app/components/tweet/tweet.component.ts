import { Component, OnInit, Input } from '@angular/core';
import { initialTweet, Tweet } from '../../models/Tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  @Input() tweet:Tweet = initialTweet;
  //public user_id:number;

  constructor() {
    //this.user_id = this.tweet.seguido_id;
  }

  ngOnInit(): void {
  }

}
