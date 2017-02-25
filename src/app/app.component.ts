import { Component } from '@angular/core';
import { Hero } from './models/hero';

@Component({
  selector: 'my-app',
  template: `<!-- Navbar -->
        <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li ><a routerLink="/dashboard" routeLinkActive="active">Projects</a></li>
          <li><a routerLink="/heroes" routeLinkActive="active">Features</a></li>
          <li><a routerLink="/heroes" routeLinkActive="active">Contact</a></li>
        </ul>
        <router-outlet></router-outlet>
              `
})

export class AppComponent  {
 }
