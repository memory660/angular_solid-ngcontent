import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-meteo></app-meteo>
    <hr>
    <h2>Dependency Inversion</h2>
    <p>injection à partir d'une interface plutôt qu'une classe</p>
    <app-post></app-post>
    <hr>
    <h2>Interface Segregation</h2>
    <p>plusieurs petites interfaces plutot qu'une grosse interface</p>
    <p>utilisation de IGetPost au lieu IPostService</p>
    <app-post2></app-post2>    
  `,
  styles: [
  ]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
