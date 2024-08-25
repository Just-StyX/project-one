import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(private router: Router) {}

  searProductByValue(searchValue: HTMLInputElement) {
    console.log(searchValue.value);
  }

  productPage() {
    this.router.navigate(['products']);
  }
  // pricingPage() {
  //
  // }
  homePage() {
    this.router.navigate(['']);
  }

  addProduct() {
    this.router.navigate(['add-product']);
  }
}
