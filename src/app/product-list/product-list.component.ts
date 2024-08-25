import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { NgFor } from '@angular/common';
import { ProductResponse } from '../services/models/product-response';
import { PageResponseProductResponse } from '../services/models/page-response-product-response';
import { ProductService } from '../services/services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  productResponses: ProductResponse[] = [];
  pageResponse: PageResponseProductResponse = {};

  page: number = 0;
  size: number = 10;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts({ page: this.page, size: this.size })
      .subscribe({
        next: (response) => {
          console.log(response);
          this.productResponses = response.content as ProductResponse[];
        },
      });
  }
}
