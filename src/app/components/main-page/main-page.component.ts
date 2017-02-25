import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'main-page',
  templateUrl: 'main-page.component.html',
  styleUrls: [ 'main-page.sass' ]
})
export class MainPageComponent {
    constructor() { }

      myFunction(id:any):void {
        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }

      likeFunction(x:any):void {
        x.style.fontWeight = "bold";
        x.innerHTML = "✓ Liked";
    }
}
