import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-break',
  templateUrl: './break.component.html',
  styleUrls: ['./break.component.css']
})
export class BreakComponent implements OnInit {

  classicalMusic = 'low';
  popMusic = 'medium';
  rockMusic = 'high';
  music: string;
  genres: string[] = ['low', 'medium', 'high'];

  constructor() { }

  ngOnInit(): void {
  }

}
