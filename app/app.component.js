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
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magento' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n  \t\t\t \n\n  \t\t\t<div *ngIf=\"selectedHero\">\n\t\t\t  <h2>{{selectedHero.name}} details!</h2>\n\t\t\t  <div><label>id: </label>{{selectedHero.id}}</div>\n\t\t\t  <div>\n\t\t\t    <label>name: </label>\n\t\t\t    <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t\n\n\t\t\t<h2>My Heroes</h2>\n\t\t\t<ul class=\"heroes\">\n \t\t \t\t\t<li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\">\n\t\t\t\t   \t\t <span class=\"badge\">{{hero.id}}</span>{{hero.name}}\n \t\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t",
            styles: ["\n\t\t\t\t  .selected {\n\t\t\t\t    background-color: #CFD8DC !important;\n\t\t\t\t    color: white;\n\t\t\t\t  }\n\t\t\t\t  .heroes {\n\t\t\t\t    margin: 0 0 2em 0;\n\t\t\t\t    list-style-type: none;\n\t\t\t\t    padding: 0;\n\t\t\t\t    width: 15em;\n\t\t\t\t  }\n\t\t\t\t  .heroes li {\n\t\t\t\t    cursor: pointer;\n\t\t\t\t    position: relative;\n\t\t\t\t    left: 0;\n\t\t\t\t    background-color: #EEE;\n\t\t\t\t    margin: .5em;\n\t\t\t\t    padding: .3em 0;\n\t\t\t\t    height: 1.6em;\n\t\t\t\t    border-radius: 4px;\n\t\t\t\t  }\n\t\t\t\t  .heroes li.selected:hover {\n\t\t\t\t    background-color: #BBD8DC !important;\n\t\t\t\t    color: white;\n\t\t\t\t  }\n\t\t\t\t  .heroes li:hover {\n\t\t\t\t    color: #607D8B;\n\t\t\t\t    background-color: #DDD;\n\t\t\t\t    left: .1em;\n\t\t\t\t  }\n\t\t\t\t  .heroes .text {\n\t\t\t\t    position: relative;\n\t\t\t\t    top: -3px;\n\t\t\t\t  }\n\t\t\t\t  .heroes .badge {\n\t\t\t\t    display: inline-block;\n\t\t\t\t    font-size: small;\n\t\t\t\t    color: white;\n\t\t\t\t    padding: 0.8em 0.7em 0 0.7em;\n\t\t\t\t    background-color: #607D8B;\n\t\t\t\t    line-height: 1em;\n\t\t\t\t    position: relative;\n\t\t\t\t    left: -1px;\n\t\t\t\t    top: -4px;\n\t\t\t\t    height: 1.8em;\n\t\t\t\t    margin-right: .8em;\n\t\t\t\t    border-radius: 4px 0 0 4px;\n\t\t\t\t  }\n\t\t\t\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map