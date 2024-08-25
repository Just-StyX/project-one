import { Component, Input } from '@angular/core';
import { ProductResponse } from '../services/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() productResponse: ProductResponse = {};

  constructor(private router: Router) {}

  productPage() {
    this.router.navigate(['single'], {
      queryParams: { 'product-id': this.productResponse.id },
    });
  }
}
