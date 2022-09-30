import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-meteo></app-meteo>
    <hr>
    <app-post></app-post>
  `,
  styles: [
  ]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
