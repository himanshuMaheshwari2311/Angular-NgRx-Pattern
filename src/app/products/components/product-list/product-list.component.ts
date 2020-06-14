import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  pageTitle = 'Products';

  @Input() errorMessage: string;
  @Input() displayCode: boolean;
  @Input() products: Product[];
  @Input() selectedProducts: Product;
  @Output() checked = new EventEmitter<boolean>();
  @Output() initalizeNewProduct = new EventEmitter<void>();
  @Output() selected = new EventEmitter<Product>();

  checkChanged(value: boolean): void {
    this.checked.emit(value);
  }

  newProduct(): void {
    this.initalizeNewProduct.emit();
  }

  productSelected(product: Product): void {
    this.selected.emit(product);
  }

}
