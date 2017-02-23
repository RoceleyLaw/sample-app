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
var router_1 = require('@angular/router');
var HeroFormComponent = (function () {
    function HeroFormComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
    }
    HeroFormComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroFormComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroFormComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroFormComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/hero-detail', this.selectedHero.id]);
    };
    HeroFormComponent = __decorate([
        core_1.Component({
            //Understanding this component requires only the Angular concepts covered in previous guides.
            //The code imports the Angular core library, and the Hero model we just created.
            //The @Component selector value of "hero-form" means we can drop this form in a parent template with a <hero-form> tag.
            //The moduleId: module.id property sets the base for module-relative loading of the templateUrl.
            //The templateUrl property points to a separate file for the template HTML.
            //We defined dummy data for model and powers, as befits a demo. Down the road, we can inject a data service to get and save real data or perhaps expose these properties as inputs and outputs for binding to a parent component. None of this concerns us now and these future changes won't affect our form.
            //We threw in a diagnostic property to return a JSON representation of our model. It'll help us see what we're doing during our development; we've left ourselves a cleanup note to discard it later.
            moduleId: module.id,
            selector: 'hero-form',
            providers: [hero_service_1.HeroService],
            templateUrl: 'hero-form.component.html',
            styleUrls: ['hero-form.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], HeroFormComponent);
    return HeroFormComponent;
}());
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map