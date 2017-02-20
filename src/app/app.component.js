"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_1 = require('../app/hero');
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.name = 'Angular';
        this.title = 'This is Our Tour of Heroes';
        this.heroes = [new hero_1.Hero(1, 'Winston', 'omg', 'omg'),
            new hero_1.Hero(2, 'Roceley', 'omg', 'omg'),
            new hero_1.Hero(3, 'Leo', 'omg', 'omg'),
            new hero_1.Hero(2, 'Sam', 'omg', 'omg')];
        this.values = '';
        this.onClick = function () {
            _this.name = 'this is me';
        };
        this.onKey = function (value) {
            _this.values = value + ' | ';
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{name}}</h1>\n      <h2>My favorite hero is: {{myHero}}</h2>\n      <button (click) = \"onClick()\">Click Me!</button>\n      <input #box value=\"come on\" (keyup.enter) = \"onKey(box.value); box.value=''\">\n      <button (click)=\"onKey(box.value)\">Add</button>\n      <ul>\n        <li *ngFor=\"let hero of heroes\">{{hero.name}}</li>\n        <li>{{box.value}}</li>\n      </ul>\n\n      <p>Heroes:</p>\n      <ul>\n        <li *ngFor=\"let hero of heroes\">\n          {{hero.name}}\n        </li>\n      </ul>\n      <p *ngIf=\"heroes.length > 3\">There are many heroes!</p>\n      <p>{{name}}</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map