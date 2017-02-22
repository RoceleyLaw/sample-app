import { Component } from '@angular/core';
import { Hero }    from '../../../app/models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  providers: [HeroService],
  templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {

  name: string = 'Roceley';

  powers: Array<string> = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  heroes: Hero[];

  values = '';

  submitted = false;

  constructor(private _heroService:HeroService){
    this.heroes = this._heroService.getHeroes();
  }

  onClick = ():void => {
      this.name = 'this is me';
  }

  onKey = (value:string):void => { // with type info
      this.values = value + ' | ';
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
