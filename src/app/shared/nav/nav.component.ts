import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {
    
    title = 'tour of Heroes';

    constructor( private router: Router) {}
    
    ngOnInit() {
        
    }
}