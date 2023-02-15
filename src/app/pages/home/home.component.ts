import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, group, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  about: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
