import { Component, OnInit } from '@angular/core';
import { Hero }    from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';

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
  providers: [HeroService],
  templateUrl: 'hero-form.component.html',
  styleUrls:['hero-form.css']
})
export class HeroFormComponent implements OnInit {

  public title = 'Tour of Heroes';
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(
      private router: Router,
      private heroService: HeroService) { }


  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
     this.router.navigate(['/hero-detail', this.selectedHero.id]);
  }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }
}
