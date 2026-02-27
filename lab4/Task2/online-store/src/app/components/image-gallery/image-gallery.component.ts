import { Component, Input, Output, EventEmitter, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-image-gallery',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './image-gallery.component.html',
    styleUrl: './image-gallery.component.scss',
})
export class ImageGalleryComponent {
    @Input({ required: true }) product!: Product;
    @Output() close = new EventEmitter<void>();

    currentIndex = signal(0);

    get currentImage(): string {
        return this.product.images[this.currentIndex()];
    }

    prev(): void {
        this.currentIndex.update((i) =>
            i === 0 ? this.product.images.length - 1 : i - 1
        );
    }

    next(): void {
        this.currentIndex.update((i) =>
            i === this.product.images.length - 1 ? 0 : i + 1
        );
    }

    selectImage(index: number): void {
        this.currentIndex.set(index);
    }

    closeGallery(): void {
        this.close.emit();
    }

    onBackdropClick(event: MouseEvent): void {
        if ((event.target as HTMLElement).classList.contains('gallery-backdrop')) {
            this.closeGallery();
        }
    }
}
