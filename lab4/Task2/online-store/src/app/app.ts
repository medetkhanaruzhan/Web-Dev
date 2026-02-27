import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<app-product-list [products]="filteredProducts"></app-product-list>

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  minPrice = 0;
  maxPrice = 1000000000;
  readonly title = 'Kaspi Store';
  
}
get filteredProducts() {
  return this.products().filter(
    p => p.price >= this.minPrice && p.price <= this.maxPrice
  );
}