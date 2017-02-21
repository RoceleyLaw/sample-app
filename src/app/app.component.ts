import { Component } from '@angular/core';
import { Hero } from '../app/models/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'my-app',
  template: '<hero-form></hero-form>',
  providers: [HeroService]
})

export class AppComponent  {

  name = 'Angular';
  title = 'This is Our Tour of Heroes';
  heroes: Hero[];
  values = '';

  constructor(private heroService: HeroService) { }

  onClick = ():void => {
      this.name = 'this is me';
  }

  onKey = (value:string):void => { // with type info
   this.values = value + ' | ';
 }

  getHeroes = (): void => {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit = (): void  => {
    this.getHeroes();
  }

 }
