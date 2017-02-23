import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule  } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroService } from './services/hero.service';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroFormComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
