import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
    @Input({ required: true }) product!: Product;

    get formattedPrice(): string {
        return new Intl.NumberFormat('ru-KZ', {
            style: 'currency',
            currency: 'KZT',
            maximumFractionDigits: 0,
        }).format(this.product.price);
    }

    get stars(): { filled: boolean; partial: boolean }[] {
        return Array.from({ length: 5 }, (_, i) => ({
            filled: i < Math.floor(this.product.rating),
            partial: i === Math.floor(this.product.rating) && this.product.rating % 1 >= 0.5,
        }));
    }

    openInKaspi(): void {
        window.open(this.product.link, '_blank', 'noopener,noreferrer');
    }

    shareOnWhatsApp(): void {
        const message = encodeURIComponent(
            `Check out this product: ${this.product.name} — ${this.product.link}`
        );
        window.open(`https://wa.me/?text=${message}`, '_blank', 'noopener,noreferrer');
    }

    shareOnTelegram(): void {
        const url = encodeURIComponent(this.product.link);
        const text = encodeURIComponent(this.product.name);
        window.open(
            `https://t.me/share/url?url=${url}&text=${text}`,
            '_blank',
            'noopener,noreferrer'
        );
    }
}
