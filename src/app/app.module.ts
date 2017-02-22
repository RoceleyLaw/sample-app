import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule  } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroFormComponent } from '../app/components/hero-form/hero-form.component';
import { HeroDetailComponent } from '../app/components/hero-detail/hero-detail.component';
import { DashBoardComponent } from '../app/components/dashBoard/dashBoard.component';

import { HeroService } from './services/hero.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'hero-form',
        component: HeroFormComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path:'dashboard',
        component: DashBoardComponent
      },
      {
        path:'hero-detail',
        component: HeroDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroDetailComponent,
    DashBoardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
