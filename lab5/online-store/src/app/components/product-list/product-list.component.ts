import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, ProductItemComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
    products = input.required<Product[]>();
    productDeleted = output<number>();

    onRemoveProduct(productId: number): void {
        this.productDeleted.emit(productId);
    }
}
