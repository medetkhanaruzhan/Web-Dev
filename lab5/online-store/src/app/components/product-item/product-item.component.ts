import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-item.component.html',
    styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
    product = input.required<Product>();
    remove = output<number>();

    get formattedPrice(): string {
        return new Intl.NumberFormat('ru-KZ', {
            style: 'currency',
            currency: 'KZT',
            maximumFractionDigits: 0,
        }).format(this.product().price);
    }

    get stars(): { filled: boolean; partial: boolean }[] {
        const rating = this.product().rating;
        return Array.from({ length: 5 }, (_, i) => ({
            filled: i < Math.floor(rating),
            partial: i === Math.floor(rating) && rating % 1 >= 0.5,
        }));
    }

    
    like(): void {
    const product = this.product();

    if (!product.liked) {
        product.likes++;
        product.liked = true;
    }
    }
    onRemove(): void {
        this.remove.emit(this.product().id);
    }

    openInKaspi(): void {
        window.open(this.product().link, '_blank', 'noopener,noreferrer');
    }

    shareOnWhatsApp(): void {
        const message = encodeURIComponent(
            `Check out this product: ${this.product().name} — ${this.product().link}`
        );
        window.open(`https://wa.me/?text=${message}`, '_blank', 'noopener,noreferrer');
    }

    shareOnTelegram(): void {
        const url = encodeURIComponent(this.product().link);
        const text = encodeURIComponent(this.product().name);
        window.open(
            `https://t.me/share/url?url=${url}&text=${text}`,
            '_blank',
            'noopener,noreferrer'
        );
    }
}
