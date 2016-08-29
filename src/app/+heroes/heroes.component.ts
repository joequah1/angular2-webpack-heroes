import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero, HeroService } from './shared';

import { HeroDetailComponent } from './hero-detail'; 

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    
    heroes : Hero[];
    selectedHero: Hero;
    
    constructor( private router: Router, private heroService: HeroService) {}
    
    ngOnInit() {
        this.getHeroes();
    }
    
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    
    gotoDetail () {
        let link = ['detail', this.selectedHero.id];
        this.router.navigate(link);
    }
}
