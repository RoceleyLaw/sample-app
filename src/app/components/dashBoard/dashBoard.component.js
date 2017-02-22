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
var hero_service_1 = require('../../services/hero.service');
var DashBoardComponent = (function () {
    function DashBoardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        this.heroes = this.heroService.getHeroes();
    };
    DashBoardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'dashBoard.component.html'
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], DashBoardComponent);
    return DashBoardComponent;
}());
exports.DashBoardComponent = DashBoardComponent;
//# sourceMappingURL=dashBoard.component.js.map