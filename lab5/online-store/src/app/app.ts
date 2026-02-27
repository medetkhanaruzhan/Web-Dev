import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PRODUCTS, CATEGORIES } from './data/products.data';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  categories = CATEGORIES;
  products = signal<Product[]>(PRODUCTS);
  selectedCategoryId = signal<number | null>(null);

  filteredProducts = computed(() => {
    const categoryId = this.selectedCategoryId();
    const allProducts = this.products();
    if (categoryId === null) return [];
    if (categoryId === 5) {
    return allProducts.filter(p => p.liked);
    // return allProducts.filter(p => p.categoryId === categoryId);
    }
  });

  selectCategory(id: number): void {
    this.selectedCategoryId.set(id);
  }

  onDeleteProduct(productId: number): void {
    this.products.update(prev => prev.filter(p => p.id !== productId));
  }
}
