import { Component, OnInit } from '@angular/core';
import { ProductResponse } from '../services/models';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss',
})
export class NewProductComponent implements OnInit {
  productResponse: ProductResponse = {};
  productId: string = '';
  imageSource: string = '';

  productCover: any;
  selectedPicture: string | undefined;

  constructor(
    private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.queryParams['product-id'];
    this.productService
      .getProductById({
        'product-id': this.productId,
      })
      .subscribe({
        next: (response) => {
          this.productResponse = response;
          if (this.productResponse.productCover) {
            this.imageSource =
              'data:image/jpg;base64,' + this.productResponse.productCover;
          }
        },
      });
  }

  addPhoto() {
    this.productService
      .uploadFile({
        'product-id': this.productId,
        body: {
          file: this.productCover,
        },
      })
      .subscribe({
        next: (response) => {
          this.router.navigate(['new-product'], {
            queryParams: { 'product-id': this.productId },
          });
          window.location.reload();
        },
      });
  }

  onFileSelected(event: any) {
    this.productCover = event.target.files[0];

    if (this.productCover) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedPicture = reader.result as string;
      };
      reader.readAsDataURL(this.productCover);
    }
  }
}
