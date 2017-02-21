import { Component } from '@angular/core';
import { Hero }    from '../../../app/models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  //Understanding this component requires only the Angular concepts covered in previous guides.
  //The code imports the Angular core library, and the Hero model we just created.
  //The @Component selector value of "hero-form" means we can drop this form in a parent template with a <hero-form> tag.
  //The moduleId: module.id property sets the base for module-relative loading of the templateUrl.
  //The templateUrl property points to a separate file for the template HTML.
  //We defined dummy data for model and powers, as befits a demo. Down the road, we can inject a data service to get and save real data or perhaps expose these properties as inputs and outputs for binding to a parent component. None of this concerns us now and these future changes won't affect our form.
  //We threw in a diagnostic property to return a JSON representation of our model. It'll help us see what we're doing during our development; we've left ourselves a cleanup note to discard it later.
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {

  name: string = 'Roceley';

  powers: Array<string> = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  heroes: Hero[];

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
