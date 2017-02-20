import { Component } from '@angular/core';
import { Hero } from '../app/hero';

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
      <h2>My favorite hero is: {{myHero}}</h2>
      <button (click) = "onClick()">Click Me!</button>
      <input #box value="come on" (keyup.enter) = "onKey(box.value); box.value=''">
      <button (click)="onKey(box.value)">Add</button>
      <ul>
        <li *ngFor="let hero of heroes">{{hero.name}}</li>
        <li>{{box.value}}</li>
      </ul>

      <p>Heroes:</p>
      <ul>
        <li *ngFor="let hero of heroes">
          {{hero.name}}
        </li>
      </ul>
      <p *ngIf="heroes.length > 3">There are many heroes!</p>
      <p>{{name}}</p>`
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
