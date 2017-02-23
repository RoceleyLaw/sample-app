import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule  } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
