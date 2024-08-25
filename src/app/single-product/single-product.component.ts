import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductResponse } from '../services/models/product-response';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss',
})
export class SingleProductComponent implements OnInit {
  productResponse: ProductResponse = {};

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.queryParams['product-id'];
    this.productService
      .getProductById({
        'product-id': productId,
      })
      .subscribe({
        next: (product) => (this.productResponse = product),
      });
  }
}
