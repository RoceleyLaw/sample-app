import { Component } from '@angular/core';
import { Hero } from './models/hero';

@Component({
  selector: 'my-app',
  template: `<h1>The Tour of Heroes</h1>
                <nav>
                    <a routerLink="/dashboard" routeLinkActive="active">Dashboard</a>
                    <a routerLink="/heroes" routeLinkActive="active">Heroes</a>
                </nav>
            <router-outlet></router-outlet>`
})

export class AppComponent  {
 }
