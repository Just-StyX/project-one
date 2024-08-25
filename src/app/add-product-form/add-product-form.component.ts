import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductRequest } from '../services/models';
import { Router } from '@angular/router';
import { ProductService } from '../services/services/product.service';

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.scss',
})
export class AddProductFormComponent {
  errorMessages: Array<string> = [];
  productRequest: ProductRequest = {
    productName: '',
    productType: '',
  };

  constructor(private productService: ProductService, private router: Router) {}

  addItem() {
    this.productService
      .create({
        body: this.productRequest,
      })
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['new-product'], {
            queryParams: { 'product-id': response.id },
          });
        },
        error: (err) => {
          console.log(err);
          if (err.error.validationErrors) {
            this.errorMessages = err.error.validationErrors;
          } else {
            this.errorMessages.push(err.error.errorMsg);
          }
        },
      });
  }
}
