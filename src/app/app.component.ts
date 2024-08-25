import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { NgFor } from '@angular/common';
import { ProductService } from './services/services';
import {
  PageResponseProductResponse,
  ProductResponse,
} from './services/models';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
