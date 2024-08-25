import { Routes } from '@angular/router';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { NewProductComponent } from './new-product/new-product.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  {
    path: 'add-product',
    component: AddProductFormComponent,
  },
  {
    path: 'new-product',
    component: NewProductComponent,
  },
  {
    path: 'single',
    component: SingleProductComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
];
