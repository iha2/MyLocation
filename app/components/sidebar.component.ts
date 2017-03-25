import { Component } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: './app/templates/sidebarTemplate.html'
})

export class SidebarComponent {
    sections: Route[] = [
        {title: 'route 1', url: '/'},
        {title: 'route 2', url: '/'},
        {title: 'route 3', url: '/'},
    ];
}

export class Route {
    constructor(public title: string, public url: string) {}
}