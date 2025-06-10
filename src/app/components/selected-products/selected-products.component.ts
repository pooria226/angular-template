import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

@Component({
  selector: 'app-selected-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss'],
})
export class SelectedProductsComponent {
  @Input() selectedProducts: Product[] = [];
  @Output() productRemoved = new EventEmitter<Product>();

  removeProduct(product: Product) {
    this.productRemoved.emit(product);
  }
}
