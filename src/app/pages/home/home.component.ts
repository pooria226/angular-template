import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Product,
  ProductListComponent,
} from '../../components/product-list/product-list.component';
import {
  User,
  UserListComponent,
} from '../../components/user-list/user-list.component';
import { SelectedProductsComponent } from '../../components/selected-products/selected-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent,
    UserListComponent,
    SelectedProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: Product[] = [];
  loading = false;
  error = '';
  selectedProducts: Product[] = [];
  users: User[] = [];

  onProductSelected(product: Product) {
    if (!this.selectedProducts.some((p) => p.id === product.id)) {
      this.selectedProducts.push(product);
    }
  }

  onRemoveSelectedProduct(product: Product) {
    this.selectedProducts = this.selectedProducts.filter(
      (p) => p.id !== product.id
    );
  }
}
