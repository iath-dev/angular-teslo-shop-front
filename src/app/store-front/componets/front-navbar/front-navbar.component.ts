import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  path: string;
  title: string;
}

const routes: NavItem[] = [
  {
    path: '/gender/men',
    title: 'Hombres',
  },
  {
    path: '/gender/women',
    title: 'Mujeres',
  },
  {
    path: '/gender/kids',
    title: 'Niños',
  },
];

@Component({
  selector: 'front-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './front-navbar.component.html',
})
export class FrontNavbarComponent {
  navRoutes = routes;
}
