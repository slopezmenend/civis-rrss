import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-view',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.scss']
})
export class TimelineViewComponent implements OnInit {

  constructor() { console.log ("Entrando en Timeline view");}

  ngOnInit(): void {
  }

}
