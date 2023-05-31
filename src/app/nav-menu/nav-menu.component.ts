import { Component } from '@angular/core';


export interface Navdetaiils {
  to: string,
  navItemName: string
}
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})



export class NavMenuComponent {


  constructor() {

  }

  navDetails: Navdetaiils[] = [
    {
      to: 'home',
      navItemName: 'Home'
    },
    {
      to: 'about',
      navItemName: 'About'
    },
    {
      to: 'contact',
      navItemName: 'Contact'
    },
    {
      to: 'graph',
      navItemName: '  Graph'
    }
  ]

}
