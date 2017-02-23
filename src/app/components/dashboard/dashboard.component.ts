import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  providers: [HeroService],
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.css' ]
})
export class DashboardComponent implements OnInit {
    public heroes: Hero[];

    constructor(private heroService: HeroService) { }

    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    ngOnInit(): void {
      this.getHeroes();
    }
}
