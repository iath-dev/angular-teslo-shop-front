import { ProductCardComponent } from '@/products/components/product-card/product-card.component';
import { Component } from '@angular/core';

@Component({
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  products = Array.from({ length: 12 });
}
