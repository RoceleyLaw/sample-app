import { Component } from '@angular/core';
import { Hero } from '../app/hero';

@Component({
  selector: 'my-app',
  template: '<hero-form></hero-form>'
})

export class AppComponent  {
  name = 'Angular';
  title = 'This is Our Tour of Heroes';
  heroes: Hero[];
  values = '';

  onClick = () => {
      this.name = 'this is me';
  }

  onKey = (value:string) => { // with type info
   this.values = value + ' | ';
 }

 }
