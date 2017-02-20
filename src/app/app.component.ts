import { Component } from '@angular/core';
import { Hero } from '../app/hero';

@Component({
  selector: 'my-app',
  template: '<hero-form></hero-form>'
})

export class AppComponent  {
  name = 'Angular';
  title = 'This is Our Tour of Heroes';
  heroes: Array<Hero> = [new Hero(1,'Winston','omg','omg'),
                         new Hero(2, 'Roceley','omg','omg'),
                         new Hero(3, 'Leo','omg','omg'),
                         new Hero(2, 'Sam','omg','omg')];
  values = '';

  onClick = () => {
      this.name = 'this is me';
  }

  onKey = (value:string) => { // with type info
   this.values = value + ' | ';
 }

 }
