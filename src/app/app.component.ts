import { Component } from '@angular/core';
import { Hero } from './models/hero';

@Component({
  selector: 'my-app',
  template: `<!-- Navbar -->
                <nav class="navbar navbar-default">
                  <div class="container">
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand" href="#">Me</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                      <ul class="nav navbar-nav navbar-right">
                        <li><a routerLink="/dashboard" routeLinkActive="active">WHO</a></li>
                        <li><a routerLink="/heroes" routeLinkActive="active">WHAT</a></li>
                        <li><a routerLink="/heroes" routeLinkActive="active">WHERE</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
            <router-outlet></router-outlet>`
})

export class AppComponent  {
 }
