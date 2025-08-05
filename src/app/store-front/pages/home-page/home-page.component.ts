import { Component } from '@angular/core';
import { ProductCardComponent } from '@app/products/components/product-card/product-card.component';

@Component({
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  products = Array.from({ length: 12 });
}
