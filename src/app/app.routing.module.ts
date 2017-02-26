import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'hero-detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroFormComponent },
  { path: 'main-page', component: MainPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}
