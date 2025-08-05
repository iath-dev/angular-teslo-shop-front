import { FrontNavbarComponent } from '@/store-front/components/front-navbar/front-navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, FrontNavbarComponent],
  templateUrl: './store-front-layout.component.html',
})
export class StoreFrontLayoutComponent {}
