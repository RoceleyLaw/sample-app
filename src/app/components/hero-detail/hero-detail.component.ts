import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero }                     from '../../models/hero';
import { HeroService }              from '../../services/hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector:'hero-detail',
  providers: [HeroService],
  templateUrl: 'hero-detail.component.html',
  styleUrls: [ 'hero-detail.css' ]
})

export class HeroDetailComponent implements OnInit {
  public hero:Hero;

  constructor(
  private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location
) {}

ngOnInit(): void {
  //Route parameters are always strings.So we convert the route parameter value to a number with the JavaScript (+) operator.
  this.route.params
   .switchMap((params: Params) => this.heroService.getHero(+params['id']))
   .subscribe(hero => this.hero = hero);
}

goBack(): void {
  this.location.back();
}
}
