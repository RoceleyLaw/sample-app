import { Injectable } from '@angular/core';

import { Heroes } from '../../app/models/mock-hero'
import { Hero } from '../../app/models/hero'

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(Heroes);
  }
}
